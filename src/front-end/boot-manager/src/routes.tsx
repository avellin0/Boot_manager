import { createBrowserRouter } from "react-router-dom";
import {Default} from './layout/Default'
import {CreateProductsPage} from './components/CreateProductsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default/>,
    children: [
      {
        path: '/products',
        element: <CreateProductsPage/>
      }
    ]
  }
 
])

