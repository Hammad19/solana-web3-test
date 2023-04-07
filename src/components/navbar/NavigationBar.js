import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/grebe-logo.png";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react"; // Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

function NavigationBar(props) {
  // State

  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
      console.log("Phantom wallet found!");
      const response = await window.solana.connect({ onlyIfTrusted: true });
      console.log("Connected with Public Key:", response.publicKey.toString());

      props.setWalletAddress(response.publicKey.toString());
    } else {
      alert("Solana object not found! Get a Phantom Wallet 👻");
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      props.setWalletAddress(response.publicKey.toString());
    }
  };

  const renderNotConnectedContainer = () => (
    <Button
      variant="primary"
      size="md"
      style={{
        borderRadius: "20px",
        backgroundColor: "#a36217",
        border: "1px solid transparent",
      }}
      onClick={connectWallet}>
      Connect Wallet
    </Button>
  );

  const renderConnectedContainer = () => (
    <Button
      className="text-light "
      size="sm"
      style={{
        borderRadius: "20px",
        width: "200px",
        backgroundColor: "transparent",
      }}
      //Display wallet address  only 6 characters
      onClick={() => {
        alert(props.walletAddress);
      }}>
      {props.walletAddress?.slice(0, 8) || "..."}...
    </Button>
  );

  // UseEffects
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      fixed
      expand="lg"
      bg="transparent"
      variant="transparent">
      <Container>
        <Navbar.Brand className="mx-0" href="#home">
          <img src={logo} width="60" height="60" alt="Swap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto "
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}>
            {props.menu.map((item) => {
              return (
                <Nav.Link className="text-light mx-3">
                  <NavLink
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}>
                    {item.title}
                  </NavLink>
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav>
            {/*<Button*/}
            {/*    variant="primary"*/}
            {/*    size="sm"*/}
            {/*    style={{borderRadius: "20px"}}*/}
            {/*    onClick={connectWallet}>*/}
            {/*    Connect Wallet*/}
            {/*</Button>*/}
            {!props.walletAddress && renderNotConnectedContainer()}
            {props.walletAddress && renderConnectedContainer()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
