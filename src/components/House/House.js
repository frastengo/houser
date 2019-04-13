import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class House extends Component {
    constructor(props){
        super(props)


        this.state = {
            displayForm: false,
            name: this.props.house.name
        }
    }

    edit = () => {
        this.setState({
            displayForm: true
        })

    }

    submitChange = (id) => {
        const name = this.state.name
        axios.put(`/api/house/${id}`, {name: name}).then(res => {
            this.setState({
                displayForm: false,
                // name: ''
            })
        })
    }

    render(){
        
        const { house, deleteHouse, id} = this.props
        console.log('houseid', this.props.id)
        console.log('renderthisstatename', this.state.name)
        return (
            <div className='display-house'>
                <img src={house.img}/><br/>
                
                <div className='information'>
                    <h3>Property name: {this.state.name}</h3>
                    <h3>Address: {house.address}</h3>
                    <h3>City: {house.city}</h3>
                    <h3>State: {house.state}</h3>
                    <h3>Zip: {house.zip}</h3>
                    <h3>Monthly Mortage: {house.mortage}</h3>
                    <h3>Desired Rent: {house.rent}</h3>
                    <button onClick={this.edit}>Edit</button>
                    {this.state.displayForm && 
                    (<form>
                        <label>Name</label>
                        <input 
                            value={this.state.name}
                            type='text'
                            onChange={(e) => this.setState({name: e.target.value})}
                        />
                        <button onClick={() => this.submitChange(this.props.id)}>Submit Changes</button>
                    </form>
                    )}
                <button onClick={() => deleteHouse(id)}>Delete</button>
                
                </div>
            </div>
        )
    }
}