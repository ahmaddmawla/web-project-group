export default function Login(){
  return (
    <form className="max-w-md space-y-3">
      <h1 className="text-2xl font-bold">Login</h1>
      <label className="block">
        <span className="block text-sm">Email</span>
        <input type="email" className="border rounded-md px-3 py-2 w-full" required/>
      </label>
      <label className="block">
        <span className="block text-sm">Password</span>
        <input type="password" className="border rounded-md px-3 py-2 w-full" required minLength={6}/>
      </label>
      <button className="border rounded-md px-3 py-2">Sign in</button>
    </form>
  )
}
