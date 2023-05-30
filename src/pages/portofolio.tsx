import React, { useEffect, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Portfolio = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // hook uses callback function when mounted
  // finished rendering and is now part of the rendered output
  useEffect(() => {
    // callback function fetching the repository data from GitHub
    const fetchRepositories = async () => {
      try {
        const repoNames = [
          'vahurtad/van_web_v2',
          'vahurtad/nextjs-site',
          'vahurtad/Twitter-Analysis',
          'civic-app/civic-app',
          'openoakland/openousd-site',
        ];
        // fetch a single repo and returns repo data
        const fetchRepo = async (repo: string) => {
          const response = await fetch(`https://api.github.com/repos/${repo}`);
          const repository = await response.json();
          return repository;
        };
        //  fetch data for all the repositories and returns an array of promises
        const fetchRepoAll = async () => {
          const repos = await Promise.all(repoNames.map(fetchRepo));
          return repos.filter(
            // remove any null values from array
            (repo: Repository | null) => repo !== null
          ) as Repository[];
        };

        const repoFetch = await fetchRepoAll();
        // called to update the component state with the fetched and filtered repository data
        setRepositories(repoFetch);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching:', error);
        setRepositories([]);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repositories.length > 0 ? (
        repositories.map((repo) => (
          <div
            key={repo.id}
            className="static m-8 h-72 w-72 rounded-lg bg-pink-600"
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <div className="absolute -m-2 h-72 w-72 rounded-lg bg-yellow-50 font-literata text-gray-700 shadow-lg transition-all duration-150 ease-out hover:m-0 hover:shadow-2xl hover:ease-in">
                <h1 className="m-4 text-2xl font-bold">{repo.name}</h1>
                <hr className="m-4 rounded-2xl border-t-2" />
                <p className="m-4 text-sm">{repo.description}</p>
              </div>
            </a>
          </div>
        ))
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
};

const About = () => (
  <Main
    meta={
      <Meta
        title="Vanessa Hurtado - Portfolio"
        description="Vanessa's portfolio"
      />
    }
  >
    <div className="container mx-auto py-8">
      <p className="mb-4 font-metropolis text-lg text-gray-700 dark:text-yellow-900">
        {`As a lifelong learner, I've taken the initiative to independently
        develop my skills in multiple skill sets. Through a combination of
        self-study and practical application, I've become proficient in these
        tools and have leveraged them to successfully complete a range of
        projects. By proactively seeking out opportunities to expand my skill
        set, I've been able to contribute more effectively to my teams and
        deliver high-quality work that meets and exceeds client expectations.
        I'm passionate about continuing to develop my skills and am always
        looking for new challenges and opportunities for data analysis growth.`}
      </p>
      <Portfolio />
    </div>
  </Main>
);

export default About;
