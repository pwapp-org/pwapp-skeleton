import {
  React,
  Routes, Route,
  HelmetProvider
} from '@vendors/react'

import { Home } from '@pkgs/home'

export const App = ({ helmetContext = {} }) =>
  (<HelmetProvider context={helmetContext}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </HelmetProvider>)
