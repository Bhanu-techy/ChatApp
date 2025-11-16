import ChatInput from './ChatInput'

function HomePage({darkTheme}) {
  return (
    <div className={`w-3/4 h-[90vh] flex justify-center items-center `}>
      <ChatInput hideh1={false}/>
    </div>
  )
}

export default HomePage