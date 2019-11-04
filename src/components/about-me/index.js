import React from "react";
import styled from "styled-components";

import DescriptionSection from "./description-section";
import ImageSection from "./image-section";
import GithubCorner from 'react-github-corner';
const Section = styled.section`
  display: grid;
  margin: 1rem 2rem;
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
  font-family: 'Source Code Pro', monospace;
  grid-template-rows: 4rem auto;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
`;

const Title = styled.h2`
  font-weight: normal;
  text-align: center;
  grid-column: 1 / 3;
`;

function AboutMe() {
  return (
    <Section>
      <Title></Title>
      <ImageSection />
      <DescriptionSection />
      <GithubCorner href="https://github.com/lukaszbasaj/gatsby-portfolio" />
    </Section>
  );
}

export default AboutMe;
