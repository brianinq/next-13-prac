"use client";
import Link from "next/link";
import React from "react";

async function RepoDirs({ name }: { name: string }) {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((c) => c.type === "dir");
  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((d) => (
          <li key={d.path}>
            <Link href={`code/repos/${name}/${d.path}`}>{d.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function fetchRepoContents(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/brianinq/${name}/contents`
  );
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  return await response.json();
}

export default RepoDirs;
