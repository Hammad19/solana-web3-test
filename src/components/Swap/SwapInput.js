import React from "react";
import TokenModal from "../Modals/TokenModal";
import { ChevronDown, FileArrowDown } from "react-bootstrap-icons";

export default function SwapInput({
  setModalShow,
  setSelectedToken,
  selectedToken,
  tokenDetails,
  modalshow,
  backgroundColor,
  isbordered,
  inputHeader,
  tokenValue,
  setTokenValue,
}) {
  return (
    <>
      <div
        className="row my-1"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
        }}>
        <div
          className="col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12"
          style={{
            backgroundColor: backgroundColor,
            borderRadius: "25px",
            height: "130px",
            width: "90%",
            border: "1px solid #1e2633",
          }}>
          <div className="row my-3">
            <h6
              className="col-6"
              style={{
                textAlign: "left",
                color: "#6b85ad",
              }}>
              {inputHeader}
            </h6>
            <h6
              className="col-6"
              style={{
                textAlign: "right",
                color: "#6b85ad",
              }}>
              Balance : 0
            </h6>

            <div
              onClick={() => {
                setModalShow(true);
              }}
              className="col-6 col-sm-5 col-xl-5 col-lg-4">
              <div
                style={{
                  display: "flex",

                  backgroundColor: "transparent",
                  borderRadius: "20px",
                  height: "40px",
                  marginRight: "0.1px",
                  marginTop: "10px",
                  paddingTop: "3px",
                }}>
                <img
                  className="mx-1"
                  alt="coin"
                  src={selectedToken.logoURI}
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                />

                <h5 className="text-light mx-1 my-1">
                  {selectedToken?.symbol}
                </h5>

                <ChevronDown
                  className="mx-1 my-1 "
                  color={"#6b85ad"}
                  size={25}
                />
              </div>
            </div>
            <div className="col-6 col-sm-7 col-xl-7 col-lg-8">
              <input
                className="col-12"
                type="number input-data"
                placeholder="0"
                value={tokenValue}
                onChange={(e) => {
                  setTokenValue(e.target.value);
                }}
                style={{
                  marginTop: "18px",
                  textAlign: "right",
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
            <p
              style={{
                color: "#6b85ad",
                textAlign: "left",
              }}>
              Thether USD
            </p>
          </div>
        </div>
        <TokenModal
          tokenDetails={tokenDetails}
          show={modalshow}
          onHide={() => setModalShow(false)}
          setSelectedToken={setSelectedToken}
        />
      </div>
    </>
  );
}
