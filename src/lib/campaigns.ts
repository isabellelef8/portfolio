export interface CampaignImage {
  src: string;
  alt: string;
}

export interface ChannelSection {
  channel: string;
  description: string;
  images: CampaignImage[];
  layout?: "full" | "grid";
}

export interface Campaign {
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  brand: string;
  period: string;
  description: string;
  hero: CampaignImage;
  channels: ChannelSection[];
}

export const campaigns: Campaign[] = [
  {
    number: "01",
    title: "Noir Woods",
    slug: "noir-woods",
    subtitle: "A dark, woodsy fragrance launch for Thymes",
    brand: "Thymes",
    period: "August 2024",
    description:
      "Led copywriting across a full-funnel campaign for Thymes' Noir Woods fragrance launch. Wrote ad copy for top, middle, and bottom-of-funnel placements, crafted an ecommerce GWP email series and wholesale announcement, and developed social content across a phased tease-launch-sustain rollout.",
    hero: {
      src: "/images/campaigns/noir-woods/hero.jpg",
      alt: "Noir Woods fragrance collection homepage hero",
    },
    channels: [
      {
        channel: "Ads",
        description:
          "Full-funnel ad creative across 9 placements — from top-of-funnel awareness to bottom-of-funnel conversion. Each ad adapted across three sizes for feed, story, and display.",
        images: [
          {
            src: "/images/campaigns/noir-woods/ad-tof.jpg",
            alt: "Noir Woods top-of-funnel ad",
          },
          {
            src: "/images/campaigns/noir-woods/ad-mof.jpg",
            alt: "Noir Woods middle-of-funnel ad",
          },
          {
            src: "/images/campaigns/noir-woods/ad-bof.jpg",
            alt: "Noir Woods bottom-of-funnel ad",
          },
        ],
        layout: "grid",
      },
      {
        channel: "Email",
        description:
          "Ecommerce GWP email series (4 emails over a week) driving gift-with-purchase conversions, plus a wholesale announcement email for retail buyers.",
        images: [
          {
            src: "/images/campaigns/noir-woods/email-ecom-1.jpg",
            alt: "Noir Woods ecommerce email — GWP launch",
          },
          {
            src: "/images/campaigns/noir-woods/email-ecom-2.jpg",
            alt: "Noir Woods ecommerce email — GWP reminder",
          },
          {
            src: "/images/campaigns/noir-woods/email-wholesale.jpg",
            alt: "Noir Woods wholesale announcement email",
          },
        ],
        layout: "full",
      },
      {
        channel: "Social",
        description:
          "Phased organic social rollout — teaser content to build anticipation, launch day reveals, and sustain posts to maintain momentum. In-feed and story formats.",
        images: [
          {
            src: "/images/campaigns/noir-woods/social-tease.jpg",
            alt: "Noir Woods social teaser post",
          },
          {
            src: "/images/campaigns/noir-woods/social-launch.jpg",
            alt: "Noir Woods social launch post",
          },
          {
            src: "/images/campaigns/noir-woods/social-sustain.jpg",
            alt: "Noir Woods social sustain post",
          },
        ],
        layout: "grid",
      },
      {
        channel: "Website",
        description:
          "Homepage hero banners in multiple variants, each with desktop and mobile adaptations for the Thymes website.",
        images: [
          {
            src: "/images/campaigns/noir-woods/website-hero-2.jpg",
            alt: "Noir Woods homepage hero variant",
          },
        ],
        layout: "full",
      },
    ],
  },
  {
    number: "02",
    title: "Iced Matcha",
    slug: "iced-matcha",
    subtitle: "A fresh colorway launch for Capri Blue's Volcano line",
    brand: "Capri Blue",
    period: "February 2025",
    description:
      "Wrote copy for the launch of Capri Blue's Iced Matcha Green colorway across the Signature and Volcano lines. Developed email copy for a teaser and multi-day launch series, social captions for a week-long rollout, and Amazon product listing copy for four product variants.",
    hero: {
      src: "/images/campaigns/iced-matcha/hero.jpg",
      alt: "Iced Matcha Green Signature candle hero image",
    },
    channels: [
      {
        channel: "Amazon",
        description:
          "Product listing photography and copy for four Iced Matcha variants — Signature, Petite, Mini Tin, and Printed Travel Tin — plus homepage banner assets.",
        images: [
          {
            src: "/images/campaigns/iced-matcha/amazon-banner.jpg",
            alt: "Iced Matcha Amazon homepage banner",
          },
          {
            src: "/images/campaigns/iced-matcha/amazon-signature.jpg",
            alt: "Iced Matcha Signature candle product shot",
          },
        ],
        layout: "grid",
      },
      {
        channel: "Email",
        description:
          "Teaser email building anticipation, followed by a multi-day Volcano Iced Matcha launch series including an A/B tested variant.",
        images: [
          {
            src: "/images/campaigns/iced-matcha/email-teaser.jpg",
            alt: "Iced Matcha teaser email",
          },
          {
            src: "/images/campaigns/iced-matcha/email-launch-1.jpg",
            alt: "Volcano Iced Matcha launch email",
          },
          {
            src: "/images/campaigns/iced-matcha/email-launch-2.jpg",
            alt: "Volcano Iced Matcha follow-up email",
          },
        ],
        layout: "full",
      },
      {
        channel: "Social",
        description:
          "Week-long social rollout starting with teaser imagery, launch day reveal videos, and daily story and in-feed posts through the launch window.",
        images: [
          {
            src: "/images/campaigns/iced-matcha/social-teaser.jpg",
            alt: "Iced Matcha social teaser",
          },
          {
            src: "/images/campaigns/iced-matcha/social-launch.jpg",
            alt: "Iced Matcha social launch post",
          },
          {
            src: "/images/campaigns/iced-matcha/social-sustain.jpg",
            alt: "Iced Matcha social sustain post",
          },
        ],
        layout: "grid",
      },
    ],
  },
  {
    number: "03",
    title: "Autumn Glow",
    slug: "autumn-glow",
    subtitle: "A seasonal fragrance launch for Thymes",
    brand: "Thymes",
    period: "July – August 2025",
    description:
      "Led copywriting for Thymes' Autumn Glow seasonal fragrance launch. Developed a full-funnel ad strategy, a 7-email launch series including VIP early access, organic social content, and website hero and collection page copy.",
    hero: {
      src: "/images/campaigns/autumn-glow/hero.jpg",
      alt: "Autumn Glow fragrance collection homepage hero",
    },
    channels: [
      {
        channel: "Ads",
        description:
          "Full-funnel ad set with two creatives per funnel stage, each adapted to three sizes — feed (1080x1350), story (1080x1920), and display (1200x628).",
        images: [
          {
            src: "/images/campaigns/autumn-glow/ad-tof.jpg",
            alt: "Autumn Glow top-of-funnel ad",
          },
          {
            src: "/images/campaigns/autumn-glow/ad-mof.jpg",
            alt: "Autumn Glow middle-of-funnel ad",
          },
          {
            src: "/images/campaigns/autumn-glow/ad-bof.jpg",
            alt: "Autumn Glow bottom-of-funnel ad",
          },
        ],
        layout: "grid",
      },
      {
        channel: "Email",
        description:
          "Seven-email launch series spanning early VIP access through broad launch, including a teaser email, two early access sends, and four launch emails with distinct angles.",
        images: [
          {
            src: "/images/campaigns/autumn-glow/email-teaser.jpg",
            alt: "Autumn Glow teaser email",
          },
          {
            src: "/images/campaigns/autumn-glow/email-early-access.jpg",
            alt: "Autumn Glow VIP early access email",
          },
          {
            src: "/images/campaigns/autumn-glow/email-launch.jpg",
            alt: "Autumn Glow launch email",
          },
        ],
        layout: "full",
      },
      {
        channel: "Social",
        description:
          "Organic social content across in-feed posts and stories — teaser, launch, and sustain phases.",
        images: [
          {
            src: "/images/campaigns/autumn-glow/social-launch.jpg",
            alt: "Autumn Glow social launch post",
          },
          {
            src: "/images/campaigns/autumn-glow/social-sustain.jpg",
            alt: "Autumn Glow social sustain post",
          },
        ],
        layout: "grid",
      },
      {
        channel: "Website",
        description:
          "Homepage hero banners and collection page headers with desktop and mobile variants.",
        images: [
          {
            src: "/images/campaigns/autumn-glow/website-collection.jpg",
            alt: "Autumn Glow collection page header",
          },
        ],
        layout: "full",
      },
    ],
  },
  {
    number: "04",
    title: "Flora Edit",
    slug: "flora-edit",
    subtitle: "A botanical collection launch for Capri Blue",
    brand: "Capri Blue",
    period: "March 2025",
    description:
      "Wrote website copy for the Flora Edit collection launch, including homepage hero messaging for the Capri Blue website. A focused effort centered on collection positioning and web presence.",
    hero: {
      src: "/images/campaigns/flora-edit/hero.jpg",
      alt: "Flora Edit collection homepage hero",
    },
    channels: [
      {
        channel: "Website",
        description:
          "Homepage hero banners for the Flora Edit launch — desktop and mobile versions with collection positioning copy.",
        images: [
          {
            src: "/images/campaigns/flora-edit/hero-mobile.jpg",
            alt: "Flora Edit mobile homepage hero",
          },
        ],
        layout: "full",
      },
    ],
  },
  {
    number: "05",
    title: "2024 BFCM",
    slug: "2024-bfcm",
    subtitle: "A cross-brand Black Friday & Cyber Monday campaign",
    brand: "Thymes + Capri Blue + Otherland",
    period: "November – December 2024",
    description:
      "Led copywriting across a 9-day Black Friday / Cyber Monday sale event spanning three brands — Thymes, Capri Blue, and Otherland. Wrote daily email sends, coordinated social content, and developed video ad scripts. Each brand had its own voice and promotional angle while maintaining cohesive cross-brand messaging.",
    hero: {
      src: "/images/campaigns/2024-bfcm/hero.jpg",
      alt: "2024 BFCM campaign — Thymes holiday email",
    },
    channels: [
      {
        channel: "Email — Thymes",
        description:
          "Nine daily emails for Thymes covering the full BFCM window, from early access through final Cyber Monday extensions.",
        images: [
          {
            src: "/images/campaigns/2024-bfcm/thymes-email.jpg",
            alt: "Thymes BFCM email",
          },
        ],
        layout: "full",
      },
      {
        channel: "Email — Capri Blue",
        description:
          "Nine themed daily emails for Capri Blue — from Early Access and Blue Friday to Gift Guide and Cyber Monday — each with a distinct promotional angle.",
        images: [
          {
            src: "/images/campaigns/2024-bfcm/cb-email-2.jpg",
            alt: "Capri Blue BFCM early access email",
          },
          {
            src: "/images/campaigns/2024-bfcm/cb-email-1.jpg",
            alt: "Capri Blue Blue Friday email",
          },
        ],
        layout: "full",
      },
      {
        channel: "Email — Otherland",
        description:
          "Eight daily emails for Otherland spanning Black Friday through Cyber Monday with matching social content.",
        images: [
          {
            src: "/images/campaigns/2024-bfcm/otherland-email.jpg",
            alt: "Otherland Black Friday email",
          },
        ],
        layout: "full",
      },
      {
        channel: "Social",
        description:
          "Daily organic social posts and stories across all three brands, coordinated to match the email cadence.",
        images: [
          {
            src: "/images/campaigns/2024-bfcm/thymes-social.jpg",
            alt: "Thymes BFCM social post",
          },
          {
            src: "/images/campaigns/2024-bfcm/otherland-social.jpg",
            alt: "Otherland BFCM social post",
          },
        ],
        layout: "grid",
      },
    ],
  },
  {
    number: "06",
    title: "Catalogs",
    slug: "catalogs",
    subtitle: "Wholesale catalog copywriting for Capri Blue & Thymes",
    brand: "Capri Blue + Thymes",
    period: "2022 – 2026",
    description:
      "Wrote product descriptions, collection copy, and seasonal messaging for wholesale catalogs across Capri Blue and Thymes. Spanning multiple seasons from Spring/Summer 2022 through Holiday 2026, these catalogs serve as the primary sales tool for retail buyers.",
    hero: {
      src: "/images/campaigns/noir-woods/hero.jpg",
      alt: "Thymes and Capri Blue wholesale catalogs",
    },
    channels: [],
  },
];
