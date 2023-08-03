import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';
import { Profile } from './Profile/Profile';
import user from '../utils/user';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </ThemeProvider>
  );
};
