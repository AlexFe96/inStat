import React from 'react';
import { inject, observer } from 'mobx-react';
import ToDoList from './ToDoList';
import ToDoStore from '../stores/TodoStore';

type TToDoSummaryProps =
  {
    toDoStore?: ToDoStore,
  }
type TToDoSummaryState =
  {
    title: string,
    isCompleted: boolean,
    todoError: Error | null
  }
@inject('toDoStore')
@observer
class ToDoComponent extends React.Component<TToDoSummaryProps, TToDoSummaryState> {
  constructor(props: TToDoSummaryProps) {
    super(props);
    this.state = { title: '', isCompleted: false, todoError: null };

    this.addToDo = this.addToDo.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onIsCompleteChange = this.onIsCompleteChange.bind(this);
  }

  async addToDo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await this.props.toDoStore?.addToDo(
      this.state.title,
      this.state.isCompleted
    );

    this.setState({ title: '', isCompleted: false });
  }

  onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ title: event.target.value });
  }

  onIsCompleteChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ isCompleted: event.target.checked });
  }

  render() {
    let todos = this.props.toDoStore?.toDos || [];

    return (
      <div className="todoContainer">
        {this.state.todoError?.message ? (
          <div>
            <div className="alert alert-danger" role="alert">
              Some error occurred. Please try again
            </div>
          </div>
        ) : null}

        <h4 style={{ marginBottom: '30px' }}>Create New Wishlist</h4>

        <form onSubmit={this.addToDo}>
          <div>
            <div className="form-group col-md-8">
              <label className="form-label" htmlFor="Title">
                Wish
              </label>
              <input
                placeholder="Enter your Wish"
                className="form-control"
                onChange={this.onTitleChange}
                name="Title"
                id="Title"
                style={{ minWidth: '150px' }}
                value={this.state.title}
                required
              />
            </div>

            <div
              className="col-md-2 form-check"
              style={{
                marginTop: '40px',
                marginLeft: '20px',
                verticalAlign: 'center',
              }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                id="IsCompleted"
                name="IsCompleted"
                onChange={this.onIsCompleteChange}
                checked={this.state.isCompleted}
              />

              <label htmlFor="IsCompleted" className="form-check-label">
                Completed?
              </label>
            </div>

            <div
              className="col-md-2 mt-30 ml-20"
              style={{
                marginTop: '30px',
                verticalAlign: 'center',
              }}
            >
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
        <div className="mt-20">
          <ToDoList todos={todos} />
        </div>
      </div>
    );
  }
}

export default ToDoComponent