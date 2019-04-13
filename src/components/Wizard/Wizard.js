import React, {Component} from 'react'
import { Link, Route, Switch} from 'react-router-dom'
import store, {CANCEL} from './../../store'
import axios from 'axios'

import Step1 from './../Step1/Step1'
import Step2 from './../Step2/Step2'
import Step3 from './../Step3/Step3'
import Edit from './../Edit/Edit'

export default class Wizard extends Component {
    constructor(){
        super()
    }

    cancel = () => {
        store.dispatch({
            type: CANCEL
        })
    }

    render(){
        return (
            <div>
                <div className='wizard-header'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button onClick={this.cancel}>Cancel</button></Link>
                    <Switch>
                        <Route path='/wizard/step1' component={Step1}/>
                        <Route path='/wizard/step2'component={Step2}/>
                        <Route path='/wizard/step3'component={Step3}/>
                        {/* <Route path='/api/house/edit/:id'component={Edit}/> */}
                    </Switch>
                </div>
            </div>
        )
    }
}