

import { useNavigate } from 'react-router-dom'
import {useField} from '../hooks'

const CreateNew = (props) => {
    

    const navigate = useNavigate()
    const {reset: resetContent, ...content} = useField('text')
    const {reset: resetAuthor, ...author} = useField('text')
    const {reset: resetInfo, ...info} = useField('text')

      const addNew = (e) => {
        e.preventDefault()
       
        const anecdote = {
          content: content.value,
          author: author.value,
          info: info.value,
          votes: 0,
          id: Math.round(Math.random() * 10000),
        }
      
        props.setAnecdotes(props.anecdotes.concat(anecdote))
        navigate('/')
        props.setNotification(`A new anecdote ${anecdote.content} created!`)
        setTimeout(() => props.setNotification(null), 5000)
      }
    
     const reset = (e) => {
      e.preventDefault();
      resetContent(),
      resetAuthor(),
      resetInfo()
    }


  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form>
          <div>
            content
            <input {...content}/>
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...info} />
          </div>
          <button onClick={addNew}>create</button>
          <button onClick={reset}>reset</button>
        </form>
      </div>
    )
  
  }

  export default CreateNew