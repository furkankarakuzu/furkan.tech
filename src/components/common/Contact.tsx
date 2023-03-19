export default function ContactComponent() {
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
            <form
              id="contact-form"
              method="post"
              action="contact.php"
              role="form"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label htmlFor="form_name">Firstname *</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Please enter your firstname *"
                      required={true}
                      data-error="Firstname is required."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label htmlFor="form_lastname">Lastname *</label>
                    <input
                      id="form_lastname"
                      type="text"
                      name="surname"
                      className="form-control"
                      placeholder="Please enter your lastname *"
                      required={true}
                      data-error="Lastname is required."
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label htmlFor="form_email">Email *</label>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Please enter your email *"
                      required={true}
                      data-error="Valid email is required."
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label htmlFor="form_subject">Subject</label>
                    <input
                      id="form_subject"
                      type="tel"
                      name="subject"
                      className="form-control"
                      placeholder="Please enter the subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-4">
                    <label htmlFor="form_message">Message *</label>
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      placeholder="Message for me *"
                      rows={4}
                      required={true}
                      data-error="Please,leave us a message."
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    disabled={true}
                    className="btn btn-success btn-send float-end"
                    value="Send message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
