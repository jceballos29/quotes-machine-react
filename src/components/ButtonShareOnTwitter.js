import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

const ButtonShareOnTwitter = ({quote,author,color}) => {

    let style = {color: color};
    let text = encodeURIComponent(`"${quote}" -${author}-`);
    let url = `https://twitter.com/intent/tweet?text=${text}`


    return (
        <div className="ButtonShareOnTwitter">
        <a 
            style={style} 
            href={url}
            target='_blank'
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={faTwitterSquare}/>
        </a>
        </div>
    );
}

export default ButtonShareOnTwitter;