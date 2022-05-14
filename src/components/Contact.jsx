import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>&emsp;Sean Griffiths</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>&emsp;contact@griffithssean.com</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>&emsp;griffithssean@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>&emsp;0452 212 136</td>
                    </tr>
                </table>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
