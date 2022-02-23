import React, { useCallback, useState } from 'react'
import { Header, Form, Label, Input, LinkContainer, Button, Error } from './styles'
import { Redirect } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { getMyInfo, loginRequest } from '../../apis/authApi'
import useAuth from '../../hooks/useAuth'
import { useQuery } from 'react-query'
import axios from 'axios'
import { access } from 'fs'

function LogIn() {
  // const { isSuccess, isAuthenticated }: any = useAuth()
  const { isError, isSuccess, data, refetch } = useQuery('getMyInfo', getMyInfo, {
    enabled: false,
  })
  const [eduNumber, onChangeEduNumber] = useInput('')
  const [password, onChangePassword] = useInput('')

  if (isSuccess && data) {
    return <Redirect to="/workspace" />
  }
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        const res = await loginRequest({ no: eduNumber, password })
        axios.defaults.headers.common['x-access-token'] = res.data.data.accessToken
        localStorage.setItem('accessToken', res.data.data.accessToken)
        localStorage.setItem('refreshToken', res.data.data.refreshToken)
      } catch (err) {
        alert('로그인에 실패하였습니다.')
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
