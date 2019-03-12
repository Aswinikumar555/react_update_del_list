import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  User  from "./components/User";
import UniqueId from 'react-html-id'

class App extends Component {
  constructor(){
    super()
    UniqueId.enableUniqueIds(this)
    this.state={
      users:[
        {id:this.nextUniqueId(),name:"a",age:1},
        {id:this.nextUniqueId(),name:"b",age:10},
        {id:this.nextUniqueId(),name:"c",age:20}
      ]
    }
    console.log(this.state)
  }

  

  deleteUser = (index,e) =>{
    const users=Object.assign([],this.state.users)
    users.splice(index,1)
    this.setState({users:users})
  }

  changeUser=(id,e) =>{
    const index = this.state.users.findIndex((user) =>{
      return user.id === id;
    })

    const user= Object.assign({},this.state.users[index])
    user.name = e.target.value

    const users=Object.assign([],this.state.users)
    users[index]=user

    this.setState({users:users})

  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user,index) =>{
              return(
                <User key={user.id} name={user.name} age={user.age} 
                      deleteEvent={this.deleteUser.bind(this,index)}
                      changeEvent={this.changeUser.bind(this,user.id)}
                />
              )
            } )
          }
        </ul>
      </div>
    );
  }
}

export default App;
