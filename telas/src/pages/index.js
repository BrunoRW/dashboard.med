import Styles from "@/styles/Home.module.css"

// COMPONENTS 

import Header from "@/components/header"
import LeftBar from "@/components/leftBar"
import Tabela from "@/components/tabelaImp"
import Comments from "@/components/commentsOut"
import CalendarC from "@/components/calendar";
import SrcBar from "@/components/srcBar"

export default function Home(){
  return (
    <main id="main">
      <Header/>
      <div id="container">
        <LeftBar/>

        <div id="content">
          <div id="innerCont">
            <div id={Styles.leftCont}>
              <SrcBar/>
              <div id={Styles.dash} className={Styles.defSpace}>
                <h1 className={Styles.titleDash}>DASHBOARD</h1>

                <div className={Styles.cardsOut}>
                  <div className={Styles.card}></div>
                  <div className={Styles.doubleCards}>
                    <div className={Styles.card}></div>
                    <div className={Styles.card}></div>
                  </div>
                </div>
              </div>

              <div id={Styles.avisos} className={Styles.defSpace}>
                <h1 className={Styles.titleDash}>AVISOS/LEMBRETES</h1>
                  <Tabela/>
              </div>
            </div>
            <div id={Styles.rightCont}>
              <CalendarC/>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )

  
}

