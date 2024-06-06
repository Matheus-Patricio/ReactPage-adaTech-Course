import React from 'react'
import jWebb from '../../assets/imgs/jameswebb.png'
import './article_style.css'


export class Article extends React.Component {
    render() {
        return (
            <article>
                 <img src={this.props.thumbnail} alt={this.props.title} />
                 <div className="articleText">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>
                    <p>{this.props.description}</p>
                 </div>
            </article>
        )
    }
}


/* 
this.props = {
    title: 'valor que voce implementou'
    sintaxe =  {chave:valor}
}

*/