var App = require('./components/App.js')
var React = require('react')
var reactDOM = require ('react-dom')
var AppAPI = require('./utils/appAPI')


reactDOM.render(
    <App />,
    document.getElementById('app')
)