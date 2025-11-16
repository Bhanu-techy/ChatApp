import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    const [sessions, setSessions] = useState([])

    useEffect(()=>{
        const getSesssions = async () =>{
            const response = await fetch("https://chatapp-tusz.onrender.com/api/sessions")
            const data = await response.json()
            setSessions(data)
        }
        getSesssions()
    },[])

  return (
    <div className='w-1/4 bg-gray-300 h-full flex flex-col h-full'>
        <Link to="/">
        <button className='border border-solid border-black h-[30px] rounded text-center w-[90%] m-1'>New chat</button>
        </Link>
        <ul className='flex flex-col justify-center items-cetnter w-full p-1 self-center mt-auto mb-auto'>
            {sessions.map(each => (
                <Link key={each.id} to={`/chat/${each.id}`} className='m-1 w-[90%]'>
                <li key={each.id} className='border border-solid border-black h-[30px] rounded text-center'>{each.title}</li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar