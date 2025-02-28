import React from 'react';
import './AddBookForm.css'; // Optional: Create a CSS file for styling

const AddBookForm = () => {
    return (
        <div className="add-book-form">
            <h2>Add a New Book</h2>
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <div>
                    <label htmlFor="coverImageUrl">Cover Image URL:</label>
                    <input type="url" id="coverImageUrl" name="coverImageUrl" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBookForm;
