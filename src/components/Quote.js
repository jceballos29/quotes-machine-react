// import {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft,faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons"

const Quote = ({quote='Agua que no has de beber, lávate el culo con ella'}) => {

    return (
        <div className="Quote">
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="icon"/>
            <p>{quote}</p>
            <FontAwesomeIcon icon={faAngleDoubleRight} className="icon"/>

        </div>
    );
}

export default Quote;