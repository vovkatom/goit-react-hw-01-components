import styled from 'styled-components';

export const Section = styled.div`
  background-color: #e7ecf2;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.img`
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const StatisticList = styled.ul`
  display: flex;
`;

export const StatisticItem = styled.li`
  // flex-basis: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #f3f6f9;
  gap: 12px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 200px;
`;

export const StatNumber = styled.span`
  font-weight: bold;
  font-size: 24px;
`;
