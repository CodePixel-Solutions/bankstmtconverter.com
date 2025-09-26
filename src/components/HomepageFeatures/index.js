import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Easy to Use',
  //   Svg: require('@site/static/img/logo.svg').default,
  //   description: (
  //     <>
  //       <p>BankStmtConverter is designed to make converting your bank statements effortless. Simply upload your file, and let our system handle the rest.</p>
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       <p>Spend less time managing your financial data. Our AI-powered platform detects tables and extracts data automatically, so you can focus on analyzing your finances instead of manually entering numbers.</p>
  //     </>
  //   ),
  // },
  // {
  //   title: 'Upload, Convert, Download',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       <p>1. <strong>Upload</strong> your bank statement (PDF, JPG, PNG).<br/>
  //          2. <strong>Convert</strong> it to your desired format (Excel, CSV, Google Sheets).<br/>
  //          3. <strong>Download</strong> the processed file instantly and start using it right away.
  //       </p>
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
