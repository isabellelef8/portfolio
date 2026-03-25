<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { resolve } from "$app/paths";
    import { campaigns } from "$lib/campaigns";
    import { heroStuck } from "$lib/stores";

    let scrollY = $state(0);

    // Sticky header
    let h1El: HTMLElement;
    let h1Wrap: HTMLElement;
    let h1Start = $state(0);
    let targetTop = 24; // align with header padding (~1.5rem)
    let isStuck = $derived(h1Start > 0 && scrollY >= h1Start - targetTop);

    // Fade hero h1 as it approaches stuck position
    let heroOpacity = $derived(() => {
        if (h1Start === 0) return 1;
        const fadeStart = 0;
        const fadeEnd = h1Start - targetTop;
        if (scrollY <= fadeStart) return 1;
        if (scrollY >= fadeEnd) return 0;
        return 1 - scrollY / fadeEnd;
    });

    // Sync stuck state to shared store for Header
    $effect(() => {
        heroStuck.set(isStuck);
    });

    onMount(() => {
        h1Start = h1El.offsetTop;

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    scrollY = window.scrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    });

    onDestroy(() => {
        heroStuck.set(false);
    });
</script>

<svelte:head>
    <title>Isabelle LeFebvre</title>
    <meta name="description" content="Portfolio of Izzi LeFebvre" />
</svelte:head>

<section class="hero">
    <div bind:this={h1Wrap} class="h1-wrap">
        <h1 bind:this={h1El} style="opacity: {heroOpacity()}">
            Isabelle is a creative
        </h1>
    </div>
</section>

<section class="campaigns">
    {#each campaigns as campaign}
        <a href={resolve(`/work/${campaign.slug}`)} class="campaign-link">
            <span class="number">{campaign.number}</span>
            <span class="title">{campaign.title}</span>
        </a>
    {/each}
</section>

<style>
    .hero {
        padding: 4rem 0 6rem;
    }

    .hero h1 {
        font-size: 3rem;
        font-weight: 400;
        text-align: left;
    }

    .campaigns {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .campaign-link {
        display: flex;
        align-items: baseline;
        gap: 1.5rem;
        padding: 1rem 0;
        border-bottom: 1px solid var(--color-border);
        transition: opacity 0.2s;
    }

    .campaign-link:hover {
        text-decoration: none;
        opacity: 0.6;
    }

    .number {
        font-size: 0.85rem;
        color: var(--color-text-muted);
    }

    .title {
        font-size: 1.4rem;
    }

    @media (min-width: 640px) {
        .hero h1 {
            font-size: 4rem;
        }

        .title {
            font-size: 1.8rem;
        }
    }
</style>
