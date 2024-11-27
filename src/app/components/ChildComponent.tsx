interface ChildProps {
    name: string;
    age: number;
    occupation: string;
}

const ChildComponent = ({ name, age, occupation }: ChildProps) => {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">{name}</h2>
            <p className="text-lg mb-2">Age: <span className="font-semibold">{age}</span></p>
            <p className="text-lg">Occupation: <span className="font-semibold">{occupation}</span></p>
        </div>
    )
}

export default ChildComponent