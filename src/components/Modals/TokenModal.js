import { Badge, Card, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React from "react";

function TokenModal(props) {
  return (
    <Modal
      {...props}
      className="text-white custom-modal"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body className="custom-modal-body">
        <Card.Header className="custom-card-header">
          <div className="d-flex align-items-center my-2">
            <h3 className="mb-0 text-white">Tokens List and Their Balances</h3>
          </div>
          <tr className="row custom-table-row">
            <th className="text-white col-1">S.No</th>
            <th className="text-white col-9">Token Address</th>
            <th className="text-white text-end text-right col-2">Balance</th>
          </tr>
        </Card.Header>
        <Card.Body>
          <Table responsive hover scrollable className="custom-table">
            <tbody>
              {props.tokenDetails?.map((item, index) => {
                return (
                  <tr className="custom-table-row" key={index}>
                    <td className="text-white custom-td">
                      <div className="d-flex align-items-center">
                        {index + 1}
                        <div className="ms-3 my-2">
                          <h5 className="custom-h5">
                            {item?.account?.data?.parsed?.info?.mint}
                          </h5>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <Badge className="custom-badge">
                        {
                          item?.account?.data?.parsed?.info?.tokenAmount
                            ?.uiAmountString
                        }
                      </Badge>
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
