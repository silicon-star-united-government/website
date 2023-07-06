import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"

import { DataContext } from "../data"
import { Detail, LongDetail } from "../components/Detail"
import { Logo } from "../components/Logo"

export default function MemberInfo() {
  const { member } = useParams()
  const navigate = useNavigate()
  const datas = useContext(DataContext)
  const data = datas?.find?.(value => value.SSUG昵称 == member)
  useEffect(() => {
    if (datas && !data) navigate("/members/")
  }, [navigate, datas, data])
  return data ? (
    <>
      <div className="gap-2 grid [grid-template-columns:repeat(4,auto)] mt-2">
        <Logo />
        <div className="text-2xl flex flex-col col-start-2 col-end-5">
          <div className="mx-auto">
            其它信息
          </div>
          <div className="mx-auto">
            Other Info
          </div>
        </div>
        <Detail name="昵称" alias="Nickname" value={data.群昵称} />
        <Detail name="地理位置" alias="Location" value={data.地理位置 ? (data.地理位置.province + data.地理位置.city) : undefined} />
        <Detail name="技术方向" alias="Technical Direction" value={data.技术方向} />
        <LongDetail name="最喜欢的编程语言" alias="Preferred Programming Language" value={data.最喜欢的编程语言} />
      </div>
      <Link to=".." relative="path" className="text-slate-700 italic m-1 my-2 hover:text-slate-900 transition-colors print:hidden text-base">
        查看身份证 <span className="text-base uppercase">View Identity card</span>
      </Link>
    </>
  ) : null
}