
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productAction.js'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const { loading, error, products} = useSelector(state => state.productList)
    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            {
                loading ? (<Loader/>):
                error ? <Message variant='danger'>{error }</Message> :

            <Row>
                {
                    products.map((product, key) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={key}>
                            <Product product={product}/>
                        </Col>
                    ))
                }
            </Row>
            }
        </>
    )
}

export default HomeScreen
