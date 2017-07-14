import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  static defaultProps = {
    catagories : ['Web Design', 'Web Development', 'App Development']
  }

  constructor(){
    super();
    this.state = {
      added: {}
    }
  }

  formHandler(e){
    e.preventDefault();

    if(this.refs.title.value === ''){
      alert('Title is required!');
    }
    else{
      this.setState({
        added: {
          id: uuid.v4(),
          title : this.refs.title.value,
          catagory : this.refs.catagory.value
        }
      }, function(){
        this.props.addProject(this.state.added);

      })

    }

  }

  render() {

    let Options = this.props.catagories.map(catagory => {
      return <option key={catagory} value={catagory}>{catagory}</option>
    })


    return (
      <div>
        <h3>Add Project</h3>

        <form onSubmit={this.formHandler.bind(this)}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <br />
          <div>
            <label>Catagory</label>
            <select ref="catagory">
              {Options}
            </select>
            <br /><br />
            <input type="submit" value="Submit"/>
            <br />
          </div>
        </form>
      </div>
    );
  }
}


AddProject.propTypes = {
  catagories : React.PropTypes.array,
  addproject : React.PropTypes.func
}
export default AddProject;
