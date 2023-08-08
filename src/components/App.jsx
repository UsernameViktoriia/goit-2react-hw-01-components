import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import events from '../utils/events';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { AddEvent } from 'pages/AddEvent/AddEvent';
import { EventDetails } from 'pages/EventDetails/EventDetails';

export class App extends Component {
  state = {
    events,
    filter: '',
  };

  deleteEvent = eventId => {
    this.setState(prevState => ({
      events: prevState.events.filter(event => event.id !== eventId),
    }));
    Notiflix.Notify.success('The event was successfully deleted');
  };

  addEvent = ({
    title,
    description,
    date,
    time,
    location,
    category,
    priority,
  }) => {
    const event = {
      id: nanoid(),
      title,
      description,
      date,
      time,
      location,
      category,
      priority,
    };

    this.setState(prevState => ({
      events: [event, ...prevState.events],
    }));
  };

  changeFilterKeyword = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleEvents = () => {
    const { filter, events } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return events?.filter(
      event =>
        event.title.toLowerCase().includes(normalizedFilter) ||
        event.description.toLowerCase().includes(normalizedFilter)
    );
  };
  getEventById = eventId => {
    return this.state.events.find(event => event.id === eventId);
  };
  componentDidMount = () => {
    const events = localStorage.getItem('events');
    const parsedEvents = JSON.parse(events);
    if (parsedEvents) {
      this.setState({ events: parsedEvents });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.events !== prevState.events) {
      localStorage.setItem('events', JSON.stringify(this.state.events));
    }
  }
  render() {
    const { filter } = this.state;

    const visibleEvents = this.getVisibleEvents();

    return (
      <>
        <Header value={filter} onChange={this.changeFilterKeyword}></Header>
        <Routes>
          <Route
            index
            element={
              <HomePage
                events={visibleEvents}
                onDeleteEvent={this.deleteEvent}
                getEventById={this.getEventById}
              />
            }
          ></Route>
          <Route
            path="/:eventId"
            element={
              <EventDetails
                getEventById={this.getEventById}
                onDelete={this.deleteEvent}
              />
            }
          ></Route>
          <Route
            path="/addevent"
            element={<AddEvent onSubmit={this.addEvent} />}
          ></Route>
          {/* <Routes path="*" element={<NotFound />} /> */}
        </Routes>
      </>
    );
  }
}
