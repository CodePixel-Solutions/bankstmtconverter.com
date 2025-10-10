import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
    const { i18n } = useDocusaurusContext();
    const { currentLocale, defaultLocale } = i18n;

   const redirectTo =
    currentLocale === defaultLocale
      ? '/docs/intro'
      : `/docs/${currentLocale}/intro`;

  // Redirect user to the docs root, which will show the sidebar and first doc
 return <Redirect to={redirectTo} />;   //directly open the intro page
}

