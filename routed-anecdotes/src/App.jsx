import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'
import Notification from './components/Notification'
import CreateNew from './components/AnecdoteForm'



const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState(null)


  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu/>
      <Notification notification={notification}/>
      <Router>
      <Routes>
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path='/create' element={<CreateNew anecdotes={anecdotes} setNotification={setNotification} setAnecdotes={setAnecdotes} />} />
        <Route path='/about' element={<About />} />
        <Route path='anecdotes/:id' element={<Anecdote anecdotes={anecdotes} />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
