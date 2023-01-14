import styled from 'styled-components';

export const DataContact = styled.p`
  font-size: 30px;
  margin: 0 30px 0 0;
`;

export const BtnDelete = styled.button`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: inline-block;
  padding: 10px 32px;
  color: black;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 24px;
  font-weight: 700;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;
