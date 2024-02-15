import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pause, resume, restart } from '../features/gameSlice';

export default function ScoreBoard() {
    const dispatch = useDispatch();
    const { score, isRunning, gameOver } = useSelector(state => state)

    return (
        <div className="score-board">
            <div className='score-text'>Score: {score}</div>
            <button className="score-board-button" onClick={(e) => {
                if (gameOver) { return }
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }
            }>{isRunning ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}</button>
            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}><i class="fa-solid fa-power-off"></i></button>
        </div>
    )
}