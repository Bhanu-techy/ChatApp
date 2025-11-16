import {useState} from 'react'
import { useParams } from 'react-router-dom'
import TableResponse from './TableResponse'
import ChatInput from './ChatInput'


function ChatWindow({darkTheme}) {
   
    const [question, setQuestion] = useState("")
    const [response, setResponse] = useState([])
    const [data, setData] = useState({question:"", answer:""})

    const {sessionId} = useParams()

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
        
        setData({question:data[0].question, answer : data[0].answer})
        setResponse(data[0].tabluarResponse)
        setQuestion("")
    }

    const onChangeInput = (e) =>{
        setQuestion(e.target.value)
    }


  return (
    <div className='w-3/4 h-full flex flex-col justify-between items-center p-5'>
        {response && 
        <div className='h-1/2 w-[90%] mb-auto flex flex-col justify-around'>
            <div className='m-2'>
            <h2 className='text-[28px]'>{data.question}</h2>
            <p>{data.answer}</p>
            </div>
            <div className={`${darkTheme && 'text-gray-900'}`}>
            <TableResponse response={response}/>
            </div>
        </div>
        }
        <ChatInput onChangeInput={onChangeInput} hideh1={response.length>0 ?true : false} value={question} onClickSearch={onClickSearch}/>
    </div>
  )
}

export default ChatWindow