import React,{useState} from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
const prepareNewWord = (given_word,state)=>{
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        ...state,
        word,
        chars,
        attempt: state.attempt,
        guess: '',
        completed: false
    }
}
var index=0;

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value[index]))

    
    const activationHandler = c => {
        console.log(`${c} has been activated.`)
    
        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length === state.word.length) {
            if (guess === state.word && !state.completed) {
                console.log('yeah!')
                setState({ ...state, guess: '', completed: true })
            
            }else {
                console.log('reset')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }
    }

    const resetGame =() =>{
        console.log('Reset Game')
        index= Math.floor(Math.random()*5)
        setState(prepareStateFromWord(props.value[index]))
    }

    const changeWord =()=>{
        console.log('change word')
        index= Math.floor(Math.random()*5)
        setState(prepareNewWord(props.value[index],state))
    }

    var changeButton=<div className={'button'}><button onClick={changeWord}>ChangeWord</button></div>

    if(!state.completed){
        return (
            <div>
                <div className={'headText'}> {state.completed?'You WIN':`Total Attemps: ${state.attempt}`} </div>
                {state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)}
                {changeButton}
            </div>
            
        );
    }else{
        return(
            <div>
                <div className={'headText'}>You WIN with {state.attempt} attempts CONGRATS</div>
                <div className={'button'}>
                <button onClick={resetGame}>Reset</button>
                </div>
                
            </div>
        );
    }
    
}

