import styled from 'styled-components';

const Widget = styled.div`
  margin: 24px 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: radius 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  input {
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 5px 16px;
    color: #f9f9ff;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      outline: none;
    }
    &::placeholder {
      color: #f9f9ff;
    }
  }
  button {
    margin-top: 24px;
    font-size: 14px;
    width: 100%;
    line-height: 24px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    transition: all ease 0.3s;
    cursor: pointer;
    text-transform: uppercase;
    padding: 5px 10px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

export default Widget;
