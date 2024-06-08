import React from 'react'
import './article_style.css'


export class Article extends React.Component {
    constructor(){
        super()
        this.state = {reader: false}
    }
    altState = () => {
        this.setState({reader: !this.state.reader})
    }


    render() {
        return (
            <article>
                 <img src={this.props.thumbnail} alt={this.props.title} />
                 <div className="articleText">

                    <h2>{this.props.title}</h2>
                    <div className="secondary">
                        <h3>{this.props.provider}</h3>

                        <button
                        onClick={this.altState}>{this.state.reader ? "Lida" : "Não Lida"}
                        </button>
                    </div>
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