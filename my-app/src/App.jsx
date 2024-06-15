import './App.css';
import './styles/App.css'

import axios from 'axios'
import NavBar from './components/navBar/navBar';
import { Article } from './components/article/Article';
import { Footer } from './components/footer/footer';
import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'

//componente em classe no React é um componente que
//herda a classe React e retorna HTML pelo render.

//componente funcional é uma função que retorna HTML.
export default function App() {

const [news, setNews] = useState([])

useEffect(() => {
  async function loadNews() {
    const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/')
    const newsdata = response.data.results

    console.log(newsdata)
    setNews(newsdata)
  }
  loadNews()
}, [])


    return (
      <>
      <NavBar />
      <section id="articles">
        {news.length === 0 ? (

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <InfinitySpin
            visible={true}
            width="200"
            color="#48528E"
            ariaLabel="infinity-spin-loading"
            />

          </div>
        ) : news.map((article) => {
          return(
            <Article
                key={article.id}
                thumbnail = {article.image_url}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                />
          )
        })}
      </section>
      <footer id='footer'>
        <Footer />
      </footer>
      </>
    )
  }


