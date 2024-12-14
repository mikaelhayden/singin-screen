import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Signin } from './screens/signin'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Signin />
  </StrictMode>
)
