import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
const { Search } = Input;
const { Item } = Menu;
const SearchInput = styled(Search)`
  vertical-align: "middle";
  width: "200px";
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Item>
          <Link href="/">메인</Link>
        </Item>
        <Item>
          <Link href="/profile">프로필</Link>
        </Item>
        <Item>
          <SearchInput enterButton />
        </Item>
        <Item>
          <Link href="/sign">회원가입</Link>
        </Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} sm={6} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} sm={6} md={12}>
          {children}
        </Col>
        <Col xs={24} sm={6} md={6}>
          <a
            href="https://www.naver.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            네이버로 가기
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
