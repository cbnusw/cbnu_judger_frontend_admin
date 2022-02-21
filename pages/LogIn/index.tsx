import React, { useCallback, useEffect } from 'react'
import { Header, Form, Label, Input, LinkContainer, Button, Error } from './styles'
import { Redirect } from 'react-router-dom'
import useInput from '../../src/hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'

import { useQuery } from 'react-query'
import { loginRequest } from '../../apis/authApi'

function LogIn() {
  const { isLoading, isError } = useQuery('login')
  const [eduNumber, onChangeEduNumber] = useInput('')
  const [password, onChangePassword] = useInput('')
  const accessToken = localStorage.getItem('accessToken')
  if (!isError && accessToken) {
    return <Redirect to="/workspace" />
  }
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      try {
        loginRequest({ no: eduNumber, password })
      } catch (err) {
        console.log(err)
      }
    },
    [eduNumber, password]
  )
  return (
    <div id="container">
      <Header>SW JUDGER 관리자 로그인</Header>
      <Form onSubmit={onSubmit}>
        <Label id="edunumber-label">
          <span>학번/교번 또는 아이디</span>
          <div>
            <Input
              type="eduNumber"
              id="eduNumber"
              name="email"
              value={eduNumber}
              onChange={onChangeEduNumber}
              placeholder="충북대 소속의 경우 학번/교번 입력, 그외 아이디 입력"
              required
            />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호 입력"
              required
            />
          </div>
          {isError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <a href="https://sw7up.cbnu.ac.kr/account/join">회원가입 하러가기</a>
      </LinkContainer>
    </div>
  )
}
export default LogIn