import React, { createContext, useState, useEffect} from "react";

export const ProductContext = createContext();

export const  ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState(null);
    useEffect(()=>{
        
        const fetchProducts = async  () => {
            try{
                const response = await fetch('https://fakestoreapi.com/products')
                const data =  await response.json()
                setProducts(data)
            }catch(error){
                console.error("error fetching products", error);
            }
        };
        fetchProducts()

    },[])

    return(
        <ProductContext.Provider value={{products, selectProduct, setSelectProduct}}>
            {children}
        </ProductContext.Provider>        
    )

}


