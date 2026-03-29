<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import { heroStuck } from "$lib/stores";

    const isHome = $derived(page.url.pathname === "/");
    let stuck = $state(false);
    heroStuck.subscribe((v) => (stuck = v));
</script>

<header>
    <a
        href={resolve("/")}
        class="site-name"
        style="opacity: {isHome && !stuck ? 0 : 1}; pointer-events: {isHome &&
        !stuck
            ? 'none'
            : 'auto'}"
    >
        Isabelle LeFebvre
    </a>

    <nav>
        <ul>
            <li aria-current={page.url.pathname === "/" && stuck ? "page" : undefined}>
                <a href={resolve("/#campaigns")}>Work</a>
            </li>
            <li
                aria-current={page.url.pathname === "/about"
                    ? "page"
                    : undefined}
            >
                <a href={resolve("/about")}>About</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 100;
        background: var(--color-bg, #fff);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 720px;
        margin: 0 auto;
        padding: 1.5rem 2rem;
        box-sizing: border-box;
    }

    .site-name {
        font-size: 1.1rem;
        font-weight: 400;
        letter-spacing: 0.02em;
        transition: opacity 0.3s ease;
    }

    nav ul {
        display: flex;
        gap: 1.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    nav a {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        transition: opacity 0.2s;
    }

    nav a:hover {
        text-decoration: none;
        opacity: 0.6;
    }

    li[aria-current="page"] a {
        border-bottom: 1px solid var(--color-text);
    }
</style>
