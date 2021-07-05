import CharacterCard from './CharacterCard';
function App() {
const word = "Hello";
 return (
 <div>{
  Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)

   }
   </div>
 );
}

export default App;