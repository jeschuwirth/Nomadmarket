import styles from './styles.module.css'
import { FaPlus, FaMinus } from 'react-icons/fa';


type Props = {
  value: number,
  onChange: Function
  max?: number
}

export default function Counter({value, onChange, max}:Props){

  function handleQuantity( delta:number ){
    if (max && (value + delta > max)){
      return onChange(max)
    }
    if (value + delta < 0){
      return onChange(0)
    }
    onChange(value + delta)
  }

  return (
    <div className={styles.container}>
      <button className = {styles.counterButton} onClick = {() => handleQuantity( -1 ) }>
        <FaMinus/> 
      </button>
      <p>{value}</p>
      <button className = {styles.counterButton} onClick = {() => handleQuantity( +1 ) }>
        <FaPlus/>
      </button>
    </div>
  )
}