import styled from 'styled-components';
import { CircularProgress } from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/hardware/keyboard-return';

export const styles = {
  registerButton: {
    marginTop: '16px',
  },
};
export const SubLoader = styled(CircularProgress)`
  opacity: ${({ active }) => active ? '1' : '0'};
  transition: all .5s ease;
  margin-top: 28px;
`;
export const Logout = styled.div`
  position: absolute;
  bottom: 2%;
  right: 2%;
  font-size: 12px;
  font-family: Avenir-Light;
  cursor: pointer;
`;
export const Submit = styled(CloseIcon)`
  right: 13px;
  top: 8px;
  vertical-align: middle;
  position: relative;
  transition: all .5 ease;
  opacity: ${({ active }) => active ? '0.25' : '0'};
`;
export const InputContainer = styled.div`
  width: 100%;
  display: inline-flex;
`;
export const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
export const Empty = styled.span`
  display: block;
  text-align: center;
  font-size: 12px;
  padding: 8px;
  color: #dcdcdc;
  font-family: Avenir-Light;
`;
export const SearchBar = styled.div`
  background: white;
  max-width: 430px;
  width: 100%;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  flex-flow: column;
  justify-content: center;
  padding-top: 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  height: 36px;
  padding: 0 16px;
  width: 100%;
  margin-bottom: 16px;
  font-size: 26px;
  font-family: Avenir-Light;
  outline: none;
  vertical-align: middle;
  align-items: center;
`;
export const List = styled.div`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #f5f5f5;
`;
export const Add = styled.div`
  font-size: 12px;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-left: 8px;
  color: green;
  text-align: center;
  cursor: pointer;
  border-radius: 100%;
`;
export const Tasks = styled.div`
  width: 100%;
`;
export const Items = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 36px;
`;
export const Signs = styled.div`
  display: inline-flex;
`;
export const Delete = styled.div`
  font-size: 12px;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-left: 8px;
  margin-right: 8px;
  color: #e0acab;
  text-align: center;
  cursor: pointer;
  border-radius: 100%;
`;
export const Item = styled.div`
  margin: 0 8px;
  font-size: 12px;
  border-radius: 3px;
  padding: 0 8px;
  font-family: Avenir-Light;
  cursor: pointer;
  border: ${({ selected }) => selected ? '1px solid #af2f2f66' : 'unset'};
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
export const Labels = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  padding-right: 24px;
  transition: all .5s ease;
  height: ${({ visible }) => visible ? 'unset' : '0'};
  opacity: ${({ visible }) => visible ? '1' : '0'};
`;
export const LabelItem = styled.div`
  font-family: Avenir;
  font-size: 16px;
  width: 25%;
  text-align: ${({ align }) => align || 'center'};
`;
export const Icon = styled.img`
  object-fit: cover;
  max-width: 48px;
  opacity: 0.30;
`;
export const Results = styled.div`
  margin-top: 32px;
  max-width: 430px;
  width: 100%;
  padding: 8px;
  transition: all .5s ease;
  opacity: ${({ visible }) => visible ? '1' : '0'};
  border-radius: 3px;
  color: #6f6f6f;
  font-size: 13px;
  text-align: right;
`;
