<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { resolve } from "$app/paths";
    import { campaigns } from "$lib/campaigns";
    import { heroStuck } from "$lib/stores";

    let scrollY = $state(0);
    let campaignsEl: HTMLElement;

    // Sticky header
    let h1El: HTMLElement;
    let h1Wrap: HTMLElement;
    let h1Start = $state(0);
    let targetTop = 24; // align with header padding (~1.5rem)
    let isStuck = $derived(h1Start > 0 && scrollY >= h1Start - targetTop);

    // Fade hero h1 and arrow as user scrolls
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

    function scrollToCampaigns() {
        campaignsEl?.scrollIntoView({ behavior: "smooth" });
    }

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

    <button
        class="scroll-arrow"
        onclick={scrollToCampaigns}
        aria-label="Scroll to campaigns"
        style="opacity: {heroOpacity()}"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    </button>
</section>

<section class="campaigns" id="campaigns" bind:this={campaignsEl}>
    <h2>Work</h2>
    {#each campaigns as campaign}
        <a href={resolve(`/work/${campaign.slug}`)} class="campaign-link">
            <span class="number">{campaign.number}</span>
            <span class="title">{campaign.title}</span>
        </a>
    {/each}
</section>

<style>
    .hero {
        min-height: calc(100dvh - 4.5rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .hero h1 {
        font-size: 3rem;
        font-weight: 400;
        text-align: center;
    }

    .scroll-arrow {
        position: absolute;
        bottom: 2rem;
        background: none;
        border: none;
        color: var(--color-text);
        cursor: pointer;
        padding: 0.5rem;
        animation: bounce 2s ease infinite;
        transition: opacity 0.2s;
    }

    .scroll-arrow:hover {
        opacity: 0.6 !important;
    }

    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(8px);
        }
    }

    .campaigns {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        scroll-margin-top: 4.5rem;
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
