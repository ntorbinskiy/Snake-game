export interface State {
    gridWidth: number;
    gridHeight: number;
    cellSize: number;
    direction: undefined | string;
    snakeHead: { x: number; y: number };
    snakeBody: Array<Object>;
    gameOver: boolean;
    cherry: { x2: number; y2: number };
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
