import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"

import { DataContext } from "../data"
import { Detail, VerticleDetail } from "../components/Detail"
import { Logo } from "../components/Logo"

export default function Member() {
  const { member } = useParams()
  const navigate = useNavigate()
  const datas = useContext(DataContext)
  const data = datas?.find?.(value => value.SSUG昵称 == member)
  useEffect(() => {
    if (datas && !data) navigate("/members/")
  }, [navigate, datas, data])
  return data ? (
    <>
      {/* <div className="text-3xl p-2 pb-4 mb-3 border-b border-b-slate-400">{data.SSUG昵称}</div> */}
      <div className="gap-2 grid [grid-template-columns:repeat(4,auto)] mt-2">
        <Logo />
        <div className="text-2xl flex flex-col col-start-2 col-end-5">
          <div className="mx-auto">
            身份证
          </div>
          <div className="mx-auto">
            Identity Card
          </div>
        </div>
        <Detail name="昵称" alias="Nickname" value={data.群昵称} />
        <Detail name="性别" alias="Gender" value={data.SSUG社会性别} />
        <Detail name="加入时间" alias="Join Time" value={data.加入年份} />
        {/* <Detail name="星籍" alias="Nationality" value="SSUG" /> */}
        <Detail name="生日" alias="Birthdate" value={data.生日} />
        <VerticleDetail name="居民ID" alias="Resident ID" value={data.居民SSUGID?.toUpperCase?.()} />
      </div>
      <Link to="info" relative="path" className="text-slate-700 italic m-1 my-2 hover:text-slate-900 transition-colors print:hidden text-base">
        查看其它信息 <span className="text-base uppercase">View Other Information</span>
      </Link>
    </>
  ) : null
}