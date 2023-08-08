import { useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Box } from 'components/Box';
import { EventCard } from 'components/EventCard/EventCard';
import { Outlet } from 'react-router-dom';
import { StyledLink } from '../../components/StyledLink.styled';

export const EventDetails = ({ getEventById, onDelete }) => {
  const { eventId } = useParams();
  const event = getEventById(eventId);

  return (
    <Box position="relative" display="flex" px="80px">
      <StyledLink to="/">
        <FiArrowLeft size="24" />
        <p>Back</p>
      </StyledLink>
      <EventCard event={event} onDelete={onDelete} />
      <Outlet />
    </Box>
  );
};
