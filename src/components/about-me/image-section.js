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
  
`

const Container = styled.div`
  place-self: end;
  right: 5%;
  position: relative;
  overflow: hidden;
 

  ${media.phone`
    grid-column: 1/3;
    width: 100%;
    left: 10%;


    &>.gatsby-image-wrapper {
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
    }
  `}
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1.02,
];
const trans = (x, y, s) =>
  `perspective(5000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ImageSection() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 150, tension: 350, friction: 100 },
  }));

  const AnimatedContainer = animated(Container);
  return (
    <AnimatedContainer
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
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
    </AnimatedContainer>
  );
}

export default ImageSection;
