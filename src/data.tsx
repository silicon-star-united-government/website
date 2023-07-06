/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ReactNode, createContext, useEffect, useState } from "react"
import { Base } from "seatable-api"

export const DataContext = createContext<DataType[] | null>(null)

export interface DataType {
  "居民SSUGID"?: string
  "SSUG昵称": string
  "群昵称": string
  "加入年份": number
  "SSUG社会性别"?: string
  "生日"?: string
  "地理位置"?: {
    province: string
    city: string
    district: string
  }
  "技术方向"?: string
  "最喜欢的编程语言"?: string
}

const config = {
  server: "https://cloud.seatable.cn",
  APIToken: "b4524f8d4c73c83ce460a72baa47608e54610918"
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType[] | null>(null)
  useEffect(() => {
    (async () => {
      const base = new Base(config)
      window.base =base
      await base.auth()
      const rows = await base.listRows('Table1')
      console.log(rows)
      setData(rows)
    })()
  }, [])
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}
