import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 64px; */
  flex-direction: ${props => (props.isWrap ? 'column' : 'row')};
  min-height: ${props => (props.isWrap ? '100vh' : '64px')};
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: min-height 250ms linear;
`;

export const Logo = styled.p`
  color: white;
  margin: 0;
  margin-right: ${props => (props.isWrap ? '0' : '20px')};
  margin-bottom: ${props => (props.isWrap ? '20px' : '0')};

  font-size: ${props => (props.isWrap ? '150px' : '50px')};
  transition: all 250ms linear;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const BtnIcon = styled(CiSearch)`
  width: 25px;
  height: 25px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
