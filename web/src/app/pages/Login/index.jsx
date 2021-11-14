import React from "react";
import Button from "app/components/Button";
//style component
import styled from "styled-components";
//formik
import { Form, Field, Formik } from "formik";
//validate
import { validateEmail } from "app/components/ValidateFields";
import { validatePassword } from "app/components/ValidateFields";
//icons
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Man, Avatar, Wave } from "app/components/Icons";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Wrapper>
      <img className="wave" src={Wave} alt="Wave" />
      <Container>
        <ImgWrapper>
          <img className="man" src={Man} alt="Man" />
        </ImgWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={(value) => console.log(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <img className="avatar" src={Avatar} alt="Avatar" />
              <h2>Welcome</h2>
              <div className="input-group">
                <AiOutlineMail />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
              <div className="input-group">
                <AiFillLock />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <Button color="#11c2af" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 400px;
  margin: 80px 0;
  position: relative;

  .wave {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: -1;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;

  form {
    width: 360px;
    height: 100%;
    margin-top: 30px;

    img {
      width: 100px;
      height: 100px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    h2 {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 40px;
    }

    .input-group {
      position: relative;
      margin: 10px 0;

      svg {
        position: absolute;
        left: 0;
        top: 15px;
      }

      input {
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
        padding: 10px 40px;
      }

      .error {
        color: ${(props) => props.theme.colors.red};
      }
    }
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  right: 300px;
  bottom: 0;
  z-index: -2;

  img {
    width: 200px;
    height: 100%;
  }
`;

export default LoginPage;
