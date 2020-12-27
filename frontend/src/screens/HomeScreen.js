import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    const [products, setProducts ] = useState([])

    useEffect(() =>{
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
                    setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map((product, key) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={key}>
                            <Product product={product}/>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default HomeScreen
