import React from "react";
import "./page1.css";

function Page1() {
  return (
    <div className="split_2">
      <div class="split left">
        <div class="centered">
          <h1 className="rocketer">
            Hey, Rocketeer, what are you coordinates?
          </h1>
          <div className="form_input">
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="First Name"
            />
          </div>
        </div>
      </div>
      <div class="split right">
        <div class="centered">
          <h1 className="reddbery_origins">Redbery Origins</h1>
          <p className="content">
            You watch “What? Where? When?” Yeah. Our founders used to play it.
            That’s where they got a question about a famous American author and
            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
            exact name and he answered Ray Redberry. And at that moment, a name
            for a yet to be born company was inspired - Redberry
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page1;
