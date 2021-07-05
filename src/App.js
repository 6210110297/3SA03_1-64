import './App.css';
import WordCard from './WordCard';

const word = ["Hello","Animal","Humanity","Space","Banana"];
function App() {
    return (
        <div>
        <WordCard value={word}/>
        </div>
        );
       
}


export default App;