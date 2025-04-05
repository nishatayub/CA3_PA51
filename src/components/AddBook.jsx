import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const bookName = formData.get('bookName')
        const authorName = formData.get('authorName')
        const description = formData.get('description')
        const coverImageUrl = formData.get('coverImageUrl')

        console.log({
            bookName,
            authorName,
            description,
            coverImageUrl
        });
        alert('Book added successfully!')
        navigate('/');
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='bookName' placeholder='Enter Book Name' />
        <input type="text" name='authorName' placeholder='Enter Author Name' />
        <textarea name='description' placeholder="Description" required />
        <input type="url" name='coverImageUrl' placeholder="Cover Image URL" required />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddBook
