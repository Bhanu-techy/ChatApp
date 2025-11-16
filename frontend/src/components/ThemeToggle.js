
function ThemeToggle({onChangeTheme, darkTheme}) {
  return (
    <nav className={`h-[7vh] bg-gray-200 flex justify-end p-2 w-full ${darkTheme && "bg-gray-600 text-white"}`}>
        <button className={`bg-gray-400 w-[100px] rounded ${darkTheme && "bg-gary-100"}`} onClick={onChangeTheme}>{!darkTheme ? 'DarkTheme' : 'LightTheme'}</button>
      </nav>
  )
}

export default ThemeToggle