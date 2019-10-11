import React, { Component } from "react";
import InputBox from "../components/InputBox";
import RadioInput from "../components/RadioInput";

export default class CreateTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      responsible: "",
      description: "",
      priority: "",
      isCompleted: false
    };

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }


  render() {
    const { responsible, description, priority } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <InputBox onChangeHandler={this.onInputChangeHandler} name="description" value={description} label="Description" />
          <InputBox onChangeHandler={this.onInputChangeHandler} name="responsible" value={responsible} label="Responsible" />
          <div className="form-group">
            <RadioInput onChangeHandler={this.onInputChangeHandler} name="priority" value="Low" label="Low" checked={priority === 'Low'} />
            <RadioInput onChangeHandler={this.onInputChangeHandler} name="priority" value="Medium" label="Medium" checked={priority === 'Medium'} />
            <RadioInput onChangeHandler={this.onInputChangeHandler} name="priority" value="High" label="High" checked={priority === 'High'} />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Todo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}