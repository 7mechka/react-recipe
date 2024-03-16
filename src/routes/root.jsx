import { Link } from "react-router-dom"

function Root() {
    return (
        <>
            <h1>Root</h1>
            <Link to={'/recipe'}>To Recipe</Link>
        </>
    )
}
export default Root