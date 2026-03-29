<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';

	let { data } = $props();
	let campaign = $derived(data.campaign);
</script>

<svelte:head>
	<title>{campaign.title} | Isabelle LeFebvre</title>
	<meta name="description" content={campaign.description} />
</svelte:head>

<article class="campaign">
	<img class="hero-image" src={campaign.hero.src} alt={campaign.hero.alt} />

	<header>
		<span class="number">{campaign.number}</span>
		<h1>{campaign.title}</h1>
		<p class="meta">{campaign.brand} &middot; {campaign.period}</p>
		<p class="subtitle">{campaign.subtitle}</p>
	</header>

	<section class="description">
		<p>{campaign.description}</p>
	</section>

	{#each campaign.channels as section}
		<section class="channel">
			<h2>{section.channel}</h2>
			<p>{section.description}</p>
			<ImageGallery images={section.images} layout={section.layout ?? 'full'} />
		</section>
	{/each}
</article>

<style>
	.campaign {
		max-width: 56rem;
		margin: 0 auto;
	}

	.hero-image {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}

	header {
		padding: 3rem 0 2rem;
	}

	.number {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		display: block;
		margin-bottom: 0.5rem;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 400;
		margin: 0 0 0.5rem;
	}

	.meta {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-style: italic;
		color: var(--color-text-muted);
	}

	.description {
		padding-bottom: 2rem;
	}

	.channel {
		padding: 2rem 0;
		border-top: 1px solid var(--color-border);
	}

	.channel h2 {
		margin: 0 0 0.5rem;
	}

	.channel p {
		margin: 0 0 1.5rem;
		color: var(--color-text-muted);
	}

	@media (min-width: 640px) {
		h1 {
			font-size: 3rem;
		}
	}
</style>
