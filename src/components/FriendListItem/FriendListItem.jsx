import PropTypes from 'prop-types';
import { FriendItem, Status, FriendIcon, FriendName } from './FriendListItem.styled';
import { TiHeartHalfOutline } from 'react-icons/ti';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendItem className="item">
      <Status isOnline={isOnline} className="status">
        <TiHeartHalfOutline size={30} />  
      </Status>
      <FriendIcon className="avatar" src={avatar} alt="User avatar"/>
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
