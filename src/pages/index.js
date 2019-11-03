import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import IntroSection from "../components/intro-section";
import AboutMe from "../components/about-me";

const IndexPage = () => (
  <Layout>
    <AboutMe />
    <SEO
      title="Home"
      keywords={[`portfolio`, `lukaszbasaj`, `basaj.dev`]}
    />
    <IntroSection />
  </Layout>
);

export default IndexPage;
