import { FiSearch } from "react-icons/fi"

function ChatInput({onChangeInput, onClickSearch, value}) {

  return (
    <div className='flex flex-col justify-around items-center w-full  h-[170px]'>
         <h1 className='text-4xl font-poppins'>What can I help with?</h1>
        <div className="flex bg-gray-200 w-1/2 h-[50px] w-3/4 rounded-lg items-center">
            <input type='search' placeholder='Ask me anything' value={value} onChange={onChangeInput} className='w-[90%] bg-transparent p-2 border-none focus:outline-none'/>
            <button className="bg-tranparent" onClick={onClickSearch}>
                <FiSearch size={20}/>
            </button>
        </div>
    </div>
  )
}

export default ChatInput