<svelte:head>
	<title>About | Isabelle LeFebvre</title>
	<meta name="description" content="About Isabelle LeFebvre — copywriter at CURiO Brands" />
</svelte:head>

<section class="about">
	<div class="portrait">
		<img src="/images/isabelle.jpg" alt="Isabelle LeFebvre" />
	</div>

	<div class="intro">
		<h1>About</h1>
		<p>
			I'm Isabelle — a copywriter at CURiO Brands, where I write for Thymes, Capri Blue, and
			Otherland. For the past four and a half years, I've been crafting the words behind email
			campaigns, ad creative, social content, website copy, and wholesale catalogs for some of the
			most loved names in home fragrance.
		</p>
	</div>
</section>

<section class="background">
	<h2>Background</h2>
	<p>
		I've been a storyteller for as long as I can remember. Growing up in Edina, Minnesota — where the
		schools are known for their writing programs — I fell in love with language early. I wrote novels,
		short stories, and anything else I could get my hands on. That love of words led me to Luther
		College, where I earned my degree in English.
	</p>
	<p>
		After college, I found my way into brand copywriting and discovered that the same instincts that
		made me a storyteller — finding the right voice, knowing what to say and when to say it — translated
		beautifully into marketing. Now I get to do what I love every day: write words that make people feel
		something, whether it's the warmth of a new candle scent or the excitement of a holiday sale.
	</p>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		padding: 2rem 0 4rem;
	}

	.portrait img {
		width: 100%;
		border-radius: 8px;
	}

	.intro h1 {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}

	.background {
		padding-bottom: 4rem;
	}

	.background h2 {
		margin-bottom: 1rem;
	}

	@media (min-width: 640px) {
		.about {
			grid-template-columns: 1fr 1fr;
			align-items: start;
		}
	}
</style>
