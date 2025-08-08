import React from "react";
import { Card, Container } from "react-bootstrap";
import Footer from "../Coponents/Footer/Footer";

function Contact() {
  const formStyle = {
    width: '70%'
  }
  return (
    <div className="Page pt-5">
      <Container>
        <div className="mx-auto my-5" style={formStyle}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Contact With Us</h3>
            </Card.Header>
            <Card.Body>
              <form name="contact" method="post" data-netlify="true">
                {/* Hidden input for Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" className="form-control border border-dark" id="name" name="name" placeholder="Enter Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control border border-dark" id="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Write Your Message Here:</label>
                  <textarea className="form-control border border-dark" id="message" name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary rounded-pill px-4">Submit ⇨</button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
