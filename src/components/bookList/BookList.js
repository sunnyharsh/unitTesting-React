import { Link, useParams } from "react-router-dom"
import { createUseStyles } from 'react-jss'
import Book from "../book/Book";
const BookList = () => {
    const { id } = useParams();
    const cx = styles()
    return (
        <div style={{ display: "flex" }}>
            <div style={{ border: "1px solid #d9b1b1", width: "180px", height: "100vh" }}>
                <ul style={{ padding: 0 }}>
                    <li className={cx.linkTag}>
                        <Link to="/books/1">Book 1</Link>
                    </li>
                    <li className={cx.linkTag}>
                        <Link to="/books/2">Book 2</Link>
                    </li>
                    <li className={cx.linkTag}>
                        <Link to="/books/3">Book 3</Link>
                    </li>
                    <li className={cx.linkTag}>
                        <Link to="/books/newBook">New book</Link>
                    </li>
                </ul>
            </div>
            {id ? <div>
                <Book id={id} />
            </div> : <div>
                <h1> default comp load here</h1>
            </div>}
        </div >
    )

}
const styles = createUseStyles({
    linkTag: {
        textDecoration: "none",
        display: "block",
        margin: "12px 12px",
        padding: "18px 0px 18px 34px",
        "& a": {
            color: "red"
        }
    },
})
export default BookList;
