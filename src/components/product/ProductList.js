import React, {useContext} from "react";
import {Link} from  "react-router-dom";
import {ProductContext}  from "./ProductContext";

const ProductList = () =>{
    const {products, setSelectProduct} = useContext(ProductContext);

    return(
        <>
        <h1>Product List</h1>
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <Link to='/productdetails'>
                    
                    </Link>
                </div>
            )
        )}
        </div>


        </>
    )
}

export default ProductList;