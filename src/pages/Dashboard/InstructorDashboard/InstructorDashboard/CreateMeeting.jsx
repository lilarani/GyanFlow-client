import { useNavigate } from "react-router"

export default function CreateMeeting() {
  let navigate = useNavigate()
  let createMeeting = () => {
      console.log('clicked')
      navigate('/join-meeting')
  }
  return (
      <div>
          <button className="text-blue-200 uppercase font-bold px-5 py-1 border rounded-full cursor-pointer border-black w-fit mx-auto my-3" onClick={createMeeting}>Create meeting</button>
      </div>
  )
}