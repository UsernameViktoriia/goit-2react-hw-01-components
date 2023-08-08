import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { Button } from 'components/Button/Button';

class EventForm extends Component {
  state = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    priority: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    Notiflix.Notify.success(
      'The event was successfully added to the event list'
    );
  };

  reset = () => {
    this.setState({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      category: '',
      priority: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            rows="5"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Select date
          <input
            type="text"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Select time
          <input
            type="text"
            name="time"
            value={this.state.time}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </label>
        <p>Category</p>
        <label>
          <input
            type="radio"
            name="category"
            value="art"
            onChange={this.handleChange}
            checked={this.state.category === 'art'}
          />
          Art
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="music"
            onChange={this.handleChange}
            checked={this.state.category === 'music'}
          />
          Music
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="business"
            onChange={this.handleChange}
            checked={this.state.category === 'business'}
          />
          Business
        </label>

        <br />

        <label>
          Priority
          <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleChange}
          >
            Priority
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <br />

        <Button type="submit" disabled={!this.state.title}>
          Add event
        </Button>
      </form>
    );
  }
}
export default EventForm;
