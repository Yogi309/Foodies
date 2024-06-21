import React from "react";
import HeroSection from "./HeroSection";
import Menu from "../Menu/Menu";
import styled from "styled-components";

const Home = () => {
  const data = {
    heading: "BREAKFAST SPECIAL",
    meal: "MEAL",
    para: "Real Delicious Food Straight To Your Door. Enjoy this delicious meal",
    button: "Order Online",
    image: "images/hero-img.jpg",
  };

  return (
    <Wrapper>
      <HeroSection {...data} />
      <Menu innerPage={true} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .heading {
    margin: 5rem 0 0;
    text-transform: uppercase;
    font-size: 2.5rem;
    text-align: left;
    font-weight: 500;
    &:after {
      background-color: ${({ theme }) => theme.colors.bg};
      content: "";
      display: block;
      height: 3px;
      margin-top: 5px;
      width: 50px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .heading {
      font-size: 3rem;
      margin: 10rem 0 0;
    }
  }
`;

export default Home;
