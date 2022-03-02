/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <UnstyledButton>
          <Icon id="close" onClick={onDismiss} />
        </UnstyledButton>

        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>

        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  a {
    color: ${COLORS.gray[900]};
    text-transform: uppercase;
    text-decoration: none;
    margin-botom: 22px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
    margin-botom: 14px;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled(DialogContent)`
  background: ${COLORS.white};
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export default MobileMenu;
