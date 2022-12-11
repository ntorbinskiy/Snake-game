import React from "react";
import "./Board.css";
import { CellProps, CellsProps } from "../../types/state";
import { state } from "../../state/state";
import Snake from "../Snake/Snake";

const Cell = ({ x, y }: CellProps) => {
    return (
        <div className="cell">
            <Snake />
        </div>
    );
};

const Cells = ({ gridHeight, gridWidth }: CellsProps) => {
    const result = [];
    for (let y = 0; y < gridWidth; y++) {
        for (let x = 0; x < gridHeight; x++) {
            result.push(<Cell key={`${x}_${y}`} x={x} y={y}></Cell>);
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
