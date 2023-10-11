import styled from 'styled-components';

export const FriendWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 400px;
  gap: 12px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 250px;
  padding: 24px;
  gap: 16px;
`;

export const FriendIcon = styled.img`
  width: 60px;
  height: 60px;
  padding: 8px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const UserStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;