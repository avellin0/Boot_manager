import { Outlet } from "react-router-dom";
import {App} from '../App.tsx'

export function Default(){
  return (
    <div className="layout">
      <App/>

      <div className="content">
          <Outlet/>
      </div>
    </div>
    )
} 