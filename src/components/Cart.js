import React from 'react'
import { connect } from 'react-redux';
import { getItems, getCurrency, getTotal, removeFromCart } from '../redux/cart';



const Cart = () => {
    return (
        <div className='p-3'>
            <div className="my-3">
                <h5>The total amount of</h5>
            </div>
            <div className="d-flex justify-content-between text-muted">
                <p>Temporary Amount</p>
                <p>$52.93</p>
            </div>
            <div className="d-flex justify-content-between text-muted">
                <p>Shipping</p>
                <p>gratis</p>
            </div>
            <div className="d-flex justify-content-between border-top py-3">
                <p>The total amount of (including VAT)</p>
                <p>$54.99</p>
            </div>
            <button className='btn btn-primary btn-lg btn-block'>GO TO CHECKOUT</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);