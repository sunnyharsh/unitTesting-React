import { Routes, Route } from "react-router-dom"
import BookList from "../components/bookList/BookList";
import BuggyComponent from "../components/classComp/BuggyComp";
import MainComp from "../components/classComp/MainCom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import NewBook from "../components/NewBook/NewBook";
import Products from "../components/products/products";

const PublicRoutes = () => {
    return (
        <div>

            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                {/* <Route path="/" element={<Products />} /> */}
                <Route path="/" element={<MainComp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/books" element={<BookList />} >
                    <Route path=":id" element={<BookList />} />
                </Route>
                <Route path="/books/newBook" element={<NewBook />} />



            </Routes>

        </div>
    )
}

export default PublicRoutes;