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
            <Route path="/" element={<Swap walletAddress={walletAddress} />} />
            {/* <Route
              path="/songs"
              element={<Songs walletAddress={walletAddress} />}
            /> */}
            <Route
              path="/xswap"
              element={<Xswap walletAddress={walletAddress} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
