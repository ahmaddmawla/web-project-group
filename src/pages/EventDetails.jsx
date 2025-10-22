import {useParams} from "react-router-dom"
export default function EventDetails(){
  const {id}=useParams()
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold">Event #{id}</h1>
      <p className="opacity-80">Details, venue, description, attendees…</p>
    </section>
  )
}
