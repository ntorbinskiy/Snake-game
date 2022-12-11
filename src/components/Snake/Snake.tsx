import React from "react";
import { state } from "../../state/state";
import { SnakeHeadProps } from "../../types/state";
import "./Snake.css";

export const SnakeHead = () => {
    return (
        <div
            className="snake-head"
            style={{
                height: `${state.gridHeight * 10}px`,
                width: `${state.gridWidth * 10}px`,
            }}
        ></div>
    );
};
export const SnakeBody = () => {
    const cell = document.querySelector("div.cell");
    return (
        <div
            className="snake-body"
            style={{
                height: `${cell?.clientHeight}px`,
                width: `${cell?.clientWidth}px`,
            }}
        ></div>
    );
};
