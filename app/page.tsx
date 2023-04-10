"use client";
import React, { useEffect, useState } from "react";
import Courses from "./componets/Courses";
import Loading from "./componets/Loading";
import Search from "./componets/Search";

function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function fetchCourses() {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    })();
  }, []);
  if (loading) return <Loading />;
  return (
    <div>
      <h1>Welcome</h1>
      <Search setCourses={setCourses} />
      <Courses courses={courses} />
    </div>
  );
}

export default HomePage;
