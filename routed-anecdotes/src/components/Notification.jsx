const Notification = ({ notification }) => {

    const style ={
  
      border: 'solid',
      padding: 10,
      margin: 10
      
      }
  
    if (notification === null) return null
  
    return (
      <div style={style}>
        {notification}
      </div>
    )
  
  }

  export default Notification