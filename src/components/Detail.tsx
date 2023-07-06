import type { ReactNode } from "react"

export function Detail({ name, value, alias,}: { name: ReactNode, alias: ReactNode, value: ReactNode | undefined }) {
  return value ? (
    <>
      <div className="p-1 rounded mr-2 text-slate-700 italic flex flex-col">
        <div className="mx-auto">{name}</div>
        <div className="text-sm mx-auto uppercase">{alias}</div>
      </div>
      <div className="my-auto">{value}</div>
    </>
  ) : null
}

export function LongDetail({ name, value, alias,}: { name: ReactNode, alias: ReactNode, value: ReactNode | undefined }) {
  return value ? (
    <>
      <div className="p-1 rounded mr-2 text-slate-700 italic flex flex-col col-start-1 col-end-4">
        <div className="mx-auto">{name}</div>
        <div className="text-base mx-auto uppercase">{alias}</div>
      </div>
      <div className="my-auto col-start-4 col-end-5">{value}</div>
    </>
  ) : null
}

export function VerticleDetail({ name, value, alias }: { name: ReactNode, alias: ReactNode, value: ReactNode | undefined }) {
  return value ? (
    <div className="flex flex-col col-span-full">
      <div className="p-1 rounded mr-2 text-slate-700 italic flex">
        <div className="mr-2 my-auto">{name}</div>
        <div className="text-base my-auto uppercase">{alias}</div>: 
      </div>
      <div className="ml-1">{value}</div>
    </div>
  ) : null
}