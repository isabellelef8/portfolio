<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>izzi@example.com</p>
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
		padding: 2rem;
		box-sizing: border-box;
		text-align: center;
		color: var(--color-text-muted);
		font-size: 0.85rem;
	}
</style>
