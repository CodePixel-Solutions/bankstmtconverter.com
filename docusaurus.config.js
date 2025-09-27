// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Of Bankstmtconverter.com',
  tagline: 'Statements Made Simple',
  favicon: 'img/logo.svg',
  trailingSlash: false,
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://bankstmtconverter.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CodePixel-Solutions', // Usually your GitHub org/user name.
  projectName: 'bankstmtconverter.com', // Usually your repo name.

  customFields: {
    cname: 'docs.bankstmtconverter.com',
  },

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
           routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CodePixel-Solutions/bankstmtconverter.com/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CodePixel-Solutions/bankstmtconverter.com/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: 'Bankstmtconverter.com',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Documentation',
            to : 'intro',
            position: 'left',
          },
          
          {
            label: 'Login',
            href: 'https://bankstmtconverter.com/login',
             position: 'right',
            className: 'button button--primary button-custom-login text-white',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
            {
      title: 'About',
      items: [
        { label: 'BankStmtConverter', to: '/' },
      
      ],
    },
          {
            title: 'Community',
            items: [
               {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/codeplug-technologies',
              },

               { label: 'GitHub', href: 'https://github.com/codeplugtech' },
              
              {
                label: 'Discord',
                href: 'https://discord.gg/bankstmtconverter',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/BankStmtConverter',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
             
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
              {
                label: 'Instagram',
                href:'https://instagram.com/invite/docusaurus'

              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/invite/docusaurus'

              },
            ],
          },
          {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', href: 'https://bankstmtconverter.com/privacy-policy' },
            { label: 'Terms of Service', href: 'https://bankstmtconverter.com/terms' },
          ],
        },
        ],
        copyright:`
        <div style="text-align:center; padding-top:10px;">
          CodePixel Solutions Private Limited &copy; ${new Date().getFullYear()} <br/>
        </div>
      `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
