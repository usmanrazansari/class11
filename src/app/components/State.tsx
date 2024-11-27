"use client"
import { useState } from "react"
import ParentComponent from './ParentComponent'

interface StateProps {
  initialCount: number;
  incrementValue: number;
  title: string;
}

const State = ({ initialCount, incrementValue, title }: StateProps) => {
    const [count, setCount] = useState(initialCount)

    const handleIncrement = () => {
        setCount(count + incrementValue)
    }

    const handleDecrement = () => {
        setCount(count - incrementValue)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h1 className="text-3xl font-bold mb-4">{title}: {count}</h1>
                <div className="flex space-x-4">
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleIncrement}
                    >
                        Increment
                    </button>
                    <button 
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDecrement}
                    >
                        Decrement
                    </button>
                </div>
            </div>
            <ParentComponent />
        </div>
    )
}

export default State