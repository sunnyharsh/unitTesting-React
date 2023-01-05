import { useParams } from "react-router-dom"


const Book = ({ id }) => {
    return (
        <div>
            <h1>Book number {id}</h1>
        </div>
    )
}
export default Book;
