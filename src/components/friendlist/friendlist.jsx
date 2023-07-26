import PropTypes from 'prop-types';
import {
  List,
  FrienItem,
  FriendName,
  FriendAvatar,
  FriendStatus,
} from './friendsList.styled.jsx';
export const CreateFriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FrienItem key={id}>
          <FriendAvatar src={avatar} alt="User avatar" width={48} />
          <FriendName>{name}</FriendName>
          <FriendStatus status={isOnline}></FriendStatus>
        </FrienItem>
      ))}
    </List>
  );
};
CreateFriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
// ?yt hasFormSubmit,jnftn cnhfybwf
