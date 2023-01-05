import { useState, useTransition } from "react";
import { generateProduct } from "../../data"
let dummyProduct = generateProduct();

function filterProducts(filterterm) {
    if (!filterterm) {
        return dummyProduct;
    } return dummyProduct.filter((product) => product.includes(filterterm))
}
const Products = () => {
    const [isPending, startTransition] = useTransition();
    const [filterterm, setFilterTerm] = useState('')
    const filteredProducts = filterProducts(filterterm)

    function updateFilterHandler(e) {
        startTransition(() => {
            setFilterTerm(e.target.value)
        })
        // setFilterTerm(e.target.value)
    }
    console.log(filteredProducts)
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div >
                <h1>Products</h1>
                <input type="text" onChange={updateFilterHandler} />
                {filteredProducts?.map((obj, index) => (
                    <p style={{
                        textAlign: "center",
                        margin: "5px 0px",

                        background: "#dfa0eb",
                        color: "#000",
                        fontWeight: "bold",
                        padding: "6px 5px 11px 5px",
                        borderRadius: "4px"
                    }}>{obj}</p>
                ))}
            </div>
        </div>
    )
}
export default Products;