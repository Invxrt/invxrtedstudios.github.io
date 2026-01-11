import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const curseForgeApiKey = process.env.CURSEFORGE_API_KEY ?? process.env.CF_API_KEY ?? '';
// Public author id can be baked in; env overrides if provided
const curseForgeAuthorId =
  process.env.CURSEFORGE_AUTHOR_ID ??
  process.env.CF_AUTHOR_ID ??
  process.env.CURSEFORGE_MEMBER_ID ??
  process.env.CF_MEMBER_ID ??
  'YOUR_CURSEFORGE_MEMBER_ID'; // Update with invxrtedstudios member ID

const config: Config = {
  title: 'Invxrted Studios',
  tagline: 'Minecraft Modpacks by Tyson',
  favicon: 'img/invxrted-icon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://invxrtedstudios.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/invxrtedstudios.github.io/',

  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'invxrtedstudios', // Usually your GitHub org/user name.
  projectName: 'invxrtedstudios.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    curseForgeApiKey,
    curseForgeAuthorId: Number(curseForgeAuthorId),
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable main docs
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'emc-to-the-sky',
        path: 'docs-emc-to-the-sky',
        routeBasePath: 'emc-to-the-sky',
        sidebarPath: './sidebars-emc-sky.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'emc-space-age',
        path: 'docs-emc-space-age',
        routeBasePath: 'emc-space-age',
        sidebarPath: './sidebars-emc-space.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'subterra-tech',
        path: 'docs-subterra-tech',
        routeBasePath: 'subterra-tech',
        sidebarPath: './sidebars-subterra.ts',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Invxrted Studios',
      logo: {
        alt: 'Invxrted Studios Logo',
        src: 'img/invxrted-icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'emcSkySidebar',
          docsPluginId: 'emc-to-the-sky',
          position: 'left',
          label: 'EMC: To The Sky!',
        },
        {
          type: 'docSidebar',
          sidebarId: 'emcSpaceSidebar',
          docsPluginId: 'emc-space-age',
          position: 'left',
          label: 'EMC: Space Age',
        },
        {
          type: 'docSidebar',
          sidebarId: 'subterraSidebar',
          docsPluginId: 'subterra-tech',
          position: 'left',
          label: 'SubTerra Tech',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/YOUR_DISCORD_INVITE',
            },
            {
              label: 'CurseForge',
              href: 'https://www.curseforge.com/members/invxrtedstudios/projects',
            },
          ],
        },
        {
          title: 'Modpacks',
          items: [
            {
              label: 'EMC: To The Sky!',
              to: '/emc-to-the-sky/intro',
            },
            {
              label: 'EMC: Space Age',
              to: '/emc-space-age/intro',
            },
            {
              label: 'SubTerra Tech',
              to: '/subterra-tech/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Invxrted Studios. Website made by <a href="https://tysontheember.dev" target="_blank" rel="noopener noreferrer" style="color: var(--ifm-color-primary); text-decoration: underline;">TysonTheEmber</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
