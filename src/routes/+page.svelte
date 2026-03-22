<script lang="ts">
	import { resolve } from '$app/paths';
	import { campaigns } from '$lib/campaigns';
</script>

<svelte:head>
	<title>Izzi LeFebvre</title>
	<meta name="description" content="Portfolio of Izzi LeFebvre" />
</svelte:head>

<section class="hero">
	<h1>Izzi is a creative</h1>
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
