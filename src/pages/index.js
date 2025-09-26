import { Redirect } from '@docusaurus/router';


export default function Home() {
  // Redirect user to the docs root, which will show the sidebar and first doc
  return <Redirect to="/doc/intro" />;   //directly open the intro page
}

