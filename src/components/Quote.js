import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

const Quote = ({ quote }) => {
  return (
    <div className="Quote">
      <FontAwesomeIcon icon={faAngleDoubleLeft} className="icon" />
      <p>{quote}</p>
      <FontAwesomeIcon icon={faAngleDoubleRight} className="icon" />
    </div>
  );
};

export default Quote;
