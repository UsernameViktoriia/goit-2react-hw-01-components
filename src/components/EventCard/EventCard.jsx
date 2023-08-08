import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import img from '../../default2.jpg';
import { DeleteButton } from 'components/Button/Button.styled';
import { EventDescriptionBig, EventTitleBig } from './EventCard.styled';
import { theme } from '../../constants/theme';

export const EventCard = ({ event, onDelete }) => (
  <Box mx="auto" mt="59px">
    <EventTitleBig>{event.title}</EventTitleBig>
    <Box
      box-sizing="border-box"
      width="628px"
      height="492px"
      borderRadius="8px"
      boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
      display="flex"
      flexDirection="column"
      mt="14px"
      mb="120px"
      position="relative"
    >
      <img height="272px" src={img} alt={event.title}></img>
      <EventDescriptionBig>{event.description}</EventDescriptionBig>
      <Box p="16px" pt="8px">
        <Box color={theme.colors.primary} display="flex" gridGap={5}>
          <Box
            px="12px"
            py="8px"
            borderRadius="8px"
            boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
          >
            {event.date} at {event.time}
          </Box>
          <Box
            px="12px"
            py="8px"
            borderRadius="8px"
            boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
          >
            {event.location}
          </Box>
        </Box>
        <Link to="/">
          <DeleteButton onClick={() => onDelete(event.id)}>
            Delete event
          </DeleteButton>
        </Link>
      </Box>
    </Box>
  </Box>
);
