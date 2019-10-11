import React, { Component } from "react";
import { todos } from "../fakeData";

export default class TodoList extends Component {
    render() {
        return (
            <React.Fragment>
                <h3 className="ml-3 mt-3">All Todos</h3>
                <div className="row">
                    <div className="col-md-12">
                        {
                            todos.map((item, index) => (
                                <div key={index} className="bg-light my-3 p-3">
                                    <p className="mb-0">Description: {item.description}</p>
                                    <p className="mb-0">Responsible: {item.responsible}</p>
                                    <p className="mb-0">Priority: {item.priority}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}