import React, { useEffect } from "react";
import settings from "../../../src/assets/Icons/settings.png";
import eth from "../../../src/assets/Icons/eth.png";
import { Input, Popover, Radio, Modal, message } from "antd";
import { ArrowDownOutlined, SettingOutlined } from "@ant-design/icons";
import { ArrowDownShort, FileArrowDown } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import TokenModal from "../Modals/TokenModal";
import arrow from "../../../src/assets/Icons/swap.png";
import SwapInput from "./SwapInput";
export default function Swap(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  useEffect(() => {
    console.log(props.walletAddress);
  }, [props.walletAddress]);

  const tokenDetails = [
    {
      name: "ETH",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "BTX",
      icon: eth,
    },
    {
      name: "BXG",
      icon: eth,
    },
    {
      name: "WETH",
      icon: eth,
    },
    {
      name: "ZAR",
      icon: eth,
    },
    {
      name: "USD",
      icon: eth,
    },
    {
      name: "XTG",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
    {
      name: "MUD",
      icon: eth,
    },
  ];

  const swap = () => {
    //swap logic

    const temp = selectedToken1;
    setSelectedToken1(selectedToken2);
    setSelectedToken2(temp);
  };

  const [selectedToken1, setSelectedToken1] = React.useState(tokenDetails[0]);
  const [selectedToken2, setSelectedToken2] = React.useState(tokenDetails[2]);

  const [slippage, setSlippage] = React.useState(2.5);

  const handleSlippage = (e) => {
    setSlippage(e.target.value);
  };

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
      id="swap"
      className="col-12 col-sm-8  col-md-6
       col-lg-6 col-xl-3"
      style={{
        background: "#131924",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0px)",
        border: "1px solid transparent",

        height: "500px",

        fontFamily: "sans-serif",
      }}>
      <div>
        <div
          className="row "
          style={{
            justifyContent: "space-between",
            marginTop: "20px",
          }}>
          <div
            style={{
              textAlign: "left",
              paddingLeft: "30px",
            }}
            className="col-9  mx-1">
            <h4
              style={{
                color: "#f8fdfd",
                marginRight: "150px",
              }}>
              Swap
            </h4>
          </div>

          <div className="col-2 mx-1 my-2">
            <Popover
              title="Settings"
              trigger="click"
              placement="bottomRight"
              content={settingsContent}>
              <SettingOutlined height={20} width={20} className="cog" />
            </Popover>
          </div>
        </div>

        <div
          className="col-12"
          style={{
            position: "absolute",
          }}>
          <SwapInput
            setModalShow={setModalShow}
            setSelectedToken={setSelectedToken1}
            tokenDetails={tokenDetails}
            modalshow={modalShow}
            selectedToken={selectedToken1}
            backgroundColor={"#06070a"}
            isBordered={false}
            inputHeader={"You Sell"}
          />

          <SwapInput
            selectedToken={selectedToken2}
            setSelectedToken={setSelectedToken2}
            tokenDetails={tokenDetails}
            modalshow={modalShow2}
            setModalShow={setModalShow2}
            isBordered={true}
            inputHeader={"You Buy"}
          />
        </div>

        <Button
          onClick={swap}
          style={{
            backgroundColor: "#324054",
            //make it round

            borderRadius: "75px",
            position: "relative",
            marginTop: "130px",

            border: "1px solid transparent",
          }}>
          <ArrowDownShort size={25}></ArrowDownShort>
        </Button>
      </div>
      <div
        className="col-12"
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "150px",
        }}>
        <Button
          variant="primary"
          className=" my-5"
          onClick={swap}
          style={{
            width: "90%",
            height: "50px",
            borderRadius: "10px",

            fontSize: "25px",
            marginTop: "50px",
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
