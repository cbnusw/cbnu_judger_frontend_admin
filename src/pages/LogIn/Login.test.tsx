import { render, screen } from '@testing-library/react'
import LogIn from '.'
import { testUserInfo } from '../../config/config'
describe('login', () => {
  test('education number field should have label', () => {
    const component = render(<LogIn />)
  })
})
