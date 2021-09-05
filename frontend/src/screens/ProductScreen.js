import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen({ match }) {
    const product = products.find((p) => p._id == match.params.id)
    return (
        <div>
            <Link to='/' className='btn btn-dark my-3'>Go Home</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
