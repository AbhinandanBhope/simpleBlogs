import React, { useState } from 'react';
import Input from './input';

function Blogs() {

  const [blogsObj, setBlogsObj] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function showBlogs(newBlog) {
    if (editIndex !== null) {
      // ✅ UPDATE existing blog
      const updated = [...blogsObj];
      updated[editIndex] = newBlog;
      setBlogsObj(updated);
      setEditIndex(null);
    } else {
      // ✅ ADD new blog
      setBlogsObj((prev) => [...prev, newBlog]);
    }
  }

  function deleteBlog(indexToDelete) {
    setBlogsObj((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  }

  function editBlog(index) {
    setEditIndex(index);
  }

  return (
    <div>
      <Input
        show={showBlogs}
        editData={editIndex !== null ? blogsObj[editIndex] : null}
      />

      {blogsObj.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <img src={blog.imageUrl} alt="" width="200" />

          <button onClick={() => editBlog(index)}>Edit</button>
          <button onClick={() => deleteBlog(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Blogs;