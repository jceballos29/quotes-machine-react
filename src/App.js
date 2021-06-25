import './App.css';
import data from "./quotes.json";

import QuoteBox from "./components/QuoteBox";

function App() {

  const {quote,author} = data.quotes[0]

  console.log(quote,author);
  return (
    <div className="App">
      <QuoteBox quote={quote} author={author}/>
    </div>
  );
}

export default App;
