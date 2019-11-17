import React from "react";
import styled from "styled-components";

import media from "../../utils/media";

const Container = styled.div`
  align-self: center;
  justify-self: left;
  padding: 3%;

  ${media.phone`
    grid-column: 1 / 3;
    padding: 0 4rem;

  `}
`;

const Title = styled.h2`
  align-self: center;
  font-size: 2rem;
`;

function DescriptionSection() {
  return (
    <>
      <Container>
        <Title>ŁUKASZ BASAJ</Title>
        <p>I'm a Frontend developer.</p>
        <p>I like to learn and constantly improve my skills.</p>
        <p>Things I love to talk about:</p>
        <ul>
          <li>HTML5. CSS3. JavaScript. ES6+. TypeScript. Node.js. React</li>
          <li>
            Continuous integration. Continuous delivery. Continuous deployment
          </li>
          <li>Docker. Kubernetes.</li>
          <li>Serverless. AWS. Azure. GCP.</li>
          <li>Photography</li>
          <li>Storytelling. Public speaking. Leadership</li>
        </ul>
      </Container>
    </>
  );
}

export default DescriptionSection;
