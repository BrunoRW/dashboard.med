import Styles from "@/styles/leftBar.module.css"
import Link from "next/link"

export default function leftBar(){
    return (
        <div id={Styles.leftBar}>
            <div class={Styles.arrow}>arrow</div>
            <Link href="/">
                <div class={Styles.block}></div>
            </Link>
            <Link href="agenda">
                <div class={Styles.block}></div>
            </Link>
            <Link href="consulta">
                <div class={Styles.block}></div>
            </Link>
        </div>
    )
}