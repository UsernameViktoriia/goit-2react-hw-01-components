import { FiArrowLeft } from 'react-icons/fi';
import { Box } from 'components/Box';
import EventForm from 'components/EventForm/EventForm';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/StyledLink.styled';

export const AddEvent = ({ onSubmit }) => {
  return (
    <Box display="flex" alignItems="center" px="80px">
      <StyledLink to="/">
        <FiArrowLeft size="24" />
        <p>Back</p>
      </StyledLink>
      <h2>Create new event</h2>
      <EventForm onSubmit={onSubmit} />
      <Outlet />
    </Box>
  );
};
