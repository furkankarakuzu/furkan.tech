import { Formik, Field, Form, ErrorMessage } from "formik";
import { contactSchema } from "../helpers/ContactFormValidationSchema";
export default function ContactComponent() {
  const formik = {
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  };
  return (
    <section>
      <h2 className="mb-4 fw-bold">Contact</h2>
      <div>
        <div className="row">
          <div className="col-sm-6 my-1">
            <iframe
              src="https://giphy.com/embed/qgQUggAC3Pfv687qPC"
              className="giphy-embed"
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-sm-6 my-1">
            <Formik
              initialValues={formik.initialValues}
              onSubmit={formik.onSubmit}
              validationSchema={formik.validationSchema}
            >
              {(props) => {
                const {
                  errors,
                  touched,
                  isValid,
                  dirty } = props;
                return (
                    <Form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-4">
                            <label htmlFor="form_name">Firstname *</label>
                            <Field
                              id="form_name"
                              type="text"
                              name="firstname"
                              className={
                                'form-control' +
                                (errors.firstname && touched.firstname ? ' is-invalid' : '')
                              }
                              placeholder="Please enter your firstname *"
                            />
                            <ErrorMessage
                  name="firstname"
                  component="div"
                  className="invalid-feedback"
                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-4">
                            <label htmlFor="form_lastname">Lastname *</label>
                            <Field
                              id="form_lastname"
                              type="text"
                              name="lastname"
                              className={
                                'form-control' +
                                (errors.lastname && touched.lastname ? ' is-invalid' : '')
                              }
                              placeholder="Please enter your lastname *"
                            />
                            <ErrorMessage
                  name="lastname"
                  component="div"
                  className="invalid-feedback"
                />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-4">
                            <label htmlFor="form_email">Email *</label>
                            <Field
                              id="form_email"
                              type="email"
                              name="email"
                              className={
                                'form-control' +
                                (errors.email && touched.email ? ' is-invalid' : '')
                              }
                              placeholder="Please enter your email *"
                            />
                            <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-4">
                            <label htmlFor="form_subject">Subject *</label>
                            <Field
                              id="form_subject"
                              type="text"
                              name="subject"
                              className={
                                'form-control' +
                                (errors.subject && touched.subject ? ' is-invalid' : '')
                              }
                              placeholder="Please enter the subject *"
                            />
                            <ErrorMessage
                  name="subject"
                  component="div"
                  className="invalid-feedback"
                />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group mb-4">
                            <label htmlFor="form_message">Message *</label>
                            <Field
                              id="form_message"
                              as="textarea"
                              name="message"
                              className={
                                'form-control' +
                                (errors.message && touched.message ? ' is-invalid' : '')
                              }
                              placeholder="Message for me *"
                              rows={4}
                            />
                            <ErrorMessage
                  name="message"
                  component="div"
                  className="invalid-feedback"
                />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input
                          disabled={!isValid || !dirty}
                            type="submit"
                            className="btn btn-success btn-send float-end"
                            value="Send message"
                          />
                        </div>
                      </div>
                    </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
