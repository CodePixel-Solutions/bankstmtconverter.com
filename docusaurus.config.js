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
  favicon: '/img/logo.svg',
  trailingSlash: false,
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://bankstmtconverter.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CodePixel-Solutions', // Usually your GitHub org/user name.
  projectName: 'bankstmtconverter.com', // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'de'], //Germany
  localeConfigs: {
    de: {
      label: 'Deutsch',
    },
  },
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
      image: '/img/logo.svg',
      navbar: {
        title: 'Bankstmtconverter.com',
        logo: {
          alt: 'My Site Logo',
          src: '/img/logo.svg',
        },
        items: [
          {
            label: 'Documentation',
            to : '/intro',
            position: 'left',
          },

          {
          type: 'localeDropdown',
          position: 'right',
        },

          {
            type: 'search',
            position: 'right',
          },

          {
            href: 'https://github.com/CodePixel-Solutions/bankstmtconverter.com',
            position: 'right',
            label: 'GitHub', // optional text
            'aria-label': 'GitHub repository',
          },
          
          {
            label: 'Login',
            href: 'https://bankstmtconverter.com/login',
             position: 'right',
            className: 'button button--primary button-custom-login text-white',
          },
        ],
      },
      algolia: {
      appId: 'YOUR_ALGOLIA_APP_ID',
      apiKey: 'YOUR_ALGOLIA_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
      footer: {
        style: 'dark',
        links: [
          {
          title: 'About Us',
          items: [
           {
            
          html: `<a href="https://bankstmtconverter.com/" target="_blank" >
                  <img src="/docs/img/logo.png" alt="BankstmtConverter" width="205" />
                </a>`,
          },
          {
                html: `<p style="padding-top: 6px;">Convert your bank statements to Excel or CSV with ease! BankStmtConverter.com offers a quick and secure solution to manage your financial data. Try it now!</p>`
          },
          
          {
        html: `
          <div style="display: flex; gap: 10px; align-items: center; padding-top: 10px;">
            <a href="https://www.capterra.com/p/10022302/BankstmtConverter/reviews/" target="_blank" rel="noopener noreferrer">
              <img src="https://brand-assets.capterra.com/badge/d6fdf049-42f6-4918-ac80-f824f360e63e.svg" 
                  alt="BankstmtConverter on Capterra" width="150" height="50" />
            </a>
            <a href="https://www.getapp.com/emerging-technology-software/a/bankstmtconverter/reviews/" target="_blank" rel="noopener noreferrer">
              <img src="https://brand-assets.getapp.com/badge/722a7ce4-c4d5-46a7-a6c7-62f439fdfbc8.png" 
                  alt="BankstmtConverter on GetApp" width="80" height="50" />
            </a>
          </div>
        `,
        }
          
          ],
        },
          {
            title: 'Resources',
            items: [
              {
                label: 'Home',
                href: 'https://bankstmtconverter.com/',
              },
              {
                label: 'Feature',
                href: 'https://bankstmtconverter.com/#features',
              },
               {
                label: 'Pricing',
                href: 'https://bankstmtconverter.com/#pricing',
              },
              {
                label: 'Free Tools',
                href: 'https://bankstmtconverter.com/tools',
              },
              {
                label: 'Blog',
                href: 'https://bankstmtconverter.com/blog',
              },
              {
                label: 'Product Updates',
                href: 'https://bankstmtconverter.com/bankstmtconverter-changelog',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Contact Us',
                href: 'https://bankstmtconverter.com/contact-us',
              },
              {
                label: 'Legal/Imprint',
                href: 'https://bankstmtconverter.com/imprint',
              },
               { label: 'Terms of Service', href: 'https://bankstmtconverter.com/terms' },
               { label: 'Privacy Policy', href: 'https://bankstmtconverter.com/privacy-policy' },
               { label: 'security', href: 'https://bankstmtconverter.com/security' },
            ],
          },
          
        ],
        copyright:`
        <div style="text-align:center; padding-top: 20px;">
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