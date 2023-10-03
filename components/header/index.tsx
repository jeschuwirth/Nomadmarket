import styles from './styles.module.css'
import { FaShoppingCart } from 'react-icons/Fa';


export default function Header(){
    return (
      <div className={styles.header}>
        <button>Ver carrito <FaShoppingCart/></button>
      </div>
    )
}