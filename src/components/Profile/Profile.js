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

export const Profile = ({ user }) => {
  return (
    <Section className="profile">
      <UserWrapper className="description">
        <UserAvatar className="avatar" src={user.avatar} alt={user.username}></UserAvatar>
        <Username className="name">{user.username}</Username>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </UserWrapper>
      <StatisticList className="stats">
        <StatisticItem>
          <span className="label">Followers</span>
          <StatNumber className="quantity">{user.stats.followers}</StatNumber>
        </StatisticItem>
        <StatisticItem>
          <span className="label">Views</span>
          <StatNumber className="quantity">{user.stats.views}</StatNumber>
        </StatisticItem>
        <StatisticItem>
          <span className="label">Likes</span>
          <StatNumber className="quantity">{user.stats.likes}</StatNumber>
        </StatisticItem>
      </StatisticList>
      console.log('object :>> ', object); // clo
      console.log(object); //clg
    </Section>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  }),
};
