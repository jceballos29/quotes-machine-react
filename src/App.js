import {useState} from "react"
import './style.css';
import Data from "./quotes.json";
import randomNumber from "./functions/randomNumber";
import randomColor from "./functions/randomColor";
import QuoteBox from "./components/QuoteBox";


function App() {

  let firstColor = randomColor();
  let QuoteNumber = randomNumber(Data.quotes.length);

  let [color,setColor] = useState(firstColor);
  let style = { color: color, backgroundColor: color}

  const handleQuoteBox = (newColor) => {
    setColor(newColor)
  };
  return (
    <div className="App" style={style}>
      <QuoteBox QuoteNumber={QuoteNumber} color={color} handleQuoteBox={handleQuoteBox}/>
    </div>
  );
}

export default App;
