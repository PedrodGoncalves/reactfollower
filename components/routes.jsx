import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import App from './App.jsx'

const routes = (
    <Route path='/' component= {App}/>
)

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('entry'))