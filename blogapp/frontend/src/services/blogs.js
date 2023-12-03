import axios from 'axios'
import storageService from '../services/storage'
const baseUrl = '/api/blogs'

const headers = {
  'Authorization': storageService.loadUser() ? `Bearer ${storageService.loadUser().token}` : null
}

const getBlogs = () => axios.get(baseUrl).then(res => res.data)
    
    
const createBlog = newBlog => axios.post(baseUrl,newBlog,{headers}).then(res => res.data)

const update = updatedBlog => axios.put(`${baseUrl}/${updatedBlog.id}`).then(res => res.data)


const remove = (id) => {
 axios.delete(`${baseUrl}/${id}`, { headers })
}

export default { getBlogs, createBlog, update, remove }