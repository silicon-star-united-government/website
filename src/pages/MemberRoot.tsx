import { Outlet } from "react-router-dom"

export default function MemberRoot() {
  return (
    <div className="m-auto flex flex-col p-4 bg-white rounded-lg text-xl">
      <Outlet />
    </div>
  )
}