import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../features/gameSlice';

export default function Controls(props) {
    const dispatch = useDispatch()
    const { isRunning, speed, gameOver } = useSelector(state => state)

    // Set up the game timer
    const requestRef = useRef()
    const lastUpdateTimeRef = useRef(0)
    const progressTimeRef = useRef(0)

    // Handle game updates to move blocks down the screen
    const update = (time) => {
        requestRef.current = requestAnimationFrame(update)
        if (!isRunning) {
            return
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time
        }
        const deltaTime = time - lastUpdateTimeRef.current
        progressTimeRef.current += deltaTime
        if (progressTimeRef.current > speed) {
            dispatch(moveDown())
            progressTimeRef.current = 0
        }
        lastUpdateTimeRef.current = time
    }

    // Initialize request animation frame and remove it when isRunning changes
    useEffect(() => {
        requestRef.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(requestRef.current)
    }, [isRunning])

    // Handle keyboard controls
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    dispatch(moveLeft());
                    break;
                case 'ArrowRight':
                    dispatch(moveRight());
                    break;
                case 'ArrowDown':
                    dispatch(moveDown());
                    break;
                case 'ArrowUp':
                    dispatch(rotate());
                    break;
                default:
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [dispatch])

    return (
        <div className="controls">
            {/* left */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    dispatch(moveLeft())
                }
                }><i class="fa-solid fa-left-long"></i></button>

            {/* right */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    dispatch(moveRight())
                }
                }><i class="fa-solid fa-right-long"></i></button>

            {/* rotate */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    dispatch(rotate())
                }
                }><i class="fa-solid fa-rotate"></i></button>

            {/* down */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    dispatch(moveDown())
                }
                }><i class="fa-solid fa-down-long"></i></button>

        </div>
    )
}