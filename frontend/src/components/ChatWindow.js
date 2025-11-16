import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ChatInput from './ChatInput'

function ChatWindow() {
    const [data, setData] = useState([])
    const [question, setQuestion] = useState("")

    const {sessionId} = useParams()

    useEffect(()=>{
        const getSDetails = async ()=>{
            const response = await fetch(`https://chatapp-tusz.onrender.com/api/session/${sessionId}`)
            const details = await response.json()
            setData(details.conversation)
        }
        getSDetails()
    },[sessionId])

    const onClickSearch= async () =>{
        const url = `https://chatapp-tusz.onrender.com/api/session/chat/${sessionId}`
        const options ={
            method : "POST",
            body: JSON.stringify(question)
        }
        const response = await fetch(url, options)
        const ans= response.json()
        console.log(ans)
    }

    const onChangeInput = (e) =>{
        setQuestion(e.target.value)
    }
    console.log(question)

  return (
    <div className=' w-3/4'>
        <ChatInput onChangeInput={onChangeInput}/>
    </div>
  )
}

export default ChatWindow