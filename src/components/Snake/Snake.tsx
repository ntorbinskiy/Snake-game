import React from "react";
import "./Snake.css";

interface SnakeHeadProps {
    snakeHead: { x: number; y: number };
}
const SnakeHead = ({ snakeHead }: SnakeHeadProps) => {
    const { x, y } = snakeHead;
    return <div className="snake-head" style={{}}></div>;
};

const Snake = () => {
    return <div></div>;
};

export default Snake;
