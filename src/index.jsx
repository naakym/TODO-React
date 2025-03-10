import { createRoot } from 'react-dom/client'
import { StrictMode } from "react"

import { Todo } from './Todo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>
)
