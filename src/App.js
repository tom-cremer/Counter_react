import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {useState} from "react";

function App() {

    const [number, setNumber] = useState(0)

    function add() {
        setNumber(number + 1);
    }

    function substract() {
        setNumber(number - 1);
    }

    return (
        <div className="App">
            <h1>Compteur</h1>
            <Counter>{number}</Counter>
            <Button click={substract} content="-"/>
            <Button click={add} content="+"/>
        </div>
    );
}

export default App;
