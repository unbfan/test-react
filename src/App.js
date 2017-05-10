import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';

import $ from 'jquery';



//import logo from './logo.svg';
import './App.css';

class App extends Component {

  //constructor, define initial state
  constructor() {
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social APP',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        },
      ]
    });
  }

  //set state in here, not in constructor
  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  //bring data from outside APIs
  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  compenentDidMount() {
this.getTodos();
  }

  handleAddProject(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects}); //reset the state
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id); //look through all ids, and compare to the id passed in, and set index when the id is found
    projects.splice(index, 1);//from index, delete 1
    this.setState({projects: projects}); //reset the state
  }

  render() {
    return (
            <div className="App">
            
              <AddProject addProject={this.handleAddProject.bind(this)} />
            
              <br/>
            
              <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/> 
            </div>
            );
  }
}

export default App;
