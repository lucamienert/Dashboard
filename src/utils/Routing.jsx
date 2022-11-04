import { 
  BrowserRouter, 
  Route, 
  Router 
} from 'react-router-dom'

import { 
  HomePage,
  LoginPage,
  ErrorPage
} from '../pages'

const Routing = (children) => {
  return (
    <BrowserRouter>
      {children}
      <Router>
        <Route path='/' index element={<HomePage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routing