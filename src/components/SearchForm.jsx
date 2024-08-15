import { useState } from "react";

function SearchForm({ onSearch }) {
  const [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(text);
  }

  function clearSearch() {
    setText("");
    onSearch("");
  }

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
    onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={text}
        required
        onChange={handleChange}
      />
      <button type="button" onClick={clearSearch}>
        Clear Search
      </button>
    </form>
  );
}

export default SearchForm;
