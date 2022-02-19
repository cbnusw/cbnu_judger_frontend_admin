import React from 'react'
import { ListWrapper, MenuBar, MenuList } from './styles'

function Menu() {
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
          <span>로그아웃</span>
        </MenuList>
      </ListWrapper>
    </MenuBar>
  )
}
export default Menu
