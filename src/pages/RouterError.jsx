import { IoWarning } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

const RouterError = () => {
  return (
    <main className="error-page">
      <IoWarning className="error-icon" />
      <p className="error-txt">404 - Page does not exist</p>
      <Link to={"/"} className="back-btn">
        <FaChevronLeft /> Go back
      </Link>
    </main>
  );
};
export default RouterError;
