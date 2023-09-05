import "./App.css";
import NavigationBar from "./components/navbar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from "./components/Constants/Menu";
import React, { useState } from "react";
import TokenBox from "./components/Tokens/TokenBox";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [tokenList, setTokenList] = useState([]);

  return (
    <BrowserRouter>
      <div className="App background-main">
        <NavigationBar
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          setTokenList={setTokenList}
          menu={Paths}
        />
        <div className="main-div-style">
          <Routes>
            <Route
              path="/"
              element={
                <TokenBox tokenList={tokenList} walletAddress={walletAddress} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
