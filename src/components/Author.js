import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";

const Author = ({ author }) => {
  return (
    <div className="Author">
      <FontAwesomeIcon icon={faGripLines} />
      <h4>{author}</h4>
      <FontAwesomeIcon icon={faGripLines} />
    </div>
  );
};

export default Author;