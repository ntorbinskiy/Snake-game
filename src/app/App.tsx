import "./App.css";
import Board from "../components/Board/Board";
import { useEffect } from "react";
import timerTick from "../logic/tick";
import { state } from "../state/state";
function App() {
    useEffect(() => {
        timerTick();
    }, []);

    return (
        <div className="app">
            <Board state={state} />
        </div>
    );
}

export default App;
