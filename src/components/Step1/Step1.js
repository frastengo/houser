import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import store, {UPDATE_ADDRESS, UPDATE_CITY, UPDATE_NAME, UPDATE_STATE, UPDATE_ZIP} from './../../store'
import axios from 'axios'

export default class Step1 extends Component {
    constructor(props){
        super(props)

        const reduxState = store.getState()

        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }

    }

    componentDidMount () {
        store.subscribe(()=> {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

  

    save = () => {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        });
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        });
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        });
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
        });
        store.dispatch({
            type: UPDATE_ZIP,
            payload: this.state.zip
        });

    }

    render(){
        return (
            <div>This is Step 1
                <form>
                    <label>Property name</label>
                    <input
                        value={this.state.name}
                        onChange={(e)=> this.setState({name: e.target.value})}
                    />
                    <label>Address</label>
                    <input
                        value={this.state.address}
                        onChange={(e)=> this.setState({address: e.target.value})}
                    />
                    <label>City</label>
                    <input
                        value={this.state.city}
                        onChange={(e)=> this.setState({city: e.target.value})}
                    />
                    <label>State</label>
                    <input
                        value={this.state.state}
                        onChange={(e)=> this.setState({state: e.target.value})}
                    />
                    <label>Zip</label>
                    <input
                        value={this.state.zip}
                        onChange={(e)=> this.setState({zip: e.target.value})}
                    /> 
                </form>
                <Link to='/wizard/step2'><button onClick={this.save}>Next Step</button></Link>
            </div>
        )
    }
}