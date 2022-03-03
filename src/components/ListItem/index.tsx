import { Avatar, List } from 'antd'
import React from 'react'

function ListItem(item: any) {
  return (
    <List.Item key={item._id}>
      <List.Item.Meta
        avatar={<Avatar src={item.name[0]} />}
        title={<a href={item.userInfo}>{item.name.last}</a>}
        description={item.no}
      />
      <div>{item.content}</div>
    </List.Item>
  )
}

export default ListItem
