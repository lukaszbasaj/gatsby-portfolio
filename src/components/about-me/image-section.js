import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import media from "../../utils/media";

const query = graphql`
  query {
    file(relativePath: { eq: "73012030.jpg" }) {
      childImageSharp {
        fixed(width: 270, height: 270) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const StyledImg = styled(Img)`
  border-radius: 50%;
  border: solid 0.1em;

  }
`;
function ImageSection() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 150, tension: 270, friction: 100 },
  }));

  return (
    <StaticQuery
      query={query}
      render={data => (
        <StyledImg
          fixed={data.file.childImageSharp.fixed}
          alt="Me at JavaScript workshop as a trainer"
          style={{ zIndex: 1 }}
        />
      )}
    />
  );
}

export default ImageSection;
