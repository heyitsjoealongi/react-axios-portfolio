import React from "react";

import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

export default function App() {
  const url = "";
  const { handleSubmit } = useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
    <>
      <section className="newsletter">
        <Container>
          <Row>
            <Col xl="12">
              <h6 className="muted">Lorem ipsum dolor sit amet</h6>
              <h2>Ut enim ad minim veniam</h2>
            </Col>
            <Col xl="12">
              <Form
                inline
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit(fields);
                }}
              >
                <FormGroup>
                  <Input
                    id="EMAIL"
                    autoFocus
                    type="email"
                    value={fields.EMAIL}
                    onChange={handleFieldChange}
                    placeholder="Your Email Address"
                    for="Sign Up"
                  />
                </FormGroup>
                <Button value="Submit" aria-label="Sign Up">
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
