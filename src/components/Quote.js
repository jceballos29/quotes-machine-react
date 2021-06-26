// import {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft,faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons"
import randomNumber from "../functions/randomNumber";
import randomColor from "../functions/randomColor";
import data from "../quotes.json";


const Quote = ({handleButtonChange,quote='Agua que no has de beber, lávate el culo con ella'}) => {

    let nextQuote = randomNumber(data.quotes.length)
    let newColor = randomColor();

    return (
        <div className="Quote">
            <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={() => handleButtonChange(nextQuote,newColor)} className="icon"/>
            <p>{quote}</p>
            <FontAwesomeIcon icon={faAngleDoubleRight} onClick={() => handleButtonChange(nextQuote,newColor)} className="icon"/>

        </div>
    );
}

export default Quote;