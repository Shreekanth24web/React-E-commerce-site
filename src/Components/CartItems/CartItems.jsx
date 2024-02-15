import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
      const { all_product , cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext)
      return (
            <div className='cartitems'>
                  <div className="cartitems-formate-main">
                        <p>Product</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                  </div>
                  <hr />
                  {all_product.map((e)=>{
                        if(cartItems[e.id]>0)
                        {
                              return <div>
                                          <div className="cartitems-formate cartitems-formate-main">
                                                <img className='carticon-product-icon' src={e.image} alt="" />
                                                <p>{e.name}</p>
                                                <p><span style={{fontFamily:"Arial"}}>&#8377;</span>{e.new_price}</p>
                                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                                <p><span style={{fontFamily:"Arial"}}>&#8377;</span>{e.new_price * cartItems[e.id]}</p>
                                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                          </div>
                                          <hr />
                                    </div>
                        }
                        return null;
                  })}
                  <div className='cartitems-down'>
                        <div className="cartitems-total">
                              <h1>Cart Totals</h1>
                              <div>
                                    <div className="cartitems-total-item">
                                          <p>Subtotal</p>
                                          <p> <span style={{fontFamily:"Arial"}}>&#8377;</span>{getTotalCartAmount()}</p>
                                    </div>
                                    <hr />
                                    <div className="cartitems-total-item">
                                          <p>Shiping Fee</p>
                                          <p>Free</p>
                                    </div>
                                    <hr />
                                    <div className="cartitems-total-item">
                                          <h3>Total</h3>
                                          <p className='cartitems-total-item-total'> <span style={{fontFamily:"Arial"}}>&#8377;</span>{getTotalCartAmount()}</p>
                                    </div>
                                  
                              </div>
                              <button>PROCED TO CHECKOUT</button>
                        </div>
                        <div className="cartitems-promocode">
                              <p>If you have a promo code, Enter it here</p>
                              <div className="cartitems-promobox">
                                    <input type="text" placeholder='promo code' />
                                    <button>Submit</button>
                              </div>
                        </div>

                  </div>
            </div>

      )
}

export default CartItems