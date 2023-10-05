import styles from './styles.module.css'
import ReturnButton from '../../../components/returnbutton';
import { useRouter } from "next/router"
import { MdDelete } from 'react-icons/Md';

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import { removeCartItem } from '../../features/cart/cartSlice'




export default function Cart() {
    const dispatch = useDispatch();
    const router = useRouter();

    const cart = useSelector((state: RootState) => state.cart)

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
                  <p className = {styles.price}>valor unitario: {ci.product.price}</p>
                </div>
              </div>
              <div className = {styles.horizontalcontainer}>
                <div>total: {ci.product.price * ci.quantity}</div>
                <div>counter</div>
                <button onClick={()=>dispatch(removeCartItem(ci.product.sku))}>
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