import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"
import { useQuery } from "react-query";

export default function Home() {
  const catalog = useQuery<Array<Product>, Error>('catalog', () =>
    fetch('https://xnoj0ialk2.execute-api.us-east-1.amazonaws.com/default/GetProductsTechTest', 
    {'mode': 'cors'}).then(res => res.json())
  )
  

  if (!catalog.data){return <></>}
  return (
    <main className = {styles.main}>
      <div>Filtro</div>
      <div className = {styles.grid}>
        {
          catalog.data.filter(()=>true).map((product, index)=>
            <ProductCard product = {product} id = {index} key = {index}/>
          )
        }
      </div>
    </main>
  )
}

function ProductCard( {product, id}:{product:Product, id:number} ){
  const router = useRouter();
  function viewProduct(){
    router.push("/product/"+id)
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
