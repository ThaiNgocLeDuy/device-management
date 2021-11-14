//antd
import { Pagination } from "antd";
//component
import Button from "app/components/Button/index";
import SearchBar from "app/components/SearchBar";
import { useEffect, useMemo, useState } from "react";
//icons
import {
  AiFillEdit,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineSelect,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
//react-router-dom
import { Link } from "react-router-dom";
//redux
import { devicesActions, selectDevicesList } from "reducers/DevicesReducer";
import { ToastAlert } from "services/alert.service";
import "react-toastify/dist/ReactToastify.css";
//styled component
import styled from "styled-components";

const DashBoard = () => {
  //dispatch
  const dispatch = useDispatch();
  //selectors
  const devices = useSelector(selectDevicesList);

  //fetch data list
  useEffect(() => {
    dispatch(devicesActions.fetchDevicesList());
  }, [dispatch]);

  // search
  const [searchTerm, setSearchTerm] = useState("");

  // pagination
  const itemPerPage = 5;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  const handlePageChange = (value) => {
    setMinValue((value - 1) * itemPerPage);
    setMaxValue(value * itemPerPage);
  };

  const devicesList = useMemo(() => {
    //remove device
    const handleRemoveDevice = (device) => {
      ToastAlert.success("This device has been removed", { autoClose: 2000 });
      dispatch(devicesActions.removeDevice(device._id));
    };

    //change status
    const handleChangeStatus = (device) => {
      const mapped = devices.find((x) => x._id === device._id);
      ToastAlert.success("Status has been changed", { autoClose: 2000 });
      dispatch(
        devicesActions.updateDevice({ ...mapped, status: !mapped.status })
      );
    };

    return devices
      .filter((value) =>
        searchTerm === ""
          ? value
          : value.name.toLowerCase().includes(searchTerm.toLowerCase())
          ? value
          : null
      )
      .slice(minValue, maxValue)
      .map((device) => (
        <Row key={device.id}>
          <Cell>{device.name}</Cell>
          <Cell>${device.price}</Cell>
          <Cell>{device.quantity}</Cell>
          <Cell>
            {device.status ? (
              <Button
                onClick={() => handleChangeStatus(device)}
                color="#17A2B8"
              >
                Active
              </Button>
            ) : (
              <Button
                onClick={() => handleChangeStatus(device)}
                color="#C21124"
              >
                Deactive
              </Button>
            )}
          </Cell>
          <Cell>
            <Link to={`/devices/${device.id}`}>
              <Button color="#7DC211">
                <AiFillEdit />
              </Button>
            </Link>
            <Button
              onClick={() => handleRemoveDevice(device)}
              color="#C21124"
            >
              <AiFillMinusCircle />
            </Button>
            <Link to={`/device/${device.id}`}>
              <Button color="#FFC107">
                <AiOutlineSelect />
              </Button>
            </Link>
          </Cell>
        </Row>
      ));
  }, [dispatch, devices, minValue, maxValue, searchTerm]);

  return (
    <Wrapper>
      <ActionBar>
        <Link to="/add">
          <Button color="#11c2af">
            <AiFillPlusCircle /> Add New Device
          </Button>
        </Link>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </ActionBar>
      <TableStyled>
        <RowHeader>
          <Cell>Product</Cell>
          <Cell>Price</Cell>
          <Cell>Quantity</Cell>
          <Cell>Status</Cell>
          <Cell>Actions</Cell>
        </RowHeader>
        {devices && devices.length > 0 ? (
          devicesList
        ) : (
          <Row>
            <Cell>No data</Cell>
          </Row>
        )}
      </TableStyled>
      {devices.length > 5 ? (
        <Pagination
          style={{ textAlign: "right", marginRight: 60 }}
          defaultCurrent={1}
          defaultPageSize={itemPerPage}
          total={devices.length}
          onChange={handlePageChange}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  margin: 8px 0;
`;

const TableStyled = styled.div`
  width: 100%;
  display: table;
  margin: 20px auto 20px;
  text-align: center;
`;

const Row = styled.div`
  display: table-row;
  &:nth-of-type(odd) {
    background: ${(props) => props.theme.colors.gray};
  }
`;

const RowHeader = styled.div`
  display: table-row;
  font-weight: ${(props) => props.theme.fontWeights.bolder};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.lightgreen};
`;

const Cell = styled.div`
  display: table-cell;
  padding: 6px 12px;
`;

export default DashBoard;
