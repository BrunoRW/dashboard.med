import Styles from "@/styles/Comments.module.css"

export default function Comments(){
    return (
        <div id={Styles.commentsOut}>
            <div className={Styles.comments}>
                <div className={Styles.profOutImg}>
                    <div className={Styles.profImgComments}></div>
                </div>
                    <div className={Styles.cInfOut}>
                    <div className={Styles.fInf}></div>
                    <div className={Styles.sInf}></div>
                </div>
            </div>
        </div>
    )
}