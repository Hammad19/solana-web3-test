import { Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/grebe-logo.png";
import etheriumicon from "../../assets/Icons/ethereum.svg";
import bscicon from "../../assets/Icons/bsc_2.svg";
import polygonicon from "../../assets/Icons/polygon_1.svg";
import optimismicon from "../../assets/Icons/optimism.svg";
import arbitrumicon from "../../assets/Icons/arbitrum.svg";
import gnosisicon from "../../assets/Icons/gnosis.svg";
import avalancheicon from "../../assets/Icons/avalanche.svg";
import phantomicon from "../../assets/Icons/fantom.svg";
import klaytinicon from "../../assets/Icons/klaytn.svg";
import auroraicon from "../../assets/Icons/aurora.svg";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Button, Web3Modal, Web3NetworkSwitch } from "@web3modal/react";
import { configureChains, createClient, useChainId, WagmiConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  polygon,
  avalanche,
  optimism,
  gnosis,
  klaytn,
  aurora,
  fantom,
  bsc,
} from "wagmi/chains";

import Select from "react-select";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react"; // Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

function NavigationBar(props) {
  const chains = [
    arbitrum,
    mainnet,
    polygon,
    avalanche,
    optimism,
    gnosis,
    klaytn,
    aurora,
    fantom,
    bsc,
  ];
  const projectId = "YOUR_PROJECT_ID";

  const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider,
  });
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  const data = [
    {
      value: 1,
      text: "Etherium",
      icon: (
        <img
          src={etheriumicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },
    {
      value: 2,
      text: "BNB Chain",
      icon: (
        <img
          src={bscicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },
    {
      value: 3,
      text: "Polygon",
      icon: (
        <img
          src={polygonicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },
    {
      value: 4,
      text: "Optimism",
      icon: (
        <img
          src={optimismicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },

    {
      value: 4,
      text: "Arbitrum",
      icon: (
        <img
          src={arbitrumicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },

    {
      value: 4,
      text: "Gnosis",
      icon: (
        <img
          src={gnosisicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },

    {
      value: 4,
      text: "Avalanche",
      icon: (
        <img
          src={avalancheicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },

    {
      value: 4,
      text: "Phantom",
      icon: (
        <img
          src={phantomicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },

    {
      value: 4,
      text: "Klaytin",
      icon: (
        <img
          src={klaytinicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },

    {
      value: 4,
      text: "Aurora",
      icon: (
        <img
          src={auroraicon}
          alt="eth"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "white",
          }}
        />
      ),
    },
  ];
  const [selectedOption, setSelectedOption] = useState(data[3]);
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const chainId = useChainId();

  //console the useSigner hook whenever etheriumclient changes
  useEffect(() => {
    if (chainId) {
      fetch(`https://api.1inch.io/v5.0/${chainId}/tokens`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.tokens);
          props.setTokenList(data.tokens);
        });
    }
  }, [chainId]);

  //get the current chain id whenever its changed  by web3networkswitch

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
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            backgroundColor: "#1e2633",
            borderRadius: "20px",
            padding: "10px",
          }}
        />
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

          <Nav className="mx-2">
            <Web3NetworkSwitch />
          </Nav>
          <Nav>
            <WagmiConfig client={wagmiClient}>
              <Web3Button />
            </WagmiConfig>

            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
