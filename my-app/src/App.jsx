import './App.css';

import logoImg from './assets/imgs/meteorite.png'
import NavBar from './components/navBar/navBar';
import './styles/App.css'
import { Article } from './components/article/Article';

/*iMAGES*/
import jameswebb from './assets/imgs/jameswebb.png'
import starship from './assets/imgs/starship.png'
import hubble from './assets/imgs/hubble.jpeg'
import planetqueue from './assets/imgs/alignplanets.png'


import React from 'react'

//componente em classe no React é um componente que
//herda a classe React e retorna HTML pelo render.

class App extends React.Component {

  render() {
    return (
      <>
      <NavBar />
      
      <section id="articles">

        
        <Article
        
            thumbnail = {jameswebb}
            title='TELESCÓPIO JAMES WEBB ANALISA GALÁXIA QUE AINDA ESTÁ FORMANDO ESTRELAS'
            provider='NASA'
            description='O Telescópio James Webb permitiu que uma galáxia que ainda está formando estrelas fosse analisada com mais detalhes. A Messier 82 (M82) está sendo observada há anos, porém só agora mais informações sobre sua atividade puderam ser coletadas.'/>
        
        <Article 

            thumbnail = {starship}
            title='STARSHIP POUSA PELA PRIMEIRA VEZ NO OCEANO NO QUARTO TESTE DE VOO.'
            provider='SPACE X'
            description='O foguete Starship, da SpaceX, destinado a viagens à Lua e a Marte, amerissou com sucesso no Oceano Índico pela primeira vez nesta quinta-feira (6), informou a empresa após um voo de teste que durou aproximadamente uma hora.'/>
            
        <Article
                        
            thumbnail = {hubble}
            title='DEFEITO ESTRUTURAL OBRIGA APOSENTADORIA DO TELESCÓPIO HUBBLE,'
            provider='NASA'
            description='A redução de funções do telescópio é devido a um defeito em um dos três giroscópios que controlam a direção. A ferramenta está com instabilidade nos últimos meses, o que ocasionou episódios sem pausa de “modo de segurança”. O mais recente aconteceu no dia 24 de maio.'/>

        <Article

            thumbnail = {planetqueue}
            title='FILA DE PALANETAS" PODE SER OBSERVADA A OLHO NU NESTA SEMANA.'
            provider='NASA'
            description='A partir dessa semana, uma formação curiosa começa a se tornar visível no céu da madrugada. Mais ou menos a partir das 05:30 da manhã, todos os planetas “clássicos”, aqueles visíveis a olho nu e conhecidos da humanidade há milênios, estarão visíveis no céu ao mesmo tempo. E o interessante disso tudo é que eles todos estarão perfilados quase numa linha reta, na verdade um arco, cortando o céu da direção leste para a direção oeste. Isso não acontece por acaso, todos os planetas do Sistema Solar estão confinados no plano do sistema, que na perspectiva de quem está na Terra parece ser uma estreita faixa no céu.' />

      </section>
      
      </>
    )
  }
}
 
export default App;
