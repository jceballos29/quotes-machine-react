import {useState} from "react"
import data from "../quotes.json";
import Quote from "./Quote"
import Author from "./Author"
import ButtonChangeQuote from "./ButtonChangeQuote"
import ButtonShareOnTwitter from "./ButtonShareOnTwitter"

const QuoteBox = ({QuoteNumber,color,handleQuoteBox}) => {

    let [quote,setQuote] = useState(data.quotes[QuoteNumber].quote)
    let [author,setAuthor] = useState(data.quotes[QuoteNumber].author)

    const handleButtonChange = (nextQuote,newColor) => {
        setQuote(data.quotes[nextQuote].quote);
        setAuthor(data.quotes[nextQuote].author);
        handleQuoteBox(newColor);   
    }
  

    return  (
        <div className="QuoteBox">
            <ButtonShareOnTwitter />
            <Quote quote={quote} />
            <Author author={author} />
            <ButtonChangeQuote  handleButtonChange={handleButtonChange} color={color}/>
        </div>
    ); 
}

export default QuoteBox;