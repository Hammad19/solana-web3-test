import React, { useEffect, useState } from "react";
import settings from "../../../src/assets/Icons/settings.png";
import eth from "../../../src/assets/Icons/eth.png";
import { Input, Popover, Radio, Modal, message } from "antd";
import { ArrowDownOutlined, SettingOutlined } from "@ant-design/icons";
import {
  ArrowDownShort,
  ChevronDown,
  FileArrowDown,
} from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import TokenModal from "../Modals/TokenModal";
import arrow from "../../../src/assets/Icons/swap.png";
import XswapInput from "./XswapInput";
import ChainConverter from "./ChainConverter";
import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils.js";
export default function Xswap(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  const [token1InputValue, setToken1InputValue] = useState(0);
  const [token2InputValue, setToken2InputValue] = useState(0);

  useEffect(() => {
    console.log(props.walletAddress);
  }, [props.walletAddress]);

  const [selectedToken1, setSelectedToken1] = React.useState({
    symbol: "NMR",
    name: "Numeraire",
    address: "0xEAC3ce292F95d779732e7a26c95c57A742cf5119",
    decimals: 18,
    logoURI: eth,
    tags: ["tokens"],
  });
  const [selectedToken2, setSelectedToken2] = React.useState({
    symbol: "OWL",
    name: "OWL Token",
    address: "0xEAC3ce292F95d779732e7a26c95c57A742cf5119",
    decimals: 18,
    logoURI: eth,
    tags: ["tokens"],
  });

  const swap = () => {
    const temp = selectedToken1;
    setSelectedToken1(selectedToken2);
    setSelectedToken2(temp);
  };

  const [slippage, setSlippage] = React.useState(2.5);

  const handleSlippage = (e) => {
    setSlippage(e.target.value);
  };

  function convertToMinimalUnits(amount, decimalPlaces) {
    const decimalFactor = 10 ** decimalPlaces;
    const minimalUnits = amount * decimalFactor;
    return minimalUnits;
  }

  function convertFromMinimalUnits(minimalUnits, decimalPlaces) {
    const decimalFactor = 10 ** decimalPlaces;
    const amount = minimalUnits / decimalFactor;
    return amount;
  }
  useEffect(() => {
    const fetchQuote = async () => {
      const fromTokenAddress = selectedToken1.address;
      const toTokenAddress = selectedToken2.address;

      const amount = convertToMinimalUnits(
        token1InputValue,
        selectedToken1.decimals
      );
      console.log(amount);

      const url = `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const quote = convertFromMinimalUnits(
          data.toTokenAmount,
          selectedToken2.decimals
        );
        console.log(quote);
        setToken2InputValue(quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, [
    token1InputValue,
    selectedToken1.address,
    selectedToken2.address,
    selectedToken1.decimals,
    selectedToken2.decimals,
  ]);

  const settingsContent = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group onChange={handleSlippage} value={slippage}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );

  return (
    // center div with glassmorphism
    <div
      id="xswap"
      className="col-12 col-sm-8  col-md-6
       col-lg-6 col-xl-3"
      style={{
        background: "transparent",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0px)",
        border: "1px solid transparent",
        height: "500px",
        fontFamily: "sans-serif",
        alignItems: "center",
      }}>
      <ChainConverter />
      <div
        className="row"
        style={{
          justifyContent: "space-between",
          marginTop: "20px",
        }}>
        <div
          style={{
            textAlign: "left",
            paddingLeft: "30px",
          }}
          className="col-9 ">
          <Button
            style={{
              background: "#141e31",
              marginRight: "150px",
              border: "none",
              fontSize: "20px",
              color: "white",
              borderRadius: "10px",
            }}>
            Swap
          </Button>
        </div>

        <div className="col-2 mx-1 my-2">
          <Popover
            title="Settings"
            trigger="click"
            placement="bottomRight"
            content={settingsContent}>
            <SettingOutlined className="cog" />
          </Popover>
        </div>
      </div>

      <div
        className="col-12"
        style={{
          position: "absolute",
        }}>
        <XswapInput
          setModalShow={setModalShow}
          setSelectedToken={setSelectedToken1}
          tokenDetails={props.tokenList}
          modalshow={modalShow}
          selectedToken={selectedToken1}
          backgroundColor={"#1e293b"}
          isBordered={false}
          inputHeader={"You Sell"}
          tokenValue={token1InputValue}
          setTokenValue={setToken1InputValue}
        />

        <XswapInput
          selectedToken={selectedToken2}
          setSelectedToken={setSelectedToken2}
          tokenDetails={props.tokenList}
          modalshow={modalShow2}
          backgroundColor={"#1e293b"}
          setModalShow={setModalShow2}
          isBordered={true}
          inputHeader={"You Buy"}
          tokenValue={token2InputValue}
          setTokenValue={setToken2InputValue}
        />
      </div>

      <Button
        onClick={swap}
        style={{
          backgroundColor: "#06070a",
          //make it round

          borderRadius: "75px",
          position: "relative",
          marginTop: "130px",

          border: "1px solid transparent",
        }}>
        <ArrowDownShort size={25}></ArrowDownShort>
      </Button>

      <div
        className="col-12"
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}>
        <Button
          variant="primary"
          className=" my-5"
          onClick={swap}
          style={{
            width: "95%",
            height: "50px",
            borderRadius: "10px",

            fontSize: "25px",

            backgroundColor: "#a36217",
            border: "none",

            //transparent
          }}>
          Swap
        </Button>
      </div>
    </div>
  );
}
