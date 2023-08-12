import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid>
          <Row className="mb-0">
            <Col md={12}>
              <div className="text-sm-end d-none d-sm-block">
                Ver.1.0 || Copyrights @ Company. All Rights Reserved with Logo
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
