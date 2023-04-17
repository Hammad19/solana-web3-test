import { Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/grebe-logo.png";
import etherium from "../../assets/Icons/ethereum.svg";
import bsc from "../../assets/Icons/bsc_2.svg";
import polygon from "../../assets/Icons/polygon_1.svg";
import optimism from "../../assets/Icons/optimism.svg";
import arbitrum from "../../assets/Icons/arbitrum.svg";
import gnosis from "../../assets/Icons/gnosis.svg";
import avalanche from "../../assets/Icons/avalanche.svg";
import phantom from "../../assets/Icons/fantom.svg";
import klaytin from "../../assets/Icons/klaytn.svg";
import aurora from "../../assets/Icons/aurora.svg";

import Select from "react-select";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react"; // Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

function NavigationBar(props) {
  const data = [
    {
      value: 1,
      text: "Etherium",
      icon: (
        <img
          src={etherium}
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
          src={bsc}
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
          src={polygon}
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
          src={optimism}
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
          src={arbitrum}
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
          src={gnosis}
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
          src={avalanche}
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
          src={phantom}
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
          src={klaytin}
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
          src={aurora}
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

          <Nav
            className="mx-2"
            style={
              {
                //overflow style
              }
            }>
            <Select
              styles={{
                //change background color of dropdown
                menu: (provided, state) => ({
                  ...provided,
                  background: "rgba(5, 24, 57, 255)",
                  color: "white",
                }),

                //change background of selected option
                option: (provided, state) => ({
                  ...provided,
                  background: state.isSelected
                    ? "rgba(5, 24, 57, 255)"
                    : "rgba(5, 24, 57, 255)",
                  color: "white",
                }),

                //change background of whole dropdown
                control: (provided, state) => ({
                  ...provided,

                  color: "white",
                  borderRadius: "15px",
                  background: "#202c46",
                }),

                //change color of placeholder

                placeholder: (provided, state) => ({
                  ...provided,
                  color: "white",
                }),

                //change color of dropdown indicator
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  color: "white",
                }),

                //change color of selected option
                singleValue: (provided, state) => ({
                  ...provided,
                  color: "white",
                }),

                //remove border of indicator
                indicatorSeparator: (provided, state) => ({
                  ...provided,
                  display: "none",
                }),

                //set font size of selected option
                valueContainer: (provided, state) => ({
                  ...provided,
                  fontSize: "18px",
                }),
              }}
              placeholder="Select Option"
              value={selectedOption}
              options={data}
              onChange={handleChange}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                </div>
              )}
            />
          </Nav>
          <Nav>
            {!props.walletAddress && renderNotConnectedContainer()}
            {props.walletAddress && renderConnectedContainer()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
