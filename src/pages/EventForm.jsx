export default function EventForm(){
  return (
    <form className="max-w-xl space-y-3">
      <h1 className="text-2xl font-bold">Create / Edit Event</h1>
      <label className="block">
        <span className="block text-sm">Title</span>
        <input className="border rounded-md px-3 py-2 w-full" required/>
      </label>
      <label className="block">
        <span className="block text-sm">Venue</span>
        <select className="border rounded-md px-3 py-2 w-full" required>
          <option>Choose a venue</option>
        </select>
      </label>
      <label className="block">
        <span className="block text-sm">Date & Time</span>
        <input type="datetime-local" className="border rounded-md px-3 py-2 w-full" required/>
      </label>
      <label className="block">
        <span className="block text-sm">Description</span>
        <textarea className="border rounded-md px-3 py-2 w-full" rows="4"/>
      </label>
      <div className="flex gap-2">
        <button className="border rounded-md px-3 py-2">Save</button>
        <button type="button" className="border rounded-md px-3 py-2">Cancel</button>
      </div>
    </form>
  )
}
