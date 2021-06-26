import {useState} from "react"
import Data from "../quotes.json";
import Quote from "./Quote"
import Author from "./Author"
import ButtonShareOnTwitter from "./ButtonShareOnTwitter"

const QuoteBox = ({ QuoteNumber, color, handleQuoteBox }) => {
  let [quote, setQuote] = useState(data.quotes[QuoteNumber].quote);
  let [author, setAuthor] = useState(data.quotes[QuoteNumber].author);

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
        </div>
    ); 
}

export default QuoteBox;
