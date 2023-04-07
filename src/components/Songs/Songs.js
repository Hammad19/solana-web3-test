import React, { useEffect, useState } from "react";
import TopSongsHeader from "./TopSongsHeader";
import eth from "../../../src/assets/Icons/eth.png";
import { Sparklines, SparklinesLine } from "react-sparklines";

import "rsuite/dist/rsuite.min.css";

import DropdownsandSearchHeader from "./DropdownsandSearchHeader";

import { Card, Col, Table, Button } from "react-bootstrap";
import ButtonGroups from "./ButtonGroups";
import Swap from "../Swap/Swap";
import SwapForSongs from "./SwapForSongs";

export default function Songs() {
  const [onSongs, setonSongs] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const [selectedSong, setSelectedSong] = useState({});
  const [selectedType, setSelectedType] = useState(null);

  const sampleData = [8, 3, 8, 6, 5, 3, 5, 7, 5];
  //straight line graph
  const sampleData2 = [8, 8, 8, 8, 8, 8, 8, 8, 8];

  //positive graph
  const sampleData3 = [
    8, 3, 5, 2, 7, 6, 10, 7, 16, 8, 10, 12, 10, 8, 6, 5, 3, 5, 7, 5,
  ];

  const coinData = [
    {
      value: 1,
      symbol: "ETH",
      name: "Ethereum",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData,
      //set light red color
      strokeColor: "#FF0000",
    },
    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },

    {
      value: 2,
      symbol: "BTC",
      name: "Bitcoin",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData2,
      //set light green color
      strokeColor: "#808080",
    },
    {
      value: 3,
      symbol: "MATIC",
      name: "Matic",
      icon: eth,
      price: 100,
      change: 10,
      volume: 1000,
      tvl: 10000,
      graph: sampleData3,
      // set grey color
      strokeColor: "#00FF00",
    },
  ];

  const [songsData, setSongsData] = useState(coinData);

  const data = [
    {
      value: 1,
      text: "MUD",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-up-circle"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
      ),
    },
    {
      value: 2,
      text: "BTX",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down-circle"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      ),
    },
    {
      value: 3,
      text: "BXG",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-circle"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
          />
        </svg>
      ),
    },
    {
      value: 4,
      text: "ETH",
      icon: (
        <img
          src={eth}
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

  const data2 = [
    {
      value: 1,
      text: "1D",
    },
    {
      value: 2,
      text: "1W",
    },
    {
      value: 3,
      text: "1M",
    },
    {
      value: 4,
      text: "1Y",
    },
    {
      value: 5,
      text: "ALL",
    },
  ];

  const overviewData = [
    { id: 1, title: "ETH/USD", stroke: "#FD5353" },
    { id: 2, title: "BTC/USD", stroke: "#3AB67A" },
    { id: 3, title: "LTC/USD", stroke: "#FD5353" },
    { id: 4, title: "XRP/USD", stroke: "#FD5353" },
    { id: 5, title: "LTC/USD", stroke: "#3AB67A" },
    { id: 6, title: "XRP/USD", stroke: "#FD5353" },
  ];

  const [selectedOption, setSelectedOption] = useState(data[3]);
  const [selectedOptionforTime, setSelectedOptionforTime] = useState(data2[4]);

  return (
    <>
      {onSongs === true ? (
        <div
          className="col-12 col-sm-8  p-3 col-md-8 col-lg-8"
          style={{
            background: "rgba(0, 0, 0, 0.44)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(0px)",

            border: "1px solid whitesmoke",

            fontFamily: "sans-serif",
          }}>
          <TopSongsHeader header="Top Songs on Mudex" />
          <DropdownsandSearchHeader
            data={data}
            data2={data2}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            selectedOption={selectedOption}
            selectedOptionforTime={selectedOptionforTime}
            setSelectedOption={setSelectedOption}
            setSelectedOptionforTime={setSelectedOptionforTime}
          />
          <Col
            style={{
              backgroundColor: "transparent",
            }}
            lg={12}>
            <Card
              style={{
                backgroundColor: "transparent",
                border: "0px solid transparent",
              }}>
              <Card.Body>
                <Table
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: "20px",
                    //remove border
                    border: "0px solid transparent",
                    // border: "0px solid rgba(255, 255, 255, 0.2)",
                  }}
                  responsive
                  hover>
                  <thead
                    style={{
                      // border: "none",
                      fontSize: "15px",
                      border: "0px solid rgba(255, 255, 255, 0.2)",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}>
                    <tr>
                      <th scope="col">#</th>
                      <th
                        scope="col"
                        style={{ textAlign: "left", color: "lightgray" }}>
                        Token Name
                      </th>
                      <th scope="col">Price</th>
                      <th scope="col">Change</th>
                      <th scope="col">TVL</th>
                      <th scope="col">Volume</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {songsData.map((item, index) => {
                      return (
                        <tr
                          onClick={() => {
                            setonSongs(false);
                            setSelectedSong(item);
                          }}
                          className="my-2"
                          style={{
                            // padding: "20px",
                            fontSize: "15px",
                          }}>
                          <td className="text-white">{index + 1}</td>
                          <td
                            className="text-white col-2"
                            style={{ textAlign: "left" }}>
                            <div className="d-flex align-items-center ">
                              <img alt="" src={item.icon} width="17%" />
                              <div>
                                <span
                                  style={{
                                    fontSize: "18px",
                                  }}
                                  className="mb-0 ms-2">
                                  {item.name}
                                </span>
                                <span
                                  style={{
                                    fontSize: "18px",
                                    color: "rgba(255, 255, 255, 0.5)",
                                  }}
                                  className="mb-0 ms-2 ">
                                  {item.symbol}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-white">${item.price}</td>
                          <td className="text-white">+{item.change}%</td>
                          <td className="text-white">${item.tvl}M</td>
                          <td className="text-white">${item.volume}M</td>
                          <td className="text-white">
                            <svg width="100" height="40">
                              <Sparklines data={item.graph}>
                                <SparklinesLine
                                  style={{
                                    strokeWidth: 4,
                                    stroke: item.strokeColor,
                                    fill: "none",
                                  }}
                                />
                              </Sparklines>
                            </svg>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </div>
      ) : (
        <div
          className="row col-12 col-sm-8  p-3 col-md-8 col-lg-8 song-box"
          style={{
            background: "rgba(0, 0, 0, 0.44)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(0px)",

            border: "1px solid whitesmoke",

            fontFamily: "sans-serif",
          }}>
          <div className="col-7 song-box-size">
            <Button
              className="mx-1 col-12"
              style={{
                backgroundColor: "transparent",
                border: "0px solid transparent",
                color: "lightgray",

                textAlign: "left",
              }}
              onClick={() => {
                setonSongs(true);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>{" "}
              songs
            </Button>

            <div className="row">
              <td
                className="text-white col-2 mx-1"
                style={{ textAlign: "left" }}>
                <div className="d-flex align-items-center ">
                  <img alt="" src={eth} width="40%" />
                  <div>
                    <span
                      style={{
                        fontSize: "25px",
                      }}
                      className="mb-0 ms-2">
                      {selectedSong.name}
                    </span>
                    <span
                      style={{
                        fontSize: "25px",
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                      className="mb-0 ms-2 ">
                      {selectedSong.symbol}
                    </span>
                  </div>
                </div>
              </td>
              <td
                className="text-white col-12 mx-1"
                style={{ textAlign: "left" }}>
                <div className="d-flex align-items-center ">
                  <div>
                    <span
                      style={{
                        fontSize: "40px",
                      }}
                      className="mb-0 ms-2">
                      $ {"1139.39"}
                    </span>
                  </div>
                </div>
              </td>
              <td
                className="text-white col-12 mx-1"
                style={{ textAlign: "left" }}>
                <div className="d-flex align-items-center ">
                  <div>
                    <span
                      style={{
                        fontSize: "12px",
                      }}
                      className="mb-0 ms-2">
                      {"-0.16%"}
                    </span>
                  </div>
                </div>
              </td>

              <td className="col-12">
                <Sparklines data={selectedSong.graph}>
                  <SparklinesLine
                    style={{
                      strokeWidth: 1,
                      stroke: "purple",
                      fill: "none",
                    }}
                  />
                </Sparklines>
              </td>

              <td
                className="col-12"
                style={{
                  textAlign: "right",
                  alignItems: "right",
                  marginTop: "100px",
                  marginBottom: "20px",
                }}>
                <ButtonGroups
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                />
              </td>
              <td>
                <div className="row my-3">
                  <div
                    className="col-12"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <h3 className="text-white">Stats</h3>
                  </div>
                </div>
              </td>

              <td>
                <div className="row ">
                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <p className="text-white">TVL</p>
                  </div>
                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <p className="text-white">24H Volume</p>
                  </div>

                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <p className="text-white">52W Low</p>
                  </div>

                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <p className="text-white">52W High</p>
                  </div>
                </div>
              </td>

              <td>
                <div
                  className="row "
                  style={{
                    marginBottom: "10px",
                  }}>
                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                    }}>
                    <h3 className="text-white text-size">$802.9M</h3>
                  </div>
                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <h3 className="text-white text-size">$489.7M</h3>
                  </div>

                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <h3 className="text-white text-size">$878.41</h3>
                  </div>

                  <div
                    className="col-3"
                    style={{
                      textAlign: "left",
                      alignItems: "left",
                      fontFamily: "sans-serif",
                    }}>
                    <h3 className="text-white text-size">$4.8K</h3>
                  </div>
                </div>
              </td>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-5 col-xl-5">
            <SwapForSongs />
          </div>
        </div>
      )}
    </>
  );
}
