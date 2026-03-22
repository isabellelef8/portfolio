<svelte:head>
	<title>About | Izzi LeFebvre</title>
	<meta name="description" content="About Izzi LeFebvre" />
</svelte:head>

<section class="about">
	<div class="portrait">
		<div class="placeholder-image" aria-label="Portrait photo"></div>
	</div>

	<div class="intro">
		<h1>About</h1>
		<p>
			Placeholder introduction text. A brief description of who Izzi is and what drives her
			creative work.
		</p>
	</div>
</section>

<section class="background">
	<h2>Background</h2>
	<p>
		Placeholder background text. Experience, education, and professional journey. Include details
		about agencies, brands, and projects worked on.
	</p>
	<p>
		Additional placeholder text about creative philosophy, approach to work, and what makes her
		perspective unique.
	</p>
</section>

<section class="contact">
	<h2>Get in touch</h2>
	<p>izzi@example.com</p>
</section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		padding: 2rem 0 4rem;
	}

	.placeholder-image {
		width: 100%;
		aspect-ratio: 3 / 4;
		background-color: #e8e8e8;
		border-radius: 2px;
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

	.contact {
		padding-bottom: 4rem;
	}

	.contact h2 {
		margin-bottom: 0.5rem;
	}

	@media (min-width: 640px) {
		.about {
			grid-template-columns: 1fr 1fr;
			align-items: start;
		}
	}
</style>
