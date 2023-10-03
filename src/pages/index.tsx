import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useQuery } from "react-query";

export default function Home() {
  const catalog = useQuery<Array<Product>, Error>('catalog', () =>
    fetch('https://xnoj0ialk2.execute-api.us-east-1.amazonaws.com/default/GetProductsTechTest', 
    {'mode': 'cors'}).then(res => res.json())
  )
  if (!catalog.data){return <></>}

  return (
    <>
      <Head>
        <title>Nomadmarket</title>
      </Head>
      <main className = {styles.main}>
        <h1>Nomadmarket</h1>
        <div className = {styles.grid}>
          {
            catalog.data.filter(()=>true).map((product, index)=>
              <ProductCard product = {product} key = {index}/>
            )
          }
        </div>
      </main>
    </>
  )
}

function ProductCard( {product}:{product:Product} ){
  return (
    <div className={styles.card}>
      <h1>{product.name}</h1>
      <div className={styles.imagecontainer}>
        <img src={product.image}/>
      </div>
    </div>
  )
}
