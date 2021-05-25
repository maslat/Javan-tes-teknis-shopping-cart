import React from 'react'
import { connect } from 'react-redux';
import { addToCart, removeFromCart, isInCart } from '../redux/cart';

import { FaTrash, FaHeart } from "react-icons/fa";




const Product = ({image}) => {
    return (
        <div className='row mb-4'>
            <div className="col-md-3">
                <img className='img-fluid' alt='item' src='https://dynamic.zacdn.com/kD7YMiEN0_SsTE5Y3PQotc6rPDY=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/hm-2991-5323572-1.jpg' />
            </div>
            <div className="col-md-9">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <h6>Blue Denim Shirt</h6>
                        <div className="description text-muted">
                            <p>Color: Blue</p>
                            <p>Size: M</p>
                        </div>
                    </div>
                    <div className="row pb-5 align-items-start">
                        <button className='col btn btn-outline-secondary btn-sm'>-</button>
                        <button className='col btn btn-outline-secondary btn-sm'>1</button>
                        <button className='col btn btn-outline-secondary btn-sm'>+</button>
                        
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <div className="">
                        <button className="btn"><FaTrash /> Remove Item</button>
                        <button className="btn"><FaHeart /> Add to Wishlist</button>
                    </div>
                    <p>$29.98</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
