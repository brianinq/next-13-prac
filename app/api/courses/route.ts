import { NextRequest, NextResponse } from "next/server";
import courses from "./courses.json";
import { v4 as uuidv4 } from "uuid";

export async function GET(id?: number) {
  return NextResponse.json(courses);
}
export async function POST(request: NextRequest) {
  const { title, description, level, link } = await request.json();
  console.log(title, description, level, link);

  const course = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };
  courses.push(course);
  return NextResponse.json(courses);
}
