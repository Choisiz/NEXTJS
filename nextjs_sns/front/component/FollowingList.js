import { Button, Card, Form, Input, List } from "antd";
import { useMemo } from "react";
import { StopOutlined } from "@ant-design/icons";
import PropsTypes from "prop-types";

const FollowingList = ({ header, data }) => {
  const style = useMemo(
    () => ({
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
    }),
    []
  );

  return (
    <List
      style={style}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowingList.propTypes = {
  header: PropsTypes.string.isRequired,
  data: PropsTypes.array.isRequired,
};

export default FollowingList;
