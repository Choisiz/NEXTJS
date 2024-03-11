import { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
const { Meta } = Card;

const ButtonWrapper = styled(Button)`
  margin-top: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLoginOut = useCallback(() => {
    //setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          hello
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="follow">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Meta avatar={<Avatar>프로필</Avatar>} title="Choisiz" />
      <ButtonWrapper onClick={onLoginOut}>로그아웃</ButtonWrapper>
    </Card>
  );
};

export default UserProfile;
