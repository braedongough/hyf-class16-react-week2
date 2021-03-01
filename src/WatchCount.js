import { useState, useEffect } from 'react'

function WatchCount() {
    const [count, setCount] = useState(0)
    const [isActive, setIsActive] = useState(true)
    const [timeoutTime, setTimeoutTime] = useState(1000)

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    useEffect(() => {
        if (isActive) {
            console.log('timeout is created')
            const timer = setTimeout(() => {
                console.log('timout is called')
                setCount((prev) => prev + 1)
            }, timeoutTime)

            return () => {
                console.log('we are clean up now')
                clearTimeout(timer)
            }
        }
    })

    const pause = () => {
        setIsActive(false)
    }

    const start = () => {
        setIsActive(true)
    }

    const handleIsActive = () => {
        if (isActive) {
            pause()
        } else {
            start()
        }
    }

    return (
        <div>
            <h1>WATCH COUNT</h1>
            <div>{count}</div>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={handleIsActive}>
                {isActive ? 'pause' : 'start'}
            </button>
            <div>
                <input
                    value={timeoutTime}
                    type="number"
                    placeholder="speed"
                    onChange={(event) => {
                        const value = event.target.value

                        if (value > 0) {
                            setTimeoutTime(Number(value))
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default WatchCount
