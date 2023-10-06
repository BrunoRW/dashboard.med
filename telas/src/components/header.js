import Styles from "@/styles/Header.module.css"

export default function Header(){
    return (
        <header id={Styles.header}>
            <div id={Styles.innerHeader}>
                <div id={Styles.headerLeft}>
                    <div id={Styles.firstBlockLeft}></div>
                    <div id={Styles.secondBlockLeft}></div>
                </div>
                <div id={Styles.headerRight}>
                    <div id={Styles.profOut}>
                        <div id={Styles.profile}></div>
                        <div id={Styles.infoProf}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}