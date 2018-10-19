import React, { Component } from 'react';
import House from '../House/House';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <House/>
            </div>
         );
    }
}
 
export default Dashboard;