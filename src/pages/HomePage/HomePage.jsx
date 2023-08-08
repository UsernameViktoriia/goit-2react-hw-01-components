import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Box } from 'components/Box';
import { EventList } from 'components/EventsList/EventsList';
import { Outlet } from 'react-router-dom';
import { TitlePage } from './HomePage.styled';
import { Button } from 'components/Button/Button';

export const HomePage = ({ events, onDeleteEvent, getEventById }) => {
  return (
    <Box
      backgroundImage="url('../../backgroundMain.jpg')"
      backgroundPosition="center"
      as="main"
      display="flex"
      flexDirection="column"
      px="80px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        align-items="center"
        mt="60px"
        mb="40px"
      >
        <TitlePage>My events</TitlePage>
        <Link to="/addevent">
          <Button icon={FiPlus}>Add new event</Button>
        </Link>
      </Box>

      <EventList
        events={events}
        getEventById={getEventById}
        onDeleteEvent={onDeleteEvent}
      />
      <Outlet />
    </Box>
  );
};
