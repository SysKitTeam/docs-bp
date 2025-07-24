import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SharePoint Best Practices',
  tagline: 'SharePoint Best Practices Library by SPDockit',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Syskit', // Usually your GitHub org/user name.
  projectName: 'SharePoint Best Practices', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the root of baseUrl
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/SysKitTeam/docs-bp',
        },
        blog: false, // Disable the blog feature
        pages: false, // Disable the pages feature
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Comment if not needed
    announcementBar: {
      id: 'power_platform_promotion',
      content:
        'Get full Power Platform visibility with Syskit Point <a target="_blank" rel="noopener noreferrer" href="https://www.syskit.com/use-cases/power-platform-visibility-and-security/">Learn how</a>',
      backgroundColor: '#5700af',
      textColor: '#ffffff',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true, // Respect user's color scheme preference
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SharePoint Best Practices',
      logo: {
        alt: 'SharePoint Best Practices Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: '/', // Link to the docs homepage
      },
      items: [
        {
          href: 'https://www.syskit.com/products/spdockit/download/?utm_source=docs&utm_medium=docs&utm_campaign=docs_bp',
          label: 'Try SPDockit',
          position: 'right',
        },
        {
          href: 'https://www.syskit.com/contact-us/',
          label: 'Contact Us',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/syskit',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/syskit-ltd',
            },
            {
              label: 'X',
              href: 'https://twitter.com/syskitteam',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Syskit Website',
              href: 'https://www.syskit.com/',
            },
            {
              label: 'Blog',
              href: 'https://www.syskit.com/blog/',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/SysKitTeam/docs-bp',
            },
          ],
        },
      ],
      copyright: `Copyright Syskit ${new Date().getFullYear()}. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
