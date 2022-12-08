import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Enspire",
  titleTemplate: false,
  description: "Inspiring quotes 😇 which I came across, showcased with ♥️",
  lang: "en-US",
  appearance: true,
  cleanUrls: "without-subfolders",

  themeConfig: {
  footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright 2022-present Vedxp" },

  nav: [
    { text: 'Source Code', link: 'https://github.com/vedxp/enspire' },
    { text: 'Maintainer', link: 'https://vedxp.vercel.app/' }
    ],
  }
})
