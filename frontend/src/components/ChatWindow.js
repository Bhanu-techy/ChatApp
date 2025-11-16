import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ChatInput from './ChatInput'

function ChatWindow() {
   
    const [question, setQuestion] = useState("")
    const [response, setResponse] = useState("")

    const {sessionId} = useParams()

    /*useEffect(()=>{
        const getSDetails = async ()=>{
            const response = await fetch(`https://chatapp-tusz.onrender.com/api/session/${sessionId}`)
            const details = await response.json()
            setData(details.conversation)
        }
        getSDetails()
    },[sessionId])
    */

    const onClickSearch= async () =>{
        const url = `https://chatapp-tusz.onrender.com/api/chat/${sessionId}`
        const body = {question:question}
        const options = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body),
        }
        const response = await fetch(url, options)
        const  data= await response.json()

        setResponse(data[0])
        setQuestion("")
    }

    const onChangeInput = (e) =>{
        setQuestion(e.target.value)
    }
    console.log(response)

  return (
    <div className='w-3/4 h-full flex flex-col justify-center items-center p-5'>
        {response && 
        <div className='h-1/2 w-[90%] mb-auto'>
            <table className=" bg-white border border-gray-300">
        <thead>
            <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Content</th>
            <th className="py-2 px-4 border">Answer</th>
            </tr>
        </thead>
        <tbody>
          <tr >
            <td className="py-2 px-4 border">{response.question}</td>
            <td className="py-2 px-4 border">{response.answer}</td>
          </tr>
        </tbody>
        </table>
        </div>  
        }
        <ChatInput onChangeInput={onChangeInput} value={question} onClickSearch={onClickSearch}/>
    </div>
  )
}

export default ChatWindow