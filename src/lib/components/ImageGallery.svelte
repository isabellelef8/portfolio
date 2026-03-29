<script lang="ts">
	import type { CampaignImage } from '$lib/campaigns';

	let { images, layout = 'full' }: { images: CampaignImage[]; layout?: 'full' | 'grid' } =
		$props();
</script>

<div class="gallery" class:grid={layout === 'grid'}>
	{#each images as image}
		<img src={image.src} alt={image.alt} loading="lazy" />
	{/each}
</div>

<style>
	.gallery {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.gallery.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 2px;
	}

	@media (max-width: 480px) {
		.gallery.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
