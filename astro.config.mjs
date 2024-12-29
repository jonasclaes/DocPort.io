// @ts-check
import { defineConfig } from "astro/config";
import basicSsl from "@vitejs/plugin-basic-ssl";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/en/home",
  },
  vite: {
    plugins: [basicSsl()],
    server: {
      https: {},
    },
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "components/storyblok/Page",
        grid: "components/storyblok/Grid",
        teaser: "components/storyblok/Teaser",
        feature: "components/storyblok/Feature",
        hero: "components/storyblok/Hero",
        sponsors: "components/storyblok/Sponsors",
        services: "components/storyblok/Services",
        proposal: "components/storyblok/Proposal",
        cases: "components/storyblok/Cases",
        process: "components/storyblok/Process",
        team: "components/storyblok/Team",
        testimonials: "components/storyblok/Testimonials",
        contact: "components/storyblok/Contact",
      },
    }),
    tailwind(),
  ],
});
