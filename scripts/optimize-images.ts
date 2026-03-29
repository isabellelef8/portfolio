import sharp from "sharp";
import { mkdir } from "fs/promises";
import { dirname, join } from "path";

const BIN = join(import.meta.dir, "..", "bin");
const OUT = join(import.meta.dir, "..", "static", "images", "campaigns");

interface ImageEntry {
  source: string; // relative to bin/
  dest: string; // relative to static/images/campaigns/
  width: number;
}

const manifest: ImageEntry[] = [
  // ── Noir Woods ──────────────────────────────────────────
  // Hero
  {
    source: "Noir Woods/Website/hero-08-04-Noir-Woods/Homepage Hero 1/hero-08-04-noir-woods-launch-desktop.jpg",
    dest: "noir-woods/hero.jpg",
    width: 1440,
  },
  // Ads — one from each funnel level
  {
    source: "Noir Woods/Ads/08-04 Noir Woods Launch/1-Top of Funnel/Noir Woods Ad 1/Noir-Woods-Ad-1-1080x1350.jpg",
    dest: "noir-woods/ad-tof.jpg",
    width: 720,
  },
  {
    source: "Noir Woods/Ads/08-04 Noir Woods Launch/2-Middle of Funnel/Noir Woods Ad 5/Noir-Woods-Ad-5_1080x1350.jpg",
    dest: "noir-woods/ad-mof.jpg",
    width: 720,
  },
  {
    source: "Noir Woods/Ads/08-04 Noir Woods Launch/3-Bottom of Funnel/Noir Woods Ad 7/Noir-Woods-Ad-7-1080x1350.jpg",
    dest: "noir-woods/ad-bof.jpg",
    width: 720,
  },
  // Email — ecom GWP series
  {
    source: "Noir Woods/Emails/Ecom/09-12 Noir Woods GWP/09-12-Noir-Woods-GWP-1.jpg",
    dest: "noir-woods/email-ecom-1.jpg",
    width: 720,
  },
  {
    source: "Noir Woods/Emails/Ecom/09-12 Noir Woods GWP/09-15-Noir-Woods-GWP-1.jpg",
    dest: "noir-woods/email-ecom-2.jpg",
    width: 720,
  },
  // Email — wholesale
  {
    source: "Noir Woods/Emails/Wholesale/07-21 Noir Woods/07-21-Noir-Woods-1.jpg",
    dest: "noir-woods/email-wholesale.jpg",
    width: 720,
  },
  // Social — one per phase
  {
    source: "Noir Woods/Social/08-04 Noir Woods/1-Tease/NoirWoods_Teaser_In-Feed.jpg",
    dest: "noir-woods/social-tease.jpg",
    width: 720,
  },
  {
    source: "Noir Woods/Social/08-04 Noir Woods/2-Launch/NoirWoods_Launch_In-Feed_1.jpg",
    dest: "noir-woods/social-launch.jpg",
    width: 720,
  },
  {
    source: "Noir Woods/Social/08-04 Noir Woods/3-Sustain/NoirWoods_Sustain_In-Feed_1.jpg",
    dest: "noir-woods/social-sustain.jpg",
    width: 720,
  },
  // Website hero 2
  {
    source: "Noir Woods/Website/hero-08-04-Noir-Woods/Homepage Hero 2/hero-08-04-noir-woods-launch-desktop.jpg",
    dest: "noir-woods/website-hero-2.jpg",
    width: 720,
  },

  // ── Iced Matcha ─────────────────────────────────────────
  // Hero
  {
    source: "Iced Matcha/Website/hero-02-20-Iced-Matcha-Green-signature.jpg",
    dest: "iced-matcha/hero.jpg",
    width: 1440,
  },
  // Amazon
  {
    source: "Iced Matcha/Amazon/Iced Matcha Green Volcano/Amazon-Homepage-Banner-Web.jpg",
    dest: "iced-matcha/amazon-banner.jpg",
    width: 720,
  },
  {
    source: "Iced Matcha/Amazon/Signature Iced Matcha Green/Signature/Signature-Iced-Matcha-Alt-Shot-1.jpg",
    dest: "iced-matcha/amazon-signature.jpg",
    width: 720,
  },
  // Email
  {
    source: "Iced Matcha/Email/01-20 Iced Matcha/01-20-Iced-Matcha-1.jpg",
    dest: "iced-matcha/email-teaser.jpg",
    width: 720,
  },
  {
    source: "Iced Matcha/Email/02-20 Volcano Iced Matcha Launch/02-20-Volcano-Iced-Matcha-Launch-1.jpg",
    dest: "iced-matcha/email-launch-1.jpg",
    width: 720,
  },
  {
    source: "Iced Matcha/Email/02-20 Volcano Iced Matcha Launch/02-25-Volcano-Iced-Matcha-Launch-1.jpg",
    dest: "iced-matcha/email-launch-2.jpg",
    width: 720,
  },
  // Social
  {
    source: "Iced Matcha/Social/02-17 Iced Matcha Teaser/02-17-Iced-Matcha-Teaser-1.jpg",
    dest: "iced-matcha/social-teaser.jpg",
    width: 720,
  },
  {
    source: "Iced Matcha/Social/02-22 Iced Matcha Launch/02-22-Iced-Matcha-Green-Launch-Static.jpg",
    dest: "iced-matcha/social-launch.jpg",
    width: 720,
  },
  {
    source: "Iced Matcha/Social/02-23 Iced Matcha Launch/02-24-Iced-Matcha-Green-Launch-Static.jpg",
    dest: "iced-matcha/social-sustain.jpg",
    width: 720,
  },

  // ── Autumn Glow ─────────────────────────────────────────
  // Hero
  {
    source: "Autumn Glow/Website/hero-08-11-25-autumn-glow-desktop.jpg",
    dest: "autumn-glow/hero.jpg",
    width: 1440,
  },
  // Ads — one per funnel
  {
    source: "Autumn Glow/Ads/Top of Funnel/Autumn-Glow-Ad-1-1080x1350.jpg",
    dest: "autumn-glow/ad-tof.jpg",
    width: 720,
  },
  {
    source: "Autumn Glow/Ads/Middle of Funnel/Autumn-Glow-Ad-1-1080x1350.jpg",
    dest: "autumn-glow/ad-mof.jpg",
    width: 720,
  },
  {
    source: "Autumn Glow/Ads/Bottom of Funnel/Autumn-Glow-Ad-1-1080x1350.jpg",
    dest: "autumn-glow/ad-bof.jpg",
    width: 720,
  },
  // Email
  {
    source: "Autumn Glow/Emails/08-11 Autumn Glow Launch/FILES/08-11-autumn-glow-early-access-1.jpg",
    dest: "autumn-glow/email-early-access.jpg",
    width: 720,
  },
  {
    source: "Autumn Glow/Emails/08-11 Autumn Glow Launch/FILES/08-14-autumn-glow-launch.jpg",
    dest: "autumn-glow/email-launch.jpg",
    width: 720,
  },
  {
    source: "Autumn Glow/Emails/07-07 New! Autumn Glow/07-07-New-Autumn-Glow-1.jpg",
    dest: "autumn-glow/email-teaser.jpg",
    width: 720,
  },
  // Social
  {
    source: "Autumn Glow/Social/Autumn-Glow_Social-In-Feed_Launch1.jpg",
    dest: "autumn-glow/social-launch.jpg",
    width: 720,
  },
  {
    source: "Autumn Glow/Social/Autumn-Glow_Social-In-Feed_Sustain.jpg",
    dest: "autumn-glow/social-sustain.jpg",
    width: 720,
  },
  // Website
  {
    source: "Autumn Glow/Website/autumn-glow-collection-page-header-desktop.jpg",
    dest: "autumn-glow/website-collection.jpg",
    width: 720,
  },

  // ── Flora Edit ────────────────────────────────────��─────
  {
    source: "Flora Edit/Website/hero-03-06-flora-edit-launch-desktop.jpg",
    dest: "flora-edit/hero.jpg",
    width: 1440,
  },
  {
    source: "Flora Edit/Website/hero-03-06-flora-edit-launch-mobile.jpg",
    dest: "flora-edit/hero-mobile.jpg",
    width: 720,
  },

  // ── 2024 BFCM ──────────────────────────────────────────
  // Hero — use Thymes first email
  {
    source: "2024 BFCM/BFCM Emails/11-25 BFCM/11-25.jpg",
    dest: "2024-bfcm/hero.jpg",
    width: 1440,
  },
  // Thymes emails
  {
    source: "2024 BFCM/BFCM Emails/11-29 BFCM/11-29.jpg",
    dest: "2024-bfcm/thymes-email.jpg",
    width: 720,
  },
  // Capri Blue emails
  {
    source: "2024 BFCM/Capri Blue/BFCM Emails/11-29 Blue Friday/11-29-1.jpg",
    dest: "2024-bfcm/cb-email-1.jpg",
    width: 720,
  },
  {
    source: "2024 BFCM/Capri Blue/BFCM Emails/11-25 Early Access/11-25-1.jpg",
    dest: "2024-bfcm/cb-email-2.jpg",
    width: 720,
  },
  // Otherland emails
  {
    source: "2024 BFCM/Otherland/11-29 Black Friday/11-29-Black-Friday_02.jpg",
    dest: "2024-bfcm/otherland-email.jpg",
    width: 720,
  },
  // Thymes social
  {
    source: "2024 BFCM/Thymes/BFCM Social/Posts/11-29-BFCM-Social-Post.jpg",
    dest: "2024-bfcm/thymes-social.jpg",
    width: 720,
  },
  // Otherland social
  {
    source: "2024 BFCM/Otherland/11-29 Black Friday Social/11-29 Black Friday Social-03.jpg",
    dest: "2024-bfcm/otherland-social.jpg",
    width: 720,
  },

  // ── Catalogs ────────────────────────────────────────────
  // We'll handle catalog PDFs separately — for now skip
];

async function processImage(entry: ImageEntry) {
  const src = join(BIN, entry.source);
  const dst = join(OUT, entry.dest);

  await mkdir(dirname(dst), { recursive: true });

  await sharp(src)
    .resize({ width: entry.width, withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toFile(dst);

  const stat = Bun.file(dst);
  const size = (await stat.size) / 1024;
  console.log(`  ${entry.dest} (${Math.round(size)}KB)`);
}

console.log(`Processing ${manifest.length} images...`);
const results = await Promise.allSettled(manifest.map(processImage));

const failed = results.filter((r) => r.status === "rejected");
if (failed.length > 0) {
  console.error(`\n${failed.length} images failed:`);
  failed.forEach((r) => {
    if (r.status === "rejected") console.error(`  ${r.reason}`);
  });
  process.exit(1);
}

console.log(`\nDone! ${manifest.length} images optimized.`);
