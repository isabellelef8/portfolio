<script lang="ts">
    import Header from "./Header.svelte";
    import "./layout.css";

    let { children } = $props();
</script>

<div class="app">
    <Header />

    <main>
        {@render children()}
    </main>

    <footer>
        <p>
            Forged by <a href="https://hammer-anvil.com"
                >Hammer <span class="amp">&</span> Anvil</a
            >
        </p>
    </footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        width: 100%;
        max-width: 720px;
        margin: 0 auto;
        padding: 2rem;
        box-sizing: border-box;
    }

    footer {
        width: 100%;
        max-width: 720px;
        margin: 0 auto;
        padding: 3rem 2rem;
        box-sizing: border-box;
        text-align: center;
        color: var(--color-text-muted);
        font-size: 0.75rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        opacity: 0.4;
    }

    footer a {
        color: var(--color-text-muted);
        transition: opacity 0.8s;
    }

    footer a:hover {
        opacity: 0.7;
        text-decoration: none;
    }

    footer .amp {
        font-style: italic;
        text-transform: none;
    }
</style>
