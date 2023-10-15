import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendWrap } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrap className="friend-list">
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </FriendWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};