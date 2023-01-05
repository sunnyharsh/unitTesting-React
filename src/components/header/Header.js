import { Link } from "react-router-dom"
import { createUseStyles } from 'react-jss'


const Header = () => {
    const cx = styles()

    return (
        <div>
            <div style={{ background: "#bdbdf9" }}>
                <nav>
                    <ul style={{ padding: 0 }}>
                        <li className={cx.linkTag}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={cx.linkTag}>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className={cx.linkTag}>
                            <Link to="/books">Books</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
const styles = createUseStyles({
    linkTag: {

        display: "inline-block",
        margin: "9px 12px",
        "& a": {
            color: "red",
            textDecoration: "none",
        }
    },
})
export default Header;