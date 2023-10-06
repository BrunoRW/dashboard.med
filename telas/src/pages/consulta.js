import Styles from "@/styles/Consulta.module.css"

// COMPONENTS 

import Header from "@/components/header"
import LeftBar from "@/components/leftBar"
import SrcBar from "@/components/srcBar"
import Tabela from "@/components/tabelaImp"

export default function Consulta(){
  return (
    <main id="main">
      <Header/>
      <div id="container">
        <LeftBar/>

        <div id="content">
          <div id="innerCont">
            <div className={Styles.lastCont}>
              <SrcBar/>
              <Tabela/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}