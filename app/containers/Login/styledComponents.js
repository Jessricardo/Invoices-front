import styled from 'styled-components';

export const styles = {
  registerButton: {
  },
  registerButton2: {
    marginTop: '8px',
  },
};

export const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.span`
  color: rgba(175, 47, 47, 0.67);
  font-size: 42px;
  font-family: Avenir-Light;
  opacity: 0.2;
  margin-bottom: 18px;
  margin-top: -18px;
`;

export const Alert = styled.span`
  margin-top: 8px;
  font-size: 12px;
  transition: all .25s ease;
  color: red;
  opacity: ${({ active }) => active ? '1' : '0'};
`;
export const LoginDiv = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 348px;
  background: white;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 26px;
  box-shadow: 0px 3px 6px 0px #cacaca;
`;

export const Icon = styled.img`
  object-fit: cover;
  max-width: 48px;
  opacity: 0.30;
`;
