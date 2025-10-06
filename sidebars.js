// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 tutorialSidebar: [
  'intro',
  {
      type: 'category',
      label: 'Get Started',
      items: [
        'get-started/create-an-account',
        'get-started/dashboard-overview', 
      ],
  },
    {
    type: 'category',
      label: 'How To Use Bankstmt Converter',
      items: [
        'how-to-use/upload-first-document',
        'how-to-use/supported-formats',
      ],
  },
  'home',
  'features',
  {
    type: 'category',
      label: 'How It Works',
      items: [
        'how-it-works/conversion-process',
        'how-it-works/ai-model-works',
        'how-it-works/ocr-processing',
      ],
  },
  'statement',
  'mailbox',
  {
    type: 'category',
    label: 'Integrations',
    items: [
      'integration/webhooks', 
      'integration/google-sheets',
    ],
  },
  {
     type: 'category',
      label: 'Settings',
      items: [
        'settings/billing-invoice',
        'settings/notification-settings',
        'settings/security',
      ],
  },
  'api-key',
    {
      type: 'category',
      label: 'Auto Email Forwarding',
      items: [
        'auto-email-forwarding/gmail-forwarding',
        'auto-email-forwarding/outlook-forwarding',
        'auto-email-forwarding/yahoo-forwarding',
        'auto-email-forwarding/apple-icloud-forwarding',
      ],
    },
  'tools',
  'faqs',
  {
     type: 'category',
    label: 'Release Notes',
    items: [
      'release-notes/latest-updates', 
      'release-notes/version-history',
    ],
  },
  'data-security-privacy',
  'contact-support',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
