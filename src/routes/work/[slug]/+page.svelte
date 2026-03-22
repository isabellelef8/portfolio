<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.campaign.title} | Izzi LeFebvre</title>
	<meta name="description" content={data.campaign.title} />
</svelte:head>

<article class="campaign">
	<div class="hero-image">
		<div class="placeholder-image" aria-label={data.campaign.title}></div>
	</div>

	<header>
		<span class="number">{data.campaign.number}</span>
		<h1>{data.campaign.title}</h1>
		<p class="subtitle">{data.campaign.subtitle}</p>
	</header>

	<section class="content">
		<p>
			Placeholder campaign description. Details about the creative direction, strategy, and
			execution of this campaign.
		</p>
		<p>
			Additional placeholder text about the results, impact, and creative process behind
			this work.
		</p>
	</section>
</article>

<style>
	.campaign {
		max-width: 56rem;
		margin: 0 auto;
	}

	.placeholder-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		background-color: #e8e8e8;
		border-radius: 2px;
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

	.subtitle {
		font-style: italic;
		color: var(--color-text-muted);
	}

	.content {
		padding-bottom: 4rem;
	}

	@media (min-width: 640px) {
		h1 {
			font-size: 3rem;
		}
	}
</style>
