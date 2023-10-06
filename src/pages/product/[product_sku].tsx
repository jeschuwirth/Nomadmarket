import styles from './styles.module.css'
import ReturnButton from '../../../components/returnbutton';
import Counter from '../../../components/counter';
import { useRouter } from "next/router"
import { useQuery } from "react-query";
import { useState, useEffect, useRef } from "react"

import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { addCartItem, removeCartItem } from '../../features/cart/cartSlice'


export default function Home() {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const product_sku = router.query['product_sku'] as string
  const [product, setProduct] = useState<Product|undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(0);

  const catalog = useQuery<Array<Product>, Error>('catalog', () =>
    fetch('https://xnoj0ialk2.execute-api.us-east-1.amazonaws.com/default/GetProductsTechTest', 
    {'mode': 'cors'}).then(res => res.json())
  )

  useEffect(()=>{
    if( catalog.data && product_sku && product_sku !== "[product_sku]"){
      setProduct(catalog.data.find((p:Product)=> p.sku === product_sku))
    }
  }, [catalog.data, product_sku])

  useEffect(()=>{
    if(!product || !(product.sku in cart.items)) return;
    setQuantity(cart.items[product.sku].quantity)
  }, [product, cart.items])

  function addToCart(){
    if (!product ) return;
    if (quantity  == 0){
      return dispatch( removeCartItem( product.sku ) )
    }
    const cartItem = {
      "quantity": quantity,
      "product": product
    } as CartItem
    dispatch( addCartItem( cartItem ) )
  }

  return (
    <main className = {styles.main}>
      <ReturnButton/>
      {
        !product?
        <h2>producto no encontrado</h2>:
        <div className={styles.container}>
          <div className={styles.imagecontainer}>
            <img src={product.image}/>
          </div>
          <div className={styles.information}>

            <div className={styles.verticalcontainer}>
              <p className={styles.name}>  {product.name}</p>
              <p className={styles.price}> ${product.price}</p>
              <p className={styles.sku}> SKU: {product.sku}</p>
              {cart.local? <p className={styles.sku}> Stock: {product.stock[cart.local.id].quantity}</p>:null}
            </div>

            <div className={styles.verticalcontainer}>
              <div className={styles.horizontalcontainer}>
                <p>Cantidad: </p>
                <Counter value = {quantity} 
                         onChange = { setQuantity }
                         max = {cart.local? product.stock[cart.local.id].quantity : null}/>
              </div>
              <button onClick = {addToCart}>Agregar al carro</button>
            </div>
          </div>
        </div>
      }
    </main>
  )
}
