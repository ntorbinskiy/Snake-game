import "./Board.css";
import { State } from "../../engine/state";
import { SnakeHead, SnakeBody } from "../Snake/Snake";
import Cherry from "../Cherry/Cherry";

type CellType = "HEAD" | "CHERRY" | "BODY" | "CELL";

interface CellTypeArguments {
    type: CellType;
}

interface BoardProps {
    state: State;
}

interface CellsProps {
    gridHeight: number;
    gridWidth: number;
    state: State;
}

const HEAD = "HEAD";
const CHERRY = "CHERRY";
const BODY = "BODY";
const CELL = "CELL";

// const getSnakeBodyIndex = (state: State, cellX: number, cellY: number) => {
//     const snakeBody = state.snake.body;
// };

const getCellType = (state: State, cellX: number, cellY: number) => {
    const { x, y } = state.snake.head;
    if (x === cellX && y === cellY) {
        return HEAD;
    }

    for (let i = 0; i < state.snake.body.length; i++) {
        // const { x, y } = state.snake.body[i];
    }
    return CELL;
};

const getCellContent = (type: CellType) => {
    if (type === CHERRY) {
        return <Cherry />;
    }
    if (type === HEAD) {
        return <SnakeHead />;
    }
    if (type === BODY) {
        return <SnakeBody />;
    }
    return null;
};

const Cell = ({ type }: CellTypeArguments) => {
    const cellContent = getCellContent(type);

    return <div className="cell">{cellContent}</div>;
};

const Cells = ({ gridHeight, gridWidth, state }: CellsProps) => {
    const result = [];
    for (let y = 0; y < gridWidth; y++) {
        for (let x = 0; x < gridHeight; x++) {
            result.push(
                <Cell key={`${x}_${y}`} type={getCellType(state, x, y)}></Cell>
            );
        }
    }
    return <>{result}</>;
};

const Board = ({ state }: BoardProps) => {
    const { gridHeight, gridWidth } = state.options;
    return (
        <div
            className="board"
            style={{
                gridTemplateColumns: ` repeat(${gridHeight}, 1fr)`,
                gridTemplateRows: ` repeat(${gridWidth}, 1fr)`,
            }}
        >
            <Cells
                gridHeight={gridHeight}
                gridWidth={gridWidth}
                state={state}
            />
        </div>
    );
};

export default Board;
