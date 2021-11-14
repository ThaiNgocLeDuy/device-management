import React, { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { selectDevicesList } from "reducers/DevicesReducer";
//action
import { devicesActions } from "reducers/DevicesReducer";
//react-router-dom
import { Link, useHistory, useParams } from "react-router-dom";
//form
import { Field, Form, Formik } from "formik";
//validate
import { isRequired } from "app/components/ValidateFields";
//styled component
import styled from "styled-components";
import Button from "app/components/Button";
import { ToastAlert } from "services/alert.service";

const Update = () => {
  //location
  const location = useHistory();
  const { id } = useParams();
  //data
  const dispatch = useDispatch();

  const devices = useSelector(selectDevicesList);
  const device = devices.find((x) => x.id === id);

  const initialValues = {
    name: "",
    price: 0,
    quantity: 0,
    desc: "",
  };

  //add
  const [name, setName] = useState(device.name);
  const [price, setPrice] = useState(device.price);
  const [quantity, setQuantity] = useState(device.quantity);
  const [desc, setDesc] = useState(device.desc);

  const handleEditDevice = () => {
    const formValues = {
      id: device.id,
      _id: device._id,
      name,
      price,
      quantity,
      desc,
      status: device.status,
    };
    if (formValues) {
      dispatch(devicesActions.updateDevice(formValues));
    }
    ToastAlert.success("This device has been updated", { autoClose: 2000 });
    location.push("/");
  };

  return (
    <Wrapper>
      <h1>Update Device</h1>
      <Formik initialValues={initialValues} onSubmit={handleEditDevice}>
        {({ errors, touched }) => (
          <FormikStyled>
            <label htmlFor="name">Product Name</label>
            <FieldStyled
              name="name"
              autoComplete="off"
              placeholder="Product Name"
              validate={isRequired}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && touched.name && (
              <div style={{ color: "red" }}>{errors.name}</div>
            )}
            <label htmlFor="price">Price</label>
            <FieldStyled
              name="price"
              autoComplete="off"
              placeholder="Product Price"
              type="number"
              validate={isRequired}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && touched.price && (
              <div style={{ color: "red" }}>{errors.price}</div>
            )}
            <label htmlFor="quantity">Quantity</label>
            <FieldStyled
              name="quantity"
              autoComplete="off"
              placeholder="Quantity"
              type="number"
              validate={isRequired}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            {errors.quantity && touched.quantity && (
              <div style={{ color: "red" }}>{errors.quantity}</div>
            )}
            <label htmlFor="desc">Description</label>
            <FieldStyled
              name="desc"
              autoComplete="off"
              placeholder="Product Description"
              validate={isRequired}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            {errors.desc && touched.desc && (
              <div style={{ color: "red" }}>{errors.desc}</div>
            )}
            <ButtonGroup>
              <Button type="submit" color="#28A745">
                Update Device
              </Button>
              <Link to="/">
                <Button type="button">Cancel</Button>
              </Link>
            </ButtonGroup>
          </FormikStyled>
        )}
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }
`;

const FormikStyled = styled(Form)`
  width: 800px;
  margin: 30px auto;
  padding: 12px;
  border: 1px solid black;
  border-radius: 8px;
`;

const FieldStyled = styled(Field)`
  width: 100%;
  margin: 10px 0px;
  padding: 12px;
  border: none;
  border-bottom: 1px solid black;
`;

const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Update;
