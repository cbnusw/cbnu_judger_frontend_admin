import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
global.renderWithRouter = (renderComponent, route) => {
  const history = createMemoryHistory()
  if (route) {
    history.push(route)
  }

  return {
    ...render(<Router history={history}></Router>),
    history,
  }
}
