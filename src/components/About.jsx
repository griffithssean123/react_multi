import React from "react";

function About() {
  return (
    <div className="about">
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
            <h1 class="font-weight-light">About</h1>
            <p>
                Education: <br></br>
                - Bachelor of Science (Major in Physics) at the
                University of Melboure <br></br>
                - Diploma in Computing at the University of Melbourne
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
