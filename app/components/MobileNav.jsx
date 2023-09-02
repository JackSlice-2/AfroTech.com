"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const COLORS = {
  primaryDark: "black",
  primaryLight: "blue",
};

const MenuLabel = styled.label`
  position: relative;
  top: -1.7rem;
  right: 0.4rem;
  border-radius: 50%;
  height: 0rem;
  width: 5rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 1.6rem;
  right: 1.8rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 10px;
  display: inline-block;
  margin-top: 3.5rem;

  
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 10px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: relative;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled.li`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    lightblue 70%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const [isMounted, setIsMounted] = useState(true); 

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); 
  }, []);

  const handleClick = () => {
    if (isMounted) {
      setClick(!click);
    }
  };

  return (
    <>
      <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click} src="./img/line.png" />
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink>
              <Link href="/">Home</Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link href="/websites">Websites</Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link href="/apps">Apps</Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link href="/games">Games</Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link href="/about">About</Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link href="/hirenow">Hire Now!</Link>
            </ItemLink>
          </li>
        </List>
      </Navigation>
      </StyleSheetManager>
    </>
  );
}

export default HamburgerMenu;