import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 15px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 5px 0;
  width: 350px;
`;

export const FriendIcon = styled.img`
  width: 48px;
  height: 48px;
  padding: 8px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
