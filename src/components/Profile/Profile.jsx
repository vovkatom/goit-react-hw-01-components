import PropTypes from 'prop-types';
import {
  Section,
  UserWrapper,
  UserAvatar,
  Username,
  StatisticList,
  StatisticItem,
  StatNumber,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Section className="profile">
      <UserWrapper className="description">
        <UserAvatar className="avatar" src={avatar} alt={username}></UserAvatar>
        <Username className="name">{username}</Username>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </UserWrapper>
      <StatisticList className="stats">
        <StatisticItem>
          <span className="label">Followers</span>
          <StatNumber className="quantity">{stats.followers}</StatNumber>
        </StatisticItem>
        <StatisticItem>
          <span className="label">Views</span>
          <StatNumber className="quantity">{stats.views}</StatNumber>
        </StatisticItem>
        <StatisticItem>
          <span className="label">Likes</span>
          <StatNumber className="quantity">{stats.likes}</StatNumber>
        </StatisticItem>
      </StatisticList>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};