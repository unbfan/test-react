import React, { Component } from 'react';

class ProjectItem extends Component {
  
  /**
   * Aim to pass back to App.js which is 2 levels higher, to do deletion there.
   * @param {type} id
   * @returns {undefined}
   */
  deleteProject(id){
    this.props.onDelete(id);//pass back to Projects 
  }
  
  render() {
    
//    console.log(this.props);
    
    return (
      <li className="Project">
        {this.props.project.id} - <strong>{this.props.project.title}</strong> - {this.props.project.category}
         <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
        
      </li>
    );
  }
}

//validation
ProjectItem.propTypes ={
  projects: React.PropTypes.object,
  onDelete: React.PropTypes.func
}


export default ProjectItem;
