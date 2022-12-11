import React from "react";
import { state } from "../../state/state";
import { SnakeHeadProps } from "../../types/state";
import "./Snake.css";

const SnakeHead = () => {
    const cell = document.querySelector("div.cell");
    return (
        <div
            className="snake-head"
            style={{
                height: `${cell?.clientHeight}px`,
                width: `${cell?.clientWidth}px`,
            }}
        ></div>
    );
};
const SnakeBody = () => {
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
const Snake = () => {
    return (
        <>
            <SnakeHead />
            <SnakeBody />
        </>
    );
};

export default Snake;
