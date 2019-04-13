import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import store, {UPDATE_MORTAGE, UPDATE_RENT, CANCEL} from './../../store'
import axios from 'axios'

export default class Step3 extends Component {
    constructor(props){
        super(props)

        const reduxState = store.getState()

        this.state = {
            mortage: reduxState.mortage,
            rent: reduxState.rent,
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            zip: reduxState.zip,
            img: reduxState.img
        }
    }

    componentDidMount= ()=>{
        store.subscribe(()=> {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                zip: reduxState.zip,
                img: reduxState.img,
                mortage: reduxState.mortage,
                rent: reduxState.rent,    
            })
        })
    }

    save = () => {
        store.dispatch({
            type: UPDATE_RENT,
            payload: this.state.rent
        });
        store.dispatch({
            type: UPDATE_MORTAGE,
            payload: this.state.mortage
        });
    }


    addHouse = () => {
        const { name, address, city, state, zip, img, mortage, rent} = this.state
        const newHouse = {name, address, city, state, zip, img, mortage, rent}
        console.log('newhouse', newHouse)
        axios.post('/api/house', newHouse).then( res => {
            this.onComplete()

        })
    }

    onComplete = () => {
        this.props.history.push("/")

    }

    render(){
        console.log('state on step3', this.state)
        return (
            <div>
                <form>
                    <label>Montly Mortgage Amount</label>
                    <input
                        value={this.state.mortage}
                        onChange={(e)=> this.setState({mortage: e.target.value})}
                    />
                    <label>Desired Monthly Rent</label>
                    <input
                        value={this.state.rent}
                        onChange={(e)=> this.setState({rent: e.target.value})}
                    />
                </form>
                <Link to='/wizard/step2'><button onClick={this.save}>Previous Step</button></Link>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}