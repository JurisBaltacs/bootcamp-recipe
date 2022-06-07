import React, { useState } from "react";

const Create = ({ title, ingredients, method, cookingTime }) => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const data = {
      title: "title",
      ingredients: ["ingredients"],
      method: "method",
      cookingTime: "cookingTime",
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3004/recipes", requestOptions);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
    alert("You have submitted the form.");
  };

  return (
    <div className="wrapper">
      <h1>Create page</h1>
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Title</p>
            <input type="text" name="title" value={title} />
          </label>
          <label>
            <p>Ingredients</p>
            <input type="text" name="ingredients" value={ingredients} />
          </label>
          <label>
            <p>Method</p>
            <input type="text" name="method" value={method} />
          </label>
          <label>
            <p>Cooking time</p>
            <input type="text" name="cookingTime" value={cookingTime} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Create;
