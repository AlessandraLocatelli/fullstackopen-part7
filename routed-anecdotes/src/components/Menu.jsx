const Menu = () => {
    const padding = {
      paddingRight: 5
    }
  
    return (
    
        <div>
           <div>
        <a href='/' style={padding}>anecdotes</a>
        <a href='/create' style={padding}>create new</a>
        <a href='/about' style={padding}>about</a>
      </div>
       </div>
      
    )
  }

  export default Menu 