import { Box } from 'components/Box';
import { Link } from 'react-router-dom';
import img from '../../default.jpg';
import { MoreInfoButton } from 'components/Button/Button.styled';
import { EventDescription, EventTitle, StyledImage } from './EventItem.styled';
import { theme } from 'constants/theme';

export const EventItem = ({ event, getEventById }) => (
  <Box
    box-sizing="border-box"
    width="302px"
    height="480px"
    borderRadius="12px"
    boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
    display="flex"
    flexDirection="column"
    as="li"
    position="relative"
  >
    <StyledImage src={img} alt={event.title}></StyledImage>
    <Box box-sizing="border-box">
      <Box
        box-sizing="border-box"
        position="absolute"
        top="259px"
        left="0px"
        padding="8px 16px"
        color={theme.colors.primary}
        backgroundColor="rgba(255, 255, 255, 0.80)"
        display="flex"
        width="270px"
        justifyContent="space-between"
        fontWeight={theme.fontWeights.regular}
      >
        <p>
          {event.date} at {event.time}
        </p>
        <p>{event.location}</p>
      </Box>
      <EventTitle>{event.title}</EventTitle>
      <EventDescription>{event.description}</EventDescription>
      <Link to={`${event.id}`}>
        <MoreInfoButton
          onClick={() => {
            getEventById(event.id);
          }}
        >
          More info
        </MoreInfoButton>
      </Link>
    </Box>
  </Box>
);
