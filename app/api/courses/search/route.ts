import { NextRequest, NextResponse } from "next/server";
import courses from "../courses.json";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query?.toLowerCase() || "")
  );
  return NextResponse.json(filteredCourses);
}
