import Link from "next/link";
import { FaStar, FaEye, FaCodeBranch } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/brianinq/repos");
  return await response.json();
}

async function ReposPage() {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count || 100}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count || 100}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count || 100}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReposPage;
