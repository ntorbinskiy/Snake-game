import "./App.css";
import Board from "../components/Board/Board";
import { createInitialState } from "../engine/engine";

export const UP = "UP";
export const DOWN = "DOWN";
export const LEFT = "LEFT";
export const RIGHT = "RIGHT";

type MovementKeys = typeof UP | typeof DOWN | typeof LEFT | typeof RIGHT;

const movementKeyCodes: Record<string, MovementKeys> = {
    ArrowUp: UP,
    ArrowDown: DOWN,
    ArrowLeft: LEFT,
    ArrowRight: RIGHT,
};

function App() {
    const state = createInitialState({
        gridWidth: 5,
        gridHeight: 5,
        teleportSnake: false,
        initialCherryCount: 1,
    });

    return (
        <div className="app">
            <Board state={state} />
        </div>
    );
}

export default App;
