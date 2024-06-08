import React from "react";

export class Counter extends React.Component {
    constructor(){
        super()
        this.state = {contador: 0}
        console.log("Biulding Counter class!")
    }
    
    //MOUNT CYCLE

    //The react is depreciating this method, so it's unsafe.
    UNSAFE_componentWillMount(){
        console.log("The Counter component will be mounted")
    }
    //The react, for safety reason, recomend use 'componentDidMount' method 
    componentDidMount() {
        console.log('the component was been mounted(LAST STEP)')
    }


    //UPDATE CYCLE


    //this method will be called whenever there is a change in props or states.
        //if return = true, the change will be called, if not, nothing happening.
    shouldComponentUpdate() {
       return true 
    }

    UNSAFE_componentWillUpdate() {
        console.log('the component will be updated')
    }

    componentDidUpdate() {
        console.log('the Counter component was updated')
    }

    componentWillUnmount() {
        console.log('the component will be unmounted')
    }

    render() {
        console.log('The component is mounted!')


        return(
            <div>
                <h1>{this.state.contador}</h1>
    

            <button onClick={() => {
                this.setState({contador: this.state.contador - 1})
            }}>Diminuir</button>
            <button onClick={() => {
                this.setState({contador: this.state.contador + 1})
            }}>Aumentar</button>
            </div>
        )
    }
}