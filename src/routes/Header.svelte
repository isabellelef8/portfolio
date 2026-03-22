<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<header>
	<a href={resolve('/')} class="site-name">Izzi LeFebvre</a>

	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href={resolve('/')}>Home</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href={resolve('/about')}>About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2rem;
	}

	.site-name {
		font-size: 1.1rem;
		font-weight: 400;
		letter-spacing: 0.02em;
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

	li[aria-current='page'] a {
		border-bottom: 1px solid var(--color-text);
	}
</style>
