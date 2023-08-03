import { Box } from 'components/Box';
import { Location, Tag, UserAvatar, UserName } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      bg="white"
      mt="4"
      mx="auto"
      width="30%"
      borderRadius="4px"
      boxShadow="0px 0px 7px 0px grey"
    >
      <Box p="15px" display="flex" flexDirection="column" alignItems="center">
        <UserAvatar
          src={
            avatar
              ? avatar
              : 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
          }
          alt="User avatar"
        />

        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>
    </Box>
  );

  //   <div class="profile">
  //     <div class="description">
  //       <img
  //         src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
  //         alt="User avatar"
  //         class="avatar"
  //       />
  //       <p class="name">Petra Marica</p>
  //       <p class="tag">@pmarica</p>
  //       <p class="location">Salvador, Brasil</p>
  //     </div>

  //     <ul class="stats">
  //       <li>
  //         <span class="label">Followers</span>
  //         <span class="quantity">1000</span>
  //       </li>
  //       <li>
  //         <span class="label">Views</span>
  //         <span class="quantity">2000</span>
  //       </li>
  //       <li>
  //         <span class="label">Likes</span>
  //         <span class="quantity">3000</span>
  //       </li>
  //     </ul>
  //   </div>;
};
