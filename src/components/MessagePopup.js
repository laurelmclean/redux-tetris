import React from 'react';
import { useSelector } from 'react-redux';

// Displays a message
export default function MessagePopup(props) {
    const { isRunning, gameOver } = useSelector(state => state)

    return (
        <div className={!isRunning && !gameOver ? 'hidden message-popup' : 'message-popup'}>
            <h1>Message Title</h1>
            {!isRunning ? <p>Paused</p> : <p>''</p>}
            {!gameOver ? <p>Game Over</p> : <p>''</p>}
        </div>
    )
}