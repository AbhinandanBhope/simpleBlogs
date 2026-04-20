import React, { useState, useEffect } from 'react';

function Input(props) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: ""
  });

  // ✅ When editData changes → fill form
  useEffect(() => {
    if (props.editData) {
      setFormData(props.editData);
    }
  }, [props.editData]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.show(formData);
    
    // clear form after submit
    setFormData({
      title: "",
      description: "",
      imageUrl: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        id="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />

      <input
        id="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />

      <input
        id="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <br />

      <button type="submit">
        {props.editData ? "Update" : "Submit"}
      </button>

    </form>
  );
}

export default Input;