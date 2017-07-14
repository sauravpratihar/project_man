import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import $ from 'jquery';
import Todos from './Components/Todos';
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

getTodos(){
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      })
    }.bind(this),
    error: function(err){
      console.log(err);
    }

  })
}

getProjects(){
  this.setState({
    projects: [
      {
        id: uuid.v4(),
        title: 'Business website',
        catagory: 'Web design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        catagory: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce shopping cart',
        catagory: 'Web Development'
      }

    ]
  })
}
componentWillMount(){
  this.getProjects();
  this.getTodos();
}

componentDidMount(){
  this.getTodos();
}
projectHandler(project){

  let projects = this.state.projects;
  projects.push(project);
  console.log(projects);
  this.setState({
    projects: projects
  })
}

handleDelete(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x =>  x.id === id);
  projects.splice(index, 1)
  this.setState({projects: projects});

}
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.projectHandler.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDelete.bind(this)} />
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
