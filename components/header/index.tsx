import styles from './styles.module.css'
import { FaShoppingCart } from 'react-icons/Fa';


export default function Header(){
    return (
      <div className={styles.header}>
        <h1>NomadMarket</h1>
        <button>Ver carrito <FaShoppingCart/></button>
      </div>
    )
}