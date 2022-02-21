import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { Label } from '../LogIn/styles'
function Enroll() {
  const [title, setTitle] = useState('')
  return (
    <div>
      <Form>
        <Label>
          <Input type="text" placeholder="제목을 입력하세요" />
        </Label>
      </Form>
    </div>
  )
}
export default Enroll
