# Hey Isabelle!

This is your portfolio website. It shows off the campaign work you've done at CURiO Brands — Thymes, Capri Blue, and Otherland. The site is built with [SvelteKit](https://svelte.dev/docs/kit), which is a framework for building websites. You don't need to know how all of it works — this guide covers what you'll actually need day-to-day.

## Where things live

Here's a quick map of the project:

```
src/
  routes/           ← the pages of your site
    +page.svelte       homepage
    about/             your about page
    work/[slug]/       campaign detail pages (Noir Woods, Iced Matcha, etc.)
  lib/
    campaigns.ts    ← all the campaign data (titles, descriptions, images)
    components/     ← reusable pieces like the image gallery

static/
  images/campaigns/ ← the optimized images that show up on campaign pages

bin/                ← your raw campaign files (not published to the site)
```

The files that end in `.svelte` are the actual pages — they're a mix of HTML, CSS, and a little JavaScript. If you remember HTML/CSS from college, a lot of it will look familiar!

## Running the site locally

Open your terminal, navigate to this project folder, and use the justfile commands:

```sh
# start the dev server (you'll see your site at http://localhost:5173)
just dev

# build the production version
just build

# see all available commands
just
```

While `just dev` is running, any changes you save will show up in the browser automatically — no need to refresh.

## Making changes

You already know the git basics, so here's the workflow:

1. Make your edits and save the file
2. `git add .` to stage your changes
3. `git commit -m "describe what you changed"` to save a snapshot
4. `git push` to send it to GitHub

If you're ever unsure what's changed, `git status` will show you.

## Key files you'll touch

| What you want to do | Where to look |
|---------------------|---------------|
| Edit campaign info (titles, descriptions, images) | `src/lib/campaigns.ts` |
| Change your about page | `src/routes/about/+page.svelte` |
| Change the homepage | `src/routes/+page.svelte` |
| Add/replace campaign images | `static/images/campaigns/` |
| Update site-wide styles (fonts, colors) | `src/routes/layout.css` |

## Adding new campaign images

The raw files from your work live in `bin/`. When you want to add new images to the site:

1. Pick the best images from `bin/`
2. Run the optimization script: `bun run scripts/optimize-images.ts`
   (you may need to update the script to include your new images first — ask Louis if you need help with this)
3. The optimized images will appear in `static/images/campaigns/`
4. Reference them in `src/lib/campaigns.ts`

## Getting help

If you get stuck or something breaks, don't worry! You can:

- Ask Louis
- Use [Claude Code](https://claude.com/claude-code) — it can read your project and help you make changes
- Check the [SvelteKit docs](https://svelte.dev/docs/kit) if you're curious about how things work under the hood
