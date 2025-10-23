import {useState} from "react"

export default function AllEvents(){
  const [q,setQ]=useState("")
  return (
    <section className="space-y-4">
      <div className="flex gap-2">
        <input className="border rounded-md px-3 py-2 w-full" placeholder="Search events..." value={q} onChange={e=>setQ(e.target.value)}/>
        <button className="border rounded-md px-3 py-2">Create</button>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        <li className="p-4 border rounded-lg">Event card placeholder</li>
      </ul>
    </section>
  )
}
