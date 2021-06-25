
import Quote from "./Quote"
import Author from "./Author"
import ButtonChangeQuote from "./ButtonChangeQuote"
import ButtonShareOnTwitter from "./ButtonShareOnTwitter"

const QuoteBox = ({quote, author}) => {


    return  (
        <div className="QuoteBox">
            <ButtonShareOnTwitter />
            <Quote quote={quote} />
            <Author author={author} />
            <ButtonChangeQuote />
        </div>
    ); 
}

export default QuoteBox;