import React, { useCallback } from 'react'
import { Redirect } from 'react-router-dom'
import { logOutApi, onLogOutRequest } from '../../apis/authApi'
import { ListWrapper, MenuBar, MenuList } from './styles'

function Menu() {
  const onLogOut = useCallback(() => {
    onLogOutRequest()
    return <Redirect to="/login" />
  }, [])

  return (
    <MenuBar>
      <header>메뉴</header>
      <ListWrapper>
        <MenuList>
          <span>내가 생성한 과제</span>
        </MenuList>
        <MenuList>
          <span>과제 제출 확인</span>
        </MenuList>
        <MenuList>
          <span onClick={onLogOut}>로그아웃</span>
        </MenuList>
      </ListWrapper>
    </MenuBar>
  )
}
export default Menu
