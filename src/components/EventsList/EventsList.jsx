import { Box } from 'components/Box';
import { EventItem } from 'components/EventItem/EventItem';

export const EventList = ({ events, onDeleteEvent, getEventById }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    gridRowGap={40}
    gridColumnGap={24}
    as="ul"
  >
    {events.map(event => (
      <EventItem
        key={event.id}
        event={event}
        getEventById={getEventById}
        onDeleteEvent={onDeleteEvent}
      />
    ))}
  </Box>
);
