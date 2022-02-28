import { Form, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import useInput from '../../hooks/useInput'
import { Label } from '../LogIn/styles'
function Enroll() {
  const [title, setTitle] = useInput('')
  const [content, setContent] = useInput('')
  const onSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])

  return (
    <div>
      <Form>
        <Label>
          <Input value={title} type="text" placeholder="제목을 입력하세요" />
        </Label>
        <Label>
          <Input value={content} type="text" placeholder="내용을 입력하세요" />
        </Label>
      </Form>
    </div>
  )
}
export default Enroll
