import React, { FC } from 'react'
import Menu from '../../components/menu'
const WorkSpace: FC = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}
export default WorkSpace
