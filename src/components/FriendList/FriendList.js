import PropTypes from 'prop-types';
import {
  FriendWrap,
  FriendItem,
  FriendIcon,
  FriendName,
  UserStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrap>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem className="item" key={id}>
          <UserStatus className="status" isOnline={isOnline}></UserStatus>
          <FriendIcon className="avatar" src={avatar} alt={name}></FriendIcon>
          <FriendName className="name">{name}</FriendName>
        </FriendItem>
      ))}
    </FriendWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
