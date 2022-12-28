import "./Board.css";
import { CellsProps, State } from "../../types/state";
import { SnakeHead, SnakeBody } from "../Snake/Snake";
import Cherry from "../Cherry/Cherry";

interface CellType {
    type: "HEAD" | "CHERRY" | "BODY" | "CELL";
}

interface BoardType {
    state: State;
}

const HEAD = "HEAD";
const CHERRY = "CHERRY";
const BODY = "BODY";
const CELL = "CELL";

const getSnakeBody = (state: State, x: number, y: number) => {
    const snakeBody = state.snakeBody;
    for (let i = 0; i < snakeBody.length; i++) {
        const { bodyX, bodyY } = snakeBody[i];
        if (bodyX === x && bodyY === y) {
            return i;
        }
    }

    return -1;
};

const getCellType = (state: State, x: number, y: number) => {
    const index = getSnakeBody(state, x, y);
    const { cherryX, cherryY } = state.cherry;
    if (index === 0) {
        return HEAD;
    }
    if (index > 0) {
        return BODY;
    }
    if (cherryX === x && cherryY === y) {
        return CHERRY;
    }
    return CELL;
};

const getCellContent = (type: "HEAD" | "CHERRY" | "BODY" | "CELL") => {
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

const Cell = ({ type }: CellType) => {
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

const Board = ({ state }: BoardType) => {
    return (
        <div
            className="board"
            style={{
                gridTemplateColumns: ` repeat(${state.gridHeight}, ${
                    state.gridWidth / state.gridHeight
                }fr)`,
                gridTemplateRows: ` repeat(${state.gridWidth}, ${
                    state.gridWidth / state.gridHeight
                }fr)`,
            }}
        >
            <Cells
                gridHeight={state.gridHeight}
                gridWidth={state.gridWidth}
                state={state}
            />
        </div>
    );
};

export default Board;
