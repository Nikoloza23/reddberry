import "./pagination.css";
import Next from "../../assets/Next.svg";
import Previous from "../../assets/Previous.svg";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      <div className="circle_container">
        <span class="dot"></span>
        <Link
          to="/secondPage"
          style={{ textDecoration: "none", "margin-top": "8px" }}
        >
          <span class="dot"></span>
        </Link>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div className="previouses">
        <div>
          <img className="left" src={Previous} alt="/" />
        </div>
        <div>
          <img className="right" src={Next} alt="/" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
