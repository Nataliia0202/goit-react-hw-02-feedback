import styled from 'styled-components';


export const FeedbackOptionsList = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin-bottom: 40 px;
  margin-top: 20px;
`;

export const FeedBackButton = styled.button`
  padding: 8px;
  border: 2px solid;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #6e6373;
  background-color: #d9ccde;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.15);
    color: #f8f5fa;
    background-color: #decea9;
  }
`;