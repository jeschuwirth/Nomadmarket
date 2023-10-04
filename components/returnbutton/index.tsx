import styles from './styles.module.css'
import { useRouter } from "next/router"


export default function ReturnButton() {
    const router = useRouter();
    return (
        <div className={styles.returncontainer}>
            <p onClick={ () => {
                router.push({
                    "pathname": "/",
                })
            }}>Volver</p>
        </div>
    )
}