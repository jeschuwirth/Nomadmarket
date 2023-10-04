import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"
import { useQuery } from "react-query";
import { useState, useEffect, useRef } from "react";

import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { setLocal } from '../features/cart/cartSlice'

export default function Home() {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const [locals, setLocals] = useState<Array<Local>>([])
  const selectLocalRef = useRef<HTMLSelectElement>(null)

  const catalog = useQuery<Array<Product>, Error>('catalog', () =>
    fetch('https://xnoj0ialk2.execute-api.us-east-1.amazonaws.com/default/GetProductsTechTest', 
    {'mode': 'cors'}).then(res => res.json())
  )

  useEffect(()=>{
    if(!catalog.data) return;
    const data = catalog.data[0].stock
    setLocals(
      [{"id":"", "name": "-"}].concat(
        Object.values(data).map((s:Stock)=> s.local)
      )
    )
  }, [catalog.data])

  if (!catalog.data){return <></>}
  return (
    <main className = {styles.main}>
      <div className = {styles.filterscontainer}>
        <p>Local: </p>
        <select name="local" 
                onChange={ (e) => 
                  dispatch( setLocal(parseInt(e.currentTarget.value) > 0? locals[parseInt(e.currentTarget.value)]: undefined))
                } 
                ref = {selectLocalRef}>
          {locals.map( (local:Local, index:number) =>
            <option key={index} value = {index} selected = {local === cart.local}> 
              { local.name } 
            </option>
          )}
        </select>
      </div>
      <div className = {styles.grid}>
        {
          catalog.data.filter(
            (product) => cart.local? product.stock[cart.local.id].quantity > 0 : true
          ).map(
            (product, index)=> <ProductCard product = {product} key = {index}/>
          )
        }
      </div>
    </main>
  )
}

function ProductCard( {product}:{product:Product} ){
  const router = useRouter();
  function viewProduct(){
    router.push({
      "pathname": "/product/"+product.sku,
    })
  }

  return (
    <div className={styles.card} onClick={viewProduct}>
      <h1>{product.name}</h1>
      <div className={styles.imagecontainer}>
        <img src={product.image}/>
      </div>
      <p>{product.price} CLP</p>
    </div>
  )
}
