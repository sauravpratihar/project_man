import React, { Component } from 'react';
import ProjectList from './ProjectList';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    // console.log(this.props);
    let ProjectLists;
    if(this.props.projects){
        ProjectLists = this.props.projects.map(project =>{
          // console.log(project);
          return(
          <ProjectList onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
        });
    }
    return (
      <div className="Projects">
        <h3>Latest Posts</h3>
        {ProjectLists}

      </div>
    );
  }
}

Projects.propTypes = {
  onDelete : React.PropTypes.func,
  projects : React.PropTypes.array
}
export default Projects;
