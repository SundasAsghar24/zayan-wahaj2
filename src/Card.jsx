import { useState } from 'react'
import { productsData } from './UIData.js'
import "./style.css";


export default function Card({ onHandle }) {
    const [products, setProducts] = useState(productsData);

    // const addToCart = (id) => {
    //     //alert(`${product.cartQty} : add in card `);
    //     setProducts(products.map(product => {
    //         if (product.id === productId && product.cartQty < product.stock) {
    //             return { ...product, cartQty: product.cartQty + 1 };
    //         }
    //         return product;
    //     }));
    // }
    const addToCart = (id) => {
        const copyProducts = [...products];
        const index = copyProducts.findIndex(p => p.id === id);
        copyProducts[index].cartQty++;
        setProducts(copyProducts);
        onHandle();
    }
    return (
        <div>
            <div className='div  container container my-1'>
                <div className=" div row row-cols-1 row-cols-md-4 g-4 my-1">
                    {products.map(product => (
                        <div className="col" key={product.id}>
                            <div className=" cardcard" >
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className=" card card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <h6 className='card-prices'>RS .{product.price}</h6>
                                    <button
                                        className={`btn ${product.stock ? "btn-primary" : "btn-danger"}`}
                                        disabled={!product.stock || product.cartQty >= product.stock}
                                        onClick={() => { addToCart(product.id) }}>
                                        {product.stock ? "ADD TO CART" : "OUT OF STOCK"}
                                    </button>
                                    {!!product.cartQty && <span className="">{product.cartQty}</span>}
                                    {product.cartQty === product.stock && <div className="text-danger mt-2">Stock limit</div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
