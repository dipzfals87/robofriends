import React, {Component} from "react";

import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";

import './App.css';


class App extends Component {

    constructor() {
        super();

        // deklarasikan state utk load data robot & searchfield
        this.state = {
            robots: [],
            searchField: ''
        }

        // console.log('constructor');
    }

    // ini bagian dari mounting component lifecycle
    // componentDidMount() is invoked immediately after a component is mounted 
    // (inserted into the tree). Initialization that requires DOM nodes should 
    // go here. If you need to load data from a remote endpoint, 
    // this is a good place to instantiate the network request.
    componentDidMount() {
        // get data from API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users })})

        // console.log('componentDidMount');
    }

    // method event change utk searcbox
    onSearchChange = (event) => {
        // ubah isi searchField pada state sesuai dengan text search yg diketik
        this.setState({  searchField: event.target.value });
        // console.log(event.target.value);
    }

    render() {
        // console.log('render');
        // filter data robotsnya berdasarkan searchfield yg diset pd state
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase()
            .includes(this.state.searchField.toLowerCase()); 
        })

        // console.log(filteredRobot);
        return !this.state.robots.length ? // jika data kosong
            <h1>Loading</h1> 
            :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange } />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobot} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
    
    
}

export default App;