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
        <nav class="social-links" aria-label="Social links">
            <a
                href="https://www.linkedin.com/in/isabelle-lefebvre-69ab26170/"
                aria-label="LinkedIn"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    /><rect width="4" height="12" x="2" y="9" /><circle
                        cx="4"
                        cy="4"
                        r="2"
                    /></svg
                >
            </a>
            <a href="mailto:izzilefebvre@gmail.com" aria-label="Email">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><rect width="20" height="16" x="2" y="4" rx="2" /><path
                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    /></svg
                >
            </a>
            <a
                href="https://www.instagram.com/whatisabelle?igsh=NjJubXJoazZ4emo2"
                aria-label="Instagram"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                    /><path
                        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
                >
            </a>
        </nav>
        <p class="credit">
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
        font-family: var(--font-body);
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .social-links a {
        color: var(--color-text);
        transition: opacity 0.2s;
    }

    .social-links a:hover {
        opacity: 0.6;
        text-decoration: none;
    }

    .credit {
        color: var(--color-text-muted);
        font-size: 0.75rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        opacity: 0.4;
    }

    .credit a {
        color: var(--color-text-muted);
        transition: opacity 0.8s;
    }

    .credit a:hover {
        opacity: 0.7;
        text-decoration: none;
    }

    footer .amp {
        font-style: italic;
        text-transform: none;
    }
</style>
