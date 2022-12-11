import "./Board.css";
import { CellProps, CellsProps } from "../../types/state";
import { state } from "../../state/state";
import { SnakeHead } from "../Snake/Snake";

const Cell = ({ cellX, cellY }: CellProps) => {
    const { headX, headY } = state.snakeHead;
    return (
        <div className="cell">
            {cellX === headX && cellY === headY ? <SnakeHead /> : null}
        </div>
    );
};

const Cells = ({ gridHeight, gridWidth }: CellsProps) => {
    const result = [];
    for (let y = 0; y < gridWidth; y++) {
        for (let x = 0; x < gridHeight; x++) {
            result.push(<Cell key={`${x}_${y}`} cellX={x} cellY={y}></Cell>);
        }
    }
    return <>{result}</>;
};

const Board = () => {
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
            <Cells gridHeight={state.gridHeight} gridWidth={state.gridWidth} />
        </div>
    );
};

export default Board;
