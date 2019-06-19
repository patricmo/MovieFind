// import React, { Component } from 'react'

// export class App extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default App

// https://reactjs.org/docs/react-without-es6.html

var React = require('react')
var ReactClass = require('create-react-class')
var AppActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore') 

var App = ReactClass({
    render: function(){
        return (
            <div>
                MY APP
            </div>
        )
    }
})

module.exports = App