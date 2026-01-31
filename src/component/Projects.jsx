import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../ContextApi/Context";
import ProjectsBoxes from "./ProjectsBoxes";

const Projects = () => {
  const { renderingCards, user, repos, loading, error, theme } = useContext(GlobalContext);
  const [moreCards, setMoreCards] = useState(false);

  useEffect(() => {
    renderingCards();
  }, []);

  // Loading
  if (loading)
    return <div className="text-center mt-20 text-white">Loading...</div>;

  // Error
  if (error)
    return <div className="text-center mt-20 text-red-600 font-bold">{error}</div>;

  // Decide how many repos to show
  const displayedRepos = moreCards ? repos : repos.slice(0, 4);

  return (
    <div className={`min-h-[80vh] ${theme ? "text-white" : "text-black"} border-b container mx-auto px-2`}>
      <h1 className="text-center font-bold text-3xl sm:text-6xl my-10">Recent Projects</h1>

      {/* User Info */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 mb-10 text-center">
        <h1>
          Github Username:{" "}
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded font-bold ${theme ? "bg-gray-800 text-white" : "bg-blue-200 text-black"}`}
          >
            {user.name || user.login}
          </a>
        </h1>

        <img
          className="rounded-full w-12 h-12"
          src={user.avatar_url}
          alt="avatar"
        />
        <h1>Following: {user.following}</h1>
        <h1>Followers: {user.followers}</h1>
      </div>

      {/* Repos */}
      <div className="flex flex-wrap gap-5 items-center justify-between">
        {displayedRepos.map((repo) => (
          <ProjectsBoxes
            key={repo.id}
            id={repo.id}
            name={repo.name}
            avatar_url={user.avatar_url}
            html_url={repo.html_url}
            theme={theme}
          />
        ))}
      </div>

      {/* See More Button */}
      {repos.length > 4 && (
        <div className="flex justify-center my-6">
          <button
            onClick={() => setMoreCards(!moreCards)}
            className={`px-6 py-2 rounded font-bold ${theme ? "bg-gray-800 text-white" : "bg-blue-500 text-white"} hover:opacity-90 transition`}
          >
            {moreCards ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
