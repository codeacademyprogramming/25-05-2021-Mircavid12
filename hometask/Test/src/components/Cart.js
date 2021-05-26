import React from 'react'
import { connect } from "react-redux";
import { DeleteCart } from '../stores/actions';
import BasketImg from "../assests/Images/basketimg.png"
const Cart = ({ items, DeleteCart }) => {
    let ListCart = [];
    let TotalAmount = 0;
    function getBasket(){
        document.getElementById("basketContent").classList.toggle("d-none")
    }
    Object.keys(items.Carts).forEach((item) => {
        TotalAmount += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    const TotalPrice = (price, count) => {
        return Number(price * count).toLocaleString('en-US');
    }
    return (
        <div className="row mt-5">
            <div className="col-md-3">
        <img src={BasketImg} style={{width:"50px",cursor:"pointer"}} onClick={getBasket}/>
                <table className="table d-none" id="basketContent">
                    <thead className='thead'>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListCart.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td><button className="btn btn-danger" onClick={() => DeleteCart(key)}>X</button></td>
                                    <td>{item.name}</td>
                                    <td><img src={item.image} style={{ width: '100px', height: '80px' }} alt="Image" /></td>
                                    <td>{item.price} $</td>
                                    <td>   <span className="btn btn-info">{item.quantity}</span></td>
                                    <td>{TotalPrice(item.price, item.quantity)} $</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="5">Total Carts</td>
                            <td>{Number(TotalAmount).toLocaleString('en-US')} $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._ProductList
    }
}

export default connect(mapStateToProps, { DeleteCart })(Cart)
