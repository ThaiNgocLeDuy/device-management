//react-router-dom
import { useParams, Link } from "react-router-dom";
//styled component
import styled from "styled-components";
//redux
import { useSelector } from "react-redux";
import { selectDevicesList } from "reducers/DevicesReducer";
//antd
import { Tabs, List, Table } from "antd";
const { TabPane } = Tabs;

const DetailPage = () => {
  const { id } = useParams();
  const devices = useSelector(selectDevicesList);
  const device = devices.find((x) => x.id === id);

  //data for tab1-datasource
  const device_data = [device.name, device.desc];

  //data for tab2
  const tableSource = [
    {
      key: device.id,
      price: "$" + device.price,
      quantity: device.quantity,
    },
  ];

  const columns = [
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Description" key="1">
            <List
              dataSource={device_data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </TabPane>
          <TabPane tab="Information" key="2">
            <Table
              dataSource={tableSource}
              columns={columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab={<Link to="/">Back</Link>} key="3"></TabPane>
        </Tabs>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.fontSizes.xxxl};
`;

const Content = styled.div`
  width: 50%;
`;

export default DetailPage;
