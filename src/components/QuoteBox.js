import {useState} from "react"
import Data from "../quotes.json";
import Quote from "./Quote"
import Author from "./Author"
// import ButtonChangeQuote from "./ButtonChangeQuote"
import ButtonShareOnTwitter from "./ButtonShareOnTwitter"

const QuoteBox = ({QuoteNumber,color,handleQuoteBox}) => {

    let Quotes = Data.quotes;

    let [quote,setQuote] = useState(Quotes[QuoteNumber].quote);
    let [author,setAuthor] = useState(Quotes[QuoteNumber].author);

    const handleButtonChange = (nextQuote,newColor) => {
        setQuote(Quotes[nextQuote].quote);
        setAuthor(Quotes[nextQuote].author);
        handleQuoteBox(newColor);   
    }
  

    return  (
        <div className="QuoteBox">
            <ButtonShareOnTwitter quote={quote} author={author} color={color} />
            <Quote handleButtonChange={handleButtonChange} quote={quote} />
            <Author author={author} />
            {/* <ButtonChangeQuote  handleButtonChange={handleButtonChange} color={color}/> */}
        </div>
    ); 
}

export default QuoteBox;