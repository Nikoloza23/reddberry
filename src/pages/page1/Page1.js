import React from "react";
import Pagination from "../../components/pagination/Pagination";
import "./page1.css";
import UseForm from "../../components/validate/UseForm";
import validate from "../../components/validate/ValidateInfo";

function Page1({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submitForm,
    validate
  );
  return (
    <div className="split_2">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div class="split left">
          <div class="centered">
            <h1 className="rocketer">
              Hey, Rocketeer, what are you coordinates?
            </h1>
          </div>
          <div className="form_container">
            <div className="form_input">
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="First Name"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form_input">
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Last Name"
              />
            </div>
            <div className="form_input">
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="E Mail"
              />
            </div>
            <div className="form_input">
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="+995 5__ __ __ __"
              />
            </div>
          </div>
          <Pagination type="submit" />
        </div>
        <div class="split right">
          <div class="centered">
            <h1 className="reddbery_origins">Redbery Origins</h1>
            <p className="content">
              You watch “What? Where? When?” Yeah. Our founders used to play it.
              That’s where they got a question about a famous American author
              and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia
              forgot the exact name and he answered Ray Redberry. And at that
              moment, a name for a yet to be born company was inspired -
              Redberry 😇
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page1;
