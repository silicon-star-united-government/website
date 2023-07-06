import { Link } from "react-router-dom"
import { useContext } from "react"

import { DataContext } from "../data"

export default function Home() {
  const data = useContext(DataContext)
  console.log(data)
  return (
    <div>
      <div className="text-2xl mb-3 mt-1">
        成员清单 <span className="italic text-xl">Member List</span>
      </div>
      <ul className="space-y-2 columns-2">
        {data?.map?.(i => (
          <li key={i.SSUG昵称} className="list-none text-xl text-slate-700 hover:text-slate-900 transition-colors">
            <Link to={`/members/${i.SSUG昵称}/`}>{i.SSUG昵称}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}