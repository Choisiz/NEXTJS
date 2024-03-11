import { Form, Input } from "antd";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useinput from "../hooks/useinput";
import { loginAction } from "../reducers";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useinput("");
  const [password, onChangePassword] = useinput("");

  const onSubmitForm = useCallback((e) => {
    //setIsLoggedIn(true);
    dispatch(loginAction({ id, password }));
  }, []);

  //const buttonWrapper = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <button type="primary" htmlType="submit" loading={false}>
          로그인
        </button>
        <Link href="/sign">회원가입</Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
