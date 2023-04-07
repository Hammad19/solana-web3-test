import React from "react";
import settings from "../../../src/assets/Icons/settings.png";
import eth from "../../../src/assets/Icons/eth.png";
import { Input, Popover, Radio, Modal, message } from "antd";
import { ArrowDownOutlined, SettingOutlined } from "@ant-design/icons";
import { FileArrowDown } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import TokenModal from "../Modals/TokenModal";
import arrow from "../../../src/assets/Icons/swap.png";
export default function SwapForSongs() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

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
  ];

  const swap = () => {
    //swap logic

    const temp = selectedToken1;
    setSelectedToken1(selectedToken2);
    setSelectedToken2(temp);
  };

  const [selectedToken1, setSelectedToken1] = React.useState(tokenDetails[0]);
  const [selectedToken2, setSelectedToken2] = React.useState(tokenDetails[2]);

  const [slippage, setSlippage] = React.useState(0.5);

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

    <div className="my-3 col-sm-12  col-12">
      <div className="my-3">
        <div
          className="row my-3"
          style={{
            justifyContent: "space-between",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}>
          <div className="col-9  mx-3 ">
            <h4
              style={{
                color: "#f8fdfd",
                fontSize: "20px",
                //align left
                textAlign: "left",
              }}>
              Swap
            </h4>
          </div>

          <div className="col-2 mx-1 ">
            <Popover
              title="Settings"
              trigger="click"
              placement="bottomRight"
              content={settingsContent}>
              <SettingOutlined className="cog" />
            </Popover>
          </div>
        </div>

        <div className="price-box col-sm-12" style={{}}>
          <div
            className="row my-1"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div
              className="col-12 "
              style={{
                backgroundColor: "transparent",
                borderRadius: "20px",
                height: "80px",
                width: "90%",
                border: "1px solid transparent",
              }}>
              <div className="row eth-swap">
                <div className="col-6 eth-sub">
                  <input
                    className="col-8"
                    type="number input-data"
                    placeholder="0.0"
                    style={{
                      marginTop: "13px",

                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "30px",
                      outline: "none",
                      placeholder: "white",
                    }}
                    onFocus={(e) => (e.target.style.outline = "none")}
                  />
                </div>

                <div
                  onClick={() => {
                    setModalShow(true);
                  }}
                  className="col-6">
                  <div
                    style={{
                      backgroundColor: "#183964",
                      borderRadius: "20px",
                      height: "40px",
                      marginRight: "0.1px",
                      marginTop: "15px",
                      paddingTop: "3px",
                    }}
                    className="row circle-box">
                    <div className="col-4">
                      <img
                        alt="coin"
                        src={selectedToken1.icon}
                        style={{
                          height: "35px",
                          width: "35px",
                        }}
                      />
                    </div>
                    <div className="my-1 col-4">
                      <p>
                        <h5 className="text-light">{selectedToken1.name}</h5>
                      </p>
                    </div>

                    <div className=" my-1 col-4">
                      <FileArrowDown size={25} color="white" />
                    </div>
                  </div>
                  <p
                    style={{
                      color: "lightgray",
                    }}>
                    Balance : $0.0
                  </p>
                </div>
              </div>
            </div>
          </div>
          <TokenModal
            tokenDetails={tokenDetails}
            show={modalShow}
            onHide={() => setModalShow(false)}
            setSelectedToken={setSelectedToken1}
          />

          <div
            className="row my-1"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div
              className="col-12 "
              style={{
                //transparent
                backgroundColor: "transparent",
                borderRadius: "20px",
                height: "80px",
                width: "90%",
                border: "1px solid transparent",
              }}>
              <div className="row eth-swap">
                <div className="col-6 eth-sub">
                  <input
                    className="col-8"
                    type="number input-data"
                    placeholder="0.0"
                    style={{
                      marginTop: "13px",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "30px",
                      outline: "none",
                      placeholder: "white",
                    }}
                    onFocus={(e) => (e.target.style.outline = "none")}
                  />
                </div>

                <div
                  onClick={() => {
                    setModalShow2(true);
                  }}
                  className="col-6">
                  <div
                    style={{
                      backgroundColor: "#183964",
                      borderRadius: "20px",
                      height: "40px",
                      marginRight: "0.1px",
                      marginTop: "15px",
                      paddingTop: "3px",
                    }}
                    className="row circle-box">
                    <div className="col-4">
                      <img
                        alt="coin"
                        src={selectedToken2.icon}
                        style={{
                          height: "35px",
                          width: "35px",
                        }}
                      />
                    </div>
                    <div className="my-1 col-4">
                      <p>
                        <h5 className="text-light">{selectedToken2.name}</h5>
                      </p>
                    </div>

                    <div className=" my-1 col-4">
                      <FileArrowDown size={25} color="white" />
                    </div>
                  </div>
                  <p
                    style={{
                      color: "lightgray",
                    }}>
                    Balance : $0.0
                  </p>
                </div>
              </div>
            </div>
          </div>

          <TokenModal
            tokenDetails={tokenDetails}
            show={modalShow2}
            onHide={() => setModalShow2(false)}
            setSelectedToken={setSelectedToken2}
          />
        </div>

        <Button
          className=""
          onClick={swap}
          style={{
            backgroundColor: "transparent",
            borderRadius: "75px",
            position: "relative",

            justifyContent: "center",
            alignItems: "center",
          }}>
          S
        </Button>
      </div>
      <div
        className="col-5 my-3"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}>
        <Button
          disabled={true}
          variant="primary"
          className=" my-5 review-swap"
          onClick={swap}
          style={{
            width: "250px",
            height: "50px",
            borderRadius: "20px",
            backgroundColor: "#006dfe",
            fontSize: "25px",

            //transparent
          }}>
          Reveiw Swap
        </Button>
      </div>
    </div>
  );
}
