import styled from 'styled-components';

export const TaskContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  padding-right: 24px;
`;

export const Remove = styled.div`
  display: inline-flex;
  font-size: 16px;
  font-family: Avenir-Light;
  color: #cecece;
  transition: all .25s ease;
  margin-left: 8px;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin-right: -16px;
  opacity: ${({ hover }) => hover ? '1' : '0'};
  &:hover {
    color: red;
  }
`;
export const Input = styled.input`
  font-size: 16px;
  width: 25%;
  margin-right: 6px;
  transition: all .25s ease;
  font-family: Avenir-Light;
  color: black;
  outline: none;
  cursor: ${({ readonly }) => readonly ? 'pointer' : 'text'};
  background: ${({ readonly }) => readonly ? 'none' : '#f1f1f1'};
  text-align: ${({ align }) => align || 'center'};
`;
export const Text = styled.div`
  font-size: 16px;
  width: 25%;
  transition: all .25s ease;
  font-family: Avenir-Light;
  color: black;
  text-align: ${({ align }) => align || 'center'};
`;
