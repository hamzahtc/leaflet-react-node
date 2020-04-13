import React, { Component } from 'react'
import io from 'socket.io-client';


let socket;
const ENDPOINT = 'localhost:5000';

export default class Tracker extends Component {
  
  state = {
    location : {}
  }
  send() {
    
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude: lat, longitude: lng } = pos.coords
      socket.emit('updateLocation', { lat, lng })
    });
  }
  componentDidMount(){
    socket = io(ENDPOINT);

    this.intervalID = setInterval(
      () => this.send(),
      1000
    );
 
   
  
}
  render() {
    return (
      <div>
          Hamza

      </div>
    )
  }
}
