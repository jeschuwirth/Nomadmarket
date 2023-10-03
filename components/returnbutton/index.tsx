import styles from './styles.module.css'
import { useRouter } from "next/router"


export default function ReturnButton() {
    const router = useRouter();
    return (
        <div className={styles.returncontainer}>
            <p onClick={ router.back }>Volver</p>
        </div>
    )
}