import randomNumber from "../functions/randomNumber";
import randomColor from "../functions/randomColor";
import data from "../quotes.json";

const ButtonChangeQuote = ({ handleButtonChange, color }) => {
  let style = { backgroundColor: color };
  let nextQuote = randomNumber(data.quotes.length);
  let newColor = randomColor();

  return (
    <div className="ButtonChangeQuote">
      <button
        style={style}
        onClick={() => handleButtonChange(nextQuote, newColor)}
      >
        Next Quote
      </button>
    </div>
  );
};

export default ButtonChangeQuote;
