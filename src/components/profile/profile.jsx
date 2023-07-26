import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  HeadText,
  StatList,
  StatName,
  StatData,
  StatInfo,
} from './profile.styled';
export const CreateProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <HeadText>{username}</HeadText>
        <HeadText>@{tag}</HeadText>
        <HeadText>{location}</HeadText>
      </Description>

      <StatList>
        <StatData>
          <StatName>Followers</StatName>
          <StatInfo>{stats.followers}</StatInfo>
        </StatData>
        <StatData>
          <StatName>Views</StatName>
          <StatInfo>{stats.views}</StatInfo>
        </StatData>
        <StatData>
          <StatName>Likes</StatName>
          <StatInfo>{stats.likes}</StatInfo>
        </StatData>
      </StatList>
    </Profile>
  );
};
CreateProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
