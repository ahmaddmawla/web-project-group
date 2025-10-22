import {useParams} from "react-router-dom"
export default function VenueDetails(){
  const {id}=useParams()
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold">Venue #{id}</h1>
      <p className="opacity-80">Address, upcoming events…</p>
    </section>
  )
}
