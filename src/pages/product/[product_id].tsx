import styles from '@/styles/Home.module.css'
import ReturnButton from '../../../components/returnbutton';
import { useRouter } from "next/router"
import { useQuery } from "react-query";
import { useState, useEffect } from "react"

export default function Home() {
  const router = useRouter();
  const product_id = router.asPath.split("/").pop()
  const [product, setProduct] = useState<Product|undefined>(undefined);

  const catalog = useQuery<Array<Product>, Error>('catalog', () =>
    fetch('https://xnoj0ialk2.execute-api.us-east-1.amazonaws.com/default/GetProductsTechTest', 
    {'mode': 'cors'}).then(res => res.json())
  )
  useEffect(()=>{
    if( catalog.data && product_id && product_id !== "[product_id]"){
      setProduct(catalog.data[parseInt(product_id)])
    }
  }, [catalog.data])

  return (
    <main className = {styles.main}>
      <ReturnButton/>
      {
        !product?
        <h2>producto no encontrado</h2>:
        <p>El producto es {product.name}</p>
      }
    </main>
  )
}
