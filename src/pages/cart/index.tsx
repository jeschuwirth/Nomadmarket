import styles from './styles.module.css'
import ReturnButton from '../../../components/returnbutton';
import Counter from '../../../components/counter';
import { useRouter } from "next/router"
import { MdDelete } from 'react-icons/Md';

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { removeCartItem, addCartItem } from '../../features/cart/cartSlice'




export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart)

    function handleItemQuantity(newValue:number, product:Product){
      if (newValue == 0){
        return dispatch( removeCartItem( product.sku ) )
      }
      const cartItem = {
        "quantity": newValue,
        "product": product
      } as CartItem
      dispatch( addCartItem( cartItem ) )
    }

    return (
      <main className = {styles.main}>
        <ReturnButton/>
        {cart.local? <p>Compras del local {cart.local.name}</p> : null}
        <div className = {styles.cartcontainer}>
          {
            Object.values(cart.items).map((ci:CartItem)=>
            <div className = {styles.product}>
              <div className = {styles.horizontalcontainer}>
                <div className = {styles.productimage}>
                  <img src={ci.product.image}/>
                </div>
                <div className = {styles.productinformation}>
                  <p className = {styles.name}>{ci.product.name}</p>
                  <p className = {styles.sku}>sku: {ci.product.sku}</p>
                  {cart.local? <p className = {styles.sku}>stock: {ci.product.stock[cart.local.id].quantity}</p> : null}
                  <p className = {styles.price}>valor unitario: {ci.product.price}</p>
                </div>
              </div>
              <div className = {styles.horizontalcontainer}>
                <div>total: {ci.product.price * ci.quantity}</div>
                <Counter value = {ci.quantity} 
                         onChange = {(newValue:number) => handleItemQuantity(newValue, ci.product)}
                         max = {cart.local? ci.product.stock[cart.local.id].quantity : null}/>
                <button className = {styles.removebutton} onClick={()=>dispatch(removeCartItem(ci.product.sku))}>
                  <MdDelete size = {30}/>
                </button>
              </div>
            </div>
            )
          }
          <p>
            Costo total: 
            {
              Object.values(cart.items).map((a)=>a.quantity * a.product.price)
                                       .reduce((sum, current) => sum + current, 0)
            }
          </p>
        </div>
      </main>
    )
  }