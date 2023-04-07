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
                  backgroundColor: "transparent",
                  borderRadius: "20px",
                  height: "40px",
                  marginRight: "0.1px",
                  marginTop: "10px",
                  paddingTop: "3px",
                }}
                className="row">
                <div className="col-3">
                  <img
                    alt="coin"
                    src={selectedToken.icon}
                    style={{
                      height: "35px",
                      width: "35px",
                    }}
                  />
                </div>
                <div
                  className="mx-1 my-1 col-3"
                  style={{
                    textAlign: "center",
                  }}>
                  <h5 className="text-light">{selectedToken.name}</h5>
                </div>

                <div
                  style={{
                    //align left
                    textAlign: "left",
                  }}
                  className="mx-1 my-1 col-3">
                  <ChevronDown color={"#6b85ad"} size={25} />
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-7 col-xl-7 col-lg-8">
              <input
                className="col-12"
                type="number input-data"
                placeholder="0"
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
