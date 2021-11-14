import styled from "styled-components";

const Button = ({ color, onClick, children }) => {
  return (
    <ButtonStyled
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  padding: 12px;
  color: ${(props) => props.theme.colors.black};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export default Button;
