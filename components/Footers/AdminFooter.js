/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-end">
        <Col xl="6">
          <div className="copyright text-center text-xl-right text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://orbt.com.br/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Orbt
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
