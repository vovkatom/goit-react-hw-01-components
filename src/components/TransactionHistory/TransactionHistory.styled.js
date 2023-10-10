import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 600px;
  border: 1px solid black;
`;

export const TableHead = styled.thead`
  background-color: blue;
  text-transform: uppercase;
  color: #fff;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: green;
    color: #fff;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid black;
`;
