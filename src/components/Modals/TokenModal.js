import { Badge, Card, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect } from "react";
import { PinAngle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function TokenModal(props) {
  useEffect(() => {
    setAllTokens(props.tokenDetails);
  }, [props.tokenDetails]);

  const [alltokens, setAllTokens] = React.useState(props.tokenDetails);
  return (
    <Modal
      {...props}
      className="text-white"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body
        style={{
          //glassmorphism with black background
          background: "#131823",
          border: "0px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "20px",

          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(4px)",
        }}>
        <Card.Header className="bg-transparent border-0">
          <div className="d-flex align-items-center my-2">
            <h3 className="mb-0 text-white">Select a token</h3>
          </div>
          <input
            type="text"
            placeholder="Search Tokens"
            style={{
              marginLeft: "2px",
              paddingLeft: "10px",
              borderRadius: "20px",
              height: "60px",
              width: "90%",
              fontSize: "20px",
              background: "#131823",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              marginBottom: "10px",
            }}
            onChange={(e) => {
              const search = e.target.value;
              const filtered = props.tokenDetails.filter((token) => {
                return token.name.toLowerCase().includes(search.toLowerCase());
              });
              setAllTokens(filtered);
            }}
          />
        </Card.Header>
        <Card.Body>
          <Table responsive hover scrollable>
            <tbody>
              {alltokens.map((token) => {
                return (
                  <tr
                    style={{
                      background: "#131823",
                      border: "0px solid transparent",
                      borderRadius: "20px",
                      height: "40px",
                    }}
                    onClick={
                      //set selected token
                      () => {
                        props.setSelectedToken(token);
                        props.onHide();
                      }
                    }>
                    <td className="text-white">
                      <div className="d-flex align-items-center">
                        <img
                          src={token.icon}
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                          alt="Mudex logo"
                        />
                        <div className="ms-3 my-2">
                          <h5
                            style={{
                              fontSize: "20px",
                            }}
                            className="mb-0 text-white">
                            {token.name}
                          </h5>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <Badge
                        style={{
                          fontSize: "20px",
                        }}
                        bg=""
                        className="badge-primary light mx-1">
                        0
                      </Badge>
                    </td>
                    <td className="py-3">
                      <Link>
                        <PinAngle color="white" size={15} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Modal.Body>
    </Modal>
  );
}

export default TokenModal;
