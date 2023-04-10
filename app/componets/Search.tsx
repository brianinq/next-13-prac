import React, { SyntheticEvent, useState } from "react";

function Search({ setCourses }) {
  const [query, setQuery] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?q=${query}`);
    const courses = await res.json();
    setCourses(courses);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
        id=""
        placeholder="Search..."
        value={query}
      />
      <button className="btn btn-search">Search</button>
    </form>
  );
}

export default Search;
