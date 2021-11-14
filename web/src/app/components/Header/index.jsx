//common button
import Button from "app/components/Button/index";
//react-router
import { Link } from "react-router-dom";
//styled-components
import styled from "styled-components";
//icons
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Title>
          Manage <b>Devices</b>
        </Title>
      </Link>
      <ButtonGroup>
        <Link to="/login">
          <Button color="#17A2B8">
            <AiOutlineUser /> Login
          </Button>
        </Link>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightgreen};
  @media (max-width: 320px) {
    padding: 10px 0 0;
    height: auto;
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 320px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

const ButtonGroup = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 320px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default Header;
