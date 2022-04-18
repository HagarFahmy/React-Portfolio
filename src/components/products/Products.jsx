import './products.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function Products() {
    const [products, setProducts] = useState(null);
    function fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    useEffect(() => {
        fetchProducts();
    },
        []
    )

    return (
        <div className='row justify-content-center m-0'>
            {
                products
                    &&
                    products.length
                    ?
                    products.map(product => {
                        return (
                            <Card className='col-3 ' key={product.id} >
                                <Card.Img variant="top" src={product.image} className="w-50 mx-auto img" />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.price}$
                                    </Card.Text>
                                    <Link className="btn btn-sm btn-outline-primary" to={`/products/${product.id}`} >Show</Link>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={product.rating.rate}
                                        activeColor="#ffd700"
                                    />
                                </Card.Body>
                            </Card>


                        )
                    })
                    :
                    <Spinner animation="border" className="mx-auto" />
            }
        </div>
    )
}
export default Products