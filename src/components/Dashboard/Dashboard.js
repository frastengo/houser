import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import House from './../House/House'
// import store from './../../store'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()

        // const reduxState = store.getState()

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses').then(res =>
            this.setState({
                houses: res.data
            })
        )
    }

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then( res => {
            this.getHouses();
        })
    }

    // editHouse = (id) => {
    //     axios.put(`/api/house/${id}`).then(res => {
    //         this.getHouses()
    //     })
    // }


    render(){
        const {houses} = this.state
        console.log("houses", houses)
        const mappedHouses = houses.map(house => {
            return <House getHouses={this.getHouses} key={house.id} id={house.id} house={house} deleteHouse={this.deleteHouse} />
        })
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <Link to='/wizard/step1'><button>Add New Property</button></Link>
                </div>
                <h2>Home Listings</h2>
                {mappedHouses}
            </div>
        )
    }
}