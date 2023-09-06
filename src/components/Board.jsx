import { useState } from 'react';
import Square from './Square'

export default function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [cross, setCircle] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) return true;
        }
        return false;
    }
    const isWinner = checkWinner()

    const handleClick = (index) => {
        if (!isWinner) {
            const newState = state.map((value, i) => {
                if (index === i && value !== 'X' && value !== 'O') {
                    setCircle(!cross)
                    return cross ? 'X' : 'O'
                }
                return value;
            })
            setState(newState)
        }
    }

    const handleReset = () => {
        setState(Array(9).fill(null))
    }
    return (
        <>
            <div className="board-container bg-white flex justify-center items-center p-5">
                <div className="board-row">
                    <Square onClick={() => handleClick(0)} state={state[0]} />
                    <Square onClick={() => handleClick(1)} state={state[1]} />
                    <Square onClick={() => handleClick(2)} state={state[2]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(3)} state={state[3]} />
                    <Square onClick={() => handleClick(4)} state={state[4]} />
                    <Square onClick={() => handleClick(5)} state={state[5]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(6)} state={state[6]} />
                    <Square onClick={() => handleClick(7)} state={state[7]} />
                    <Square onClick={() => handleClick(8)} state={state[8]} />
                </div>
            </div>
            {isWinner ? <h1 className='text-white text-2xl mt-4'>Congratulation !!..{cross ? 'O' : 'X'} is Winner</h1> : <></>}
            <button className='bg-red-800 text-xl px-3 py-1 text-white mt-4 rounded' onClick={handleReset}>Play Again</button>
        </>
    );
}