import { useState } from 'react'
import React from 'react'
import './article_style.css'


export function Article({title, provider, description, thumbnail}) {
    const [reader, setReader] = useState(false)

    
        return (
            <article>
                 <img src={thumbnail} alt={title} />
                 <div className="articleText">

                    <h2>{title}</h2>
                    <div className="secondary">
                        <h3>{provider}</h3>

                        <button
                        onClick={() => {
                            setReader(!reader)}}>{reader ? "Lida" : "Não Lida"}
                        </button>
                    </div>
                    <p>{description}</p>
                 </div>
            </article>
        )
    }



/* 
this.props = {
    title: 'valor que voce implementou'
    sintaxe =  {chave:valor}
}

*/