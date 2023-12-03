import { useMutation, useQueryClient } from '@tanstack/react-query'
import {createBlog} from '../services/requests'
import MessageContext from "../MessageContext"
import {useContext} from "react"


const BlogForm = () => {

  const [message, messageDispatch] = useContext(MessageContext)
   
  const queryClient = useQueryClient()

  const newBlogMutation = useMutation (
    {mutationFn: createBlog,
    onSuccess: (newBlog) => {
      const blogs = queryClient.getQueryData(['blogs'])
      queryClient.setQueryData(['blogs'], [...blogs, newBlog])
       messageDispatch({ type: 'SET', payload: `blog ${newBlog.content} has beeen created` })
      setTimeout(() => messageDispatch({ type: 'REMOVE' }), 5000)
    },
    onError: (error) => {
      messageDispatch({type: 'ERROR',payload: error.response.data.error})
     }
    })

   const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.blog.value
    event.target.blog.value = ''
    newBlogMutation.mutate({content, likes: 0})
   } 

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='blog' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm