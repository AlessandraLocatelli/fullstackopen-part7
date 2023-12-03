import { useParams } from "react-router-dom"


const Anecdote = ({anecdotes}) => {

    const id = useParams().id
    const anecdote = anecdotes.find(a => a.id === Number(id))
  
    return(
    <div>
    <h2>{anecdote.content}</h2>
    <p>by {anecdote.author}</p>
    <p>votes: {anecdote.votes}</p>
    </div>
    )
  
  }
  
  export default Anecdote