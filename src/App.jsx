
import { useState } from 'react'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/boookmarks/Bookmarks'

function App() {
  const [bookmarks ,setBookmarks] = useState([]);
  const [readingTime ,setreadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
   const newBookmarks =[...bookmarks, blog];
   setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time  =>{
    const newReadingTime = readingTime + time;
    setreadingTime(newReadingTime)
  }


 

  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto '>
    <Blogs handleMarkAsRead={handleMarkAsRead}  handleAddToBookmark = {handleAddToBookmark} ></Blogs>
      
    <Bookmarks  bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>


    </div>
      
    </>
  )
}

export default App
