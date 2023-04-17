import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/navbar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../src/assets/backgrounds/bg.jpg";
import Swap from "./components/Swap/Swap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Songs from "./components/Songs/Songs";
import Pool from "./components/Pool/Pool";
import { Paths } from "./components/Constants/Menu";
import React, { useEffect, useState } from "react";
import Xswap from "./components/Xswap/Xswap";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [tokenList, setTokenList] = useState({
    "0xEAC3ce292F95d779732e7a26c95c57A742cf5119": {
      symbol: "BTC++",
      name: "PieDAO BTC++",
      decimals: 18,
      address: "0xEAC3ce292F95d779732e7a26c95c57A742cf5119",
      logoURI:
        "https://tokens.1inch.io/0xEAC3ce292F95d779732e7a26c95c57A742cf5119.png",
      tags: ["tokens", "PEG:BTC"],
    },
    "0x04fa0d235c4abf4bcf4787af4cf447de572ef828": {
      symbol: "UMA",
      name: "UMA Voting Token v1",
      decimals: 18,
      address: "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
      logoURI:
        "https://tokens.1inch.io/0x04fa0d235c4abf4bcf4787af4cf447de572ef828.png",
      tags: ["tokens"],
    },
    "0x08d967bb0134f2d07f7cfb6e246680c53927dd30": {
      symbol: "MATH",
      name: "MATH Token",
      address: "0x08d967bb0134f2d07f7cfb6e246680c53927dd30",
      decimals: 18,
      logoURI:
        "https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png",
      tags: ["tokens"],
    },
  });

  //make function to fetch token Data

  useEffect(() => {
    fetch("https://api.1inch.io/v5.0/1/tokens")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.tokens);
        setTokenList(data.tokens);
      });
    console.log("Hello World");
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#06070a",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          //dont move on scroll
          backgroundAttachment: "fixed",
          //adjustable background height
          height: " 100vh",
          padding: "2rem",

          //dont move on scroll
        }}
        className="App">
        <NavigationBar
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          menu={Paths}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}>
          <Routes>
            <Route
              path="/"
              element={
                <Swap tokenList={tokenList} walletAddress={walletAddress} />
              }
            />
            {/* <Route
              path="/songs"
              element={<Songs walletAddress={walletAddress} />}
            /> */}
            <Route
              path="/xswap"
              element={
                <Xswap tokenList={tokenList} walletAddress={walletAddress} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
