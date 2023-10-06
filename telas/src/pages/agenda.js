import Styles from "@/styles/Agenda.module.css"

// COMPONENTS 

import Header from "@/components/header"
import LeftBar from "@/components/leftBar"
import CalendarC from "@/components/calendar"
import Comments from "@/components/commentsOut"

export default function Agenda(){

  const horariosDisponiveis = [
    {time: "8:00"},
    {time: "8:30"},
    {time: "9:00"},
    {time: "9:30"},
    {time: "10:00"},
    {time: "10:30"},
  ]
  return (
    <main id="main">
      <Header/>
      <div id="container">
        <LeftBar/>

        <div id="content">
          <div id="innerCont">
            <div id={Styles.leftCont}>
              <h1 className={Styles.title}>MÉDICOS</h1>
              <Comments/>
              <Comments/>
              <Comments/>
              <CalendarC/>
            </div>
            <div id={Styles.rightCont}>
              <h1 className={Styles.title}>20/Fev 2022</h1>

              

              <div className={Styles.timeAdd}>
                {
                  horariosDisponiveis.map((e, i) => {
                    return <div className={Styles.timeIn} key={i}>
                            {e.time}
                            <div className={Styles.simbol}>+</div>
                            
                            </div> 
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}