import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/1e483e62-b3a8-4673-a313-490711e482eb",
        data
      )
      .then((response) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      });
  };
  const bgStyle = {
    backgroundImage: "url('https://i.postimg.cc/PJ6bm3rh/bg3.jpg')",
  };
  return (
    <>
      <div class="container my-5 mt-3">
        <div className="bg-image ml-0 mr-0" style={bgStyle}>
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 text-center text-lg-start">
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-1">
                Send us a message ...
              </h1>
              <br />
              <br />
              <p class="col-lg-10 fs-4">
                If you have any queries or any kind of help from us , feel free
                to send message from here ... We are happy to help you ...
              </p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
              <form
                class="p-4 p-md-5 border rounded-3 bg-body-tertiary "
                onSubmit={handleSubmit}
              >
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingName"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                  <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingPhone"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                  <label for="floatingPhone">Phone</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingMessage"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  />
                  <label for="floatingMessage">Message</label>
                </div>
                {/* <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Submit
                </button> */}
                <button
                  type="submit"
                  class="w-100 btn btn-lg btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Submit
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Your data has been successfully saved !!!
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* <div class="modal-body">
      https://docs.google.com/spreadsheets/d/1M5bJxcnDLYAQe77GGtzVNPzM1DcFjSCCObdVkgUKNWY/edit#gid=0
      </div> */}
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
