import styles from '@/styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../../store'
import { useRouter } from "next/router"
import ReturnButton from '../../../components/returnbutton';



export default function Cart() {
    const dispatch = useDispatch();
    const router = useRouter();

    const cart = useSelector((state: RootState) => state.cart)

    return (
      <main className = {styles.main}>
        <ReturnButton/>
        <p>{cart.local?.name}</p>
      </main>
    )
  }