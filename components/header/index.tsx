import styles from './styles.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from "next/router"


export default function Header(){
  const router = useRouter();
  return (
    <div className={styles.header}>
      <h1>NomadMarket</h1>
      <button onClick = {() => {
        router.push({"pathname": "/cart/"})
      }}> Ver carrito <FaShoppingCart/> </button>
    </div>
  )
}