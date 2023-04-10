import { FaCodeBranch, FaStar } from "react-icons/fa";

async function Repo({ name }: { name: string }) {
  const repo = await fetchRepos(name);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count || 8}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count || 8}</span>
        </div>
      </div>
    </>
  );
}
async function fetchRepos(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/brianinq/${name}`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );
  return await response.json();
}
export default Repo;
