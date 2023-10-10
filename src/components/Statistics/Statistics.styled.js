import styled from 'styled-components';

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export const StatSection = styled.section`
  width: 400px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: white;
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
  padding: 24px;
  color: black;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  gap: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px;
  background-color: ${props => generateRandomColor()};
`;

export const StatNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
