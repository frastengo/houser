import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import store, {UPDATE_IMG} from './../../store'

import axios from 'axios'

export default class Step2 extends Component {
    constructor(props){
        super(props)

        const reduxState = store.getState()

        this.state = {
            img: reduxState.img,
        }

    }

    componentDidMount = () =>{
        store.subscribe(()=> {
            const reduxState = store.getState();
            this.setState({
                img: reduxState.img
            })
        })
    }

    save = () => {
        store.dispatch({
            type: UPDATE_IMG,
            payload: this.state.img
        });

    }

    render(){
        return (
            <div>This is the Wizard
                <form>
                    <label>Image URL</label>
                    <input
                        value={this.state.img}
                        onChange={(e)=> this.setState({img: e.target.value})}
                    />
                </form>
                <Link to='/wizard/step1'><button onClick={this.save}>Previous Step</button></Link>
                <Link to='/wizard/step3'><button onClick={this.save}>Next Step</button></Link>
            </div>
        )
    }
}