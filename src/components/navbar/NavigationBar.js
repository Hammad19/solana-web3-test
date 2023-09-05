import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

import React, { useEffect } from "react"; // Default styles that can be overridden by your app
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
require("@solana/wallet-adapter-react-ui/styles.css");

function NavigationBar(props) {
  //console the useSigner hook whenever etheriumclient changes

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

  useEffect(() => {
    const getTokens = async () => {
      try {
        const connection = new Connection("https://api.devnet.solana.com"); // Replace with your desired Solana RPC URL

        const response = await window.solana.connect({ onlyIfTrusted: true });

        if (!response) {
          console.error("Wallet connection failed.");
          return;
        }

        const publicKey = new PublicKey(response.publicKey.toString());

        //i want to get all tokens like btc usdc from wallet
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          {
            //i want to get all tokens like btc usdc from wallet
            programId: TOKEN_PROGRAM_ID,
          }
        );
        console.log("Token Accounts:", tokenAccounts);

        if (
          !tokenAccounts ||
          !tokenAccounts.value ||
          tokenAccounts.value.length === 0
        ) {
          console.warn("No token accounts found for the wallet.");
          return;
        }

        // Set the tokens state with token accounts
        props.setTokenList(tokenAccounts.value);

        // Setup: npm install alchemy-sdk
      } catch (error) {
        console.error("Error fetching token accounts:", error);
      }
    };

    if (props.walletAddress !== null) {
      getTokens();
    }
  }, [props.walletAddress]);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      props.setWalletAddress(response.publicKey.toString());
    }
  };

  const rendernotConnectedContainer = () => (
    <Button
      variant="primary"
      size="sm"
      id="notconnected-button"
      onClick={connectWallet}>
      Connect Wallet
    </Button>
  );

  const renderConnectedContainer = () => (
    <Button
      size="sm"
      id="connected-container-button"
      className="text-light "
      onClick={() => {
        props.setWalletAddress(null);
        props.setTokenList([]);
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
          <img src={logo} width={120} alt="Swap logo" fluid />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="nav-subcontainer"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-container-menu ">
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
            {!props.walletAddress && rendernotConnectedContainer()}
            {props.walletAddress && renderConnectedContainer()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
