import React from "react";
import TokenModal from "../Modals/TokenModal";
import { ChevronDown, FileArrowDown, Wallet2 } from "react-bootstrap-icons";

export default function XSwapInput({
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
            borderRadius: "10px",
            height: "130px",
            width: "90%",
            border: "1px solid #1e2633",
          }}>
          <div
            className="row my-3"
            style={{
              display: "flex",
            }}>
            <div className="col-6 col-sm-7 col-xl-8 col-lg-8">
              <input
                className="col-12"
                type="number input-data"
                placeholder="0"
                style={{
                  marginTop: "5px",
                  textAlign: "left",
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
              className="col-6 col-sm-5 col-xl-4 col-lg-4">
              <div
                id="swapmodalinput-hover"
                style={{
                  //backgroundColor: "#1e2633",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "25px",
                  height: "50px",
                  marginRight: "0.1px",
                  marginTop: "10px",
                  paddingTop: "8px",
                }}>
                <img
                  className="mx-1"
                  alt="coin"
                  src={selectedToken.icon}
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                />

                <h5 className="mx-1 my-1 text-light">{selectedToken.name}</h5>

                <ChevronDown
                  className="mx-1 my-1 "
                  color={"#6b85ad"}
                  size={25}
                />
              </div>
            </div>
            <h4
              className="col-6 my-2"
              style={{
                textAlign: "left",
                color: "#6b85ad",
              }}>
              $ 0.00
            </h4>
            <h4
              className="col-6 my-2"
              style={{
                color: "#6b85ad",
                textAlign: "right",
                paddingRight: "20px",
              }}>
              <Wallet2 color="white " size={25} className="mx-3" />
              0.00
            </h4>
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
