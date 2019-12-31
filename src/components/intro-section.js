import React, { memo } from "react";
import styled from "styled-components";
import ExternalLink from "./external-link";
import Typist from "react-typist";
import Github from "../images/social-media/github.svg";
import Codepen from "../images/social-media/codepen.svg";
import LinkedIn from "../images/social-media/linked-in.svg";
import Twitter from "../images/social-media/twitter.svg";
import Stackoverflow from "../images/social-media/stackoverflow.svg";
import Email from "../images/social-media/email.svg";

const SectionContainer = styled.section`
  display: grid;
  height: 40vh;
  padding: 2rem;
  grid-template-rows: 1fr 8rem;
  text-align: center;
  align-items: center;
  margin: 0 2rem 0 2rem;
  border-top: 0;
  border-bottom: solid;
  border-left: solid;
  border-right: solid;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Title = styled.h1`
  font-family: "Source Code Pro", monospace;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2.4rem;
  letter-spacing: 0.2rem;
  margin: 0;
`;

const IconContainer = styled.div`
  .social-media {
    height: 2rem;
    margin: 0 1rem;

    @media only screen and (max-width: 600px) {
      height: 1.6rem;
    }
  }
`;

function IntroSection() {
  const links = [
    {
      to: "https://github.com/lukaszbasaj",
      icon: Github,
    },
    {
      to: "https://stackoverflow.com/users/story/8953010",
      icon: Stackoverflow,
    },
    {
      to: "https://codepen.io/lukasz-basaj",
      icon: Codepen,
    },
    {
      to: "https://twitter.com/basajlukasz",
      icon: Twitter,
    },
    {
      to: "https://www.linkedin.com/in/lukasz-basaj/",
      icon: LinkedIn,
    },
    {
      to: "http://scr.im/basajdev",
      icon: Email,
    },
  ];

  return (
    <SectionContainer>
      <>
        <Title>
          <Typist>developer. driven by passion.</Typist>
        </Title>
      </>
      <IconContainer>
        {links.map(link => {
          const Icon = link.icon;
          return (
            <ExternalLink to={link.to} key={link.to}>
              <Icon />
            </ExternalLink>
          );
        })}
      </IconContainer>
    </SectionContainer>
  );
}

export default memo(IntroSection);
