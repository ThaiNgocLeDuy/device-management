import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </Title>
      <P>Page not found.</P>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.superLarge};
`;

const P = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
`;

export default NotFoundPage;
