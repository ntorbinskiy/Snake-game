export interface State {
    gridWidth: number;
    gridHeight: number;
    direction: undefined | string;
    snakeBody: Array<Object>;
    gameOver: boolean;
    cherry: { x1: number; y1: number };
    teleportSnake: boolean;
}
export interface CellProps {
    x: number;
    y: number;
}
export interface CellsProps {
    gridHeight: number;
    gridWidth: number;
}
