import Styles from "@/styles/SrcBar.module.css"


export default function SrcBar(){
    return (
        <div id={Styles.outSrc}>
            <input placeholder="BUSCAR" id={Styles.srcBar}/>
            <div id={Styles.lupa}>lupa</div>
        </div>
    )
}