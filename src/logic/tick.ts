import { moveSnake } from "./movement";

const timerTick = () => {
    return setInterval((event: Event) => {
        moveSnake(event);
    }, 1000);
};

export default timerTick;
