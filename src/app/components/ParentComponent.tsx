import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const name = "Usman Ansari"
    const age = 19
    const occupation = "Student"

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <ChildComponent 
                name={name}
                age={age}
                occupation={occupation}
            />
        </div>
    )
}

export default ParentComponent