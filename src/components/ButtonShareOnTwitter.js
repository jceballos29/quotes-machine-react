import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const ButtonShareOnTwitter = ({ quote, author, color }) => {
    let style = { color: color };
    let text = encodeURIComponent(`"${quote}" -${author}-`);
    let url = `https://twitter.com/intent/tweet?text=${text}`;

    return (
        <a 
            className="ButtonShareOnTwitter"
            style={style} 
            href={url}
            target='_blank'
            rel="noreferrer"
        >
            <FontAwesomeIcon className="twitter" icon={faTwitterSquare}/>
        </a>
    );
};

export default ButtonShareOnTwitter;
