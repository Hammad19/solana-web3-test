import React from "react";

import { message } from "antd";

import { Button } from "react-bootstrap";
import TokenModal from "../Modals/TokenModal";

export default function TokenBox(props) {
  const [modalShow, setModalShow] = React.useState(false);
  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    message.success("Copied Wallet Address: " + copyText.value);
  }

  return (
    // center div with glassmorphism
    <div
      id="swap"
      className="col-12 col-sm-8  col-md-6
       col-lg-6 col-xl-3 tokenbox">
      <div>
        <div className="row tokenbox-subcontainer">
          <div
            style={{
              textAlign: "left",
              paddingLeft: "30px",
            }}
            className="col-12  mx-1 tokenbox-subdiv">
            <h4 className="tokenbox-heading-4">Token Balances</h4>
            <div className="text-right text-light">
              Desclaimer: This is Made on Solana Devnet so Only Devnet Tokens
              will be shown here
            </div>
          </div>
          <div
            className="row mx-4
      
      ">
            <input
              id="myInput"
              disabled
              className=" my-5 col-8"
              value={props.walletAddress ? props.walletAddress : ""}></input>

            <Button
              id="tokenbox-copy-button"
              variant="primary"
              className=" my-5  col-3"
              onClick={myFunction}>
              Copy
            </Button>
          </div>
        </div>

        <Button
          id="tokenbox-button"
          variant="primary"
          className=" my-5 tokenbox-button"
          onClick={() => {
            setModalShow(true);
          }}>
          Show Tokens
        </Button>
      </div>

      <TokenModal
        tokenDetails={props.tokenList}
        show={modalShow}
        onHide={() => setModalShow(false)}
        //setSelectedToken={setSelectedToken}
      />
    </div>
  );
}
