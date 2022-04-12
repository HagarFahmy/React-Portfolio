import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Spinner} from "react-bootstrap";
import './ProductDetails.css';
function ProductDetails() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    function fetchProduct() {
        fetch(`http://localhost:5500/products/${params.id}`)
            .then(res => res.json())
            .then(json => setProduct(json))

    }
    useEffect(() => {
        fetchProduct();
    }, []);

    return (<div>
        {
            product
                ?
                <div className="card ">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={product.image} className="img-fluid" alt="" />
                        </div>
                        <div className="col">
                            <div className="card-block px-2">
                                <h5 className="card-title ">Modern Suit</h5>
                                <p className="card-text">$ {product.price}</p>
                                <div className="row">
                                </div>
                                <p className="text-muted">{product.desc}</p>
                                <a href="#" className="btn btn-sm btn-outline-dark m-1"><i className=" fa-solid fa-cart-shopping"></i> Add To Cart</a>
                                <a href="#" className="btn btn-sm btn-outline-dark m-1">Add To Wish List</a>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <Spinner animation="border" className="mx-auto"/>
        }

    </div>
    )

}
export default ProductDetails