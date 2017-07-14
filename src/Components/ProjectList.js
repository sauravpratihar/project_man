import React, { Component } from 'react';

class ProjectList extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    // console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>:{this.props.project.catagory} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}
ProjectList.propTypes = {
  onDelete : React.PropTypes.func,
  project : React.PropTypes.object
}
export default ProjectList;
