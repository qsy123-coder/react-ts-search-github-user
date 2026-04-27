import type { Repository } from "./types";

export const calculateMostForkedRepos = (
  repositories: Repository[],
): { repo: string; count: number }[] => {
  if (repositories.length === 0) {
    return [];
  }
  const forkedRepos = repositories
    .map((repos) => {
      return { repo: repos.name, count: repos.forkCount };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return forkedRepos;
};

//计算最受欢迎的前五名，统计stars

export const calculateMostStarRepos = (
  repositories: Repository[],
): { repo: string; stars: number }[] => {
  if (repositories.length === 0) {
    return [];
  }
  const mostStarsRepos = repositories
    .map((repo) => {
      return { repo: repo.name, stars: repo.stargazerCount };
    })
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

  return mostStarsRepos;
};

// 计算使用最频繁的编程语言

// export const calculateMostUseLanguage = (
//   repositories: Repository[],
// ): { language: string; count: number }[] => {
//   if (repositories.length === 0) {
//     return [];
//   }
//   const languageMap: { [key: string]: number } = {};

//   repositories.forEach((repo) => {
//     if (repo.languages.edges.length === 0) return;
//     repo.languages.edges.forEach((edge) => {
//       const { name } = edge.node;
//       languageMap[name] = (languageMap[name] || 0) + 1;
//     });
//   });

//   if (Object.keys(languageMap).length === 0) return [];
//   return Object.entries(languageMap)
//     .sort(([, a], [, b]) => b - a)
//     .slice(0, 5)
//     .map(([language, count]) => ({ language, count }));
// };

export const calculateMostUseLanguage = (
  repositories: Repository[],
): { language: string; count: number }[] => {
  // Return empty array if no repositories are provided
  if (repositories.length === 0) {
    return [];
  }

  // Initialize a map to track how many times each language appears
  // Example: { "JavaScript": 5, "Python": 3, "TypeScript": 2 }
  const languageMap: { [key: string]: number } = {};

  repositories.forEach((repo) => {
    // Skip repositories with no languages
    if (repo.languages.edges.length === 0) {
      return;
    }

    // Iterate through each language in the repository
    // languages.edges comes from GitHub's GraphQL API structure
    repo.languages.edges.forEach((language) => {
      const { name } = language.node;
      // Increment the count for this language, initializing to 1 if it's the first occurrence
      languageMap[name] = (languageMap[name] || 0) + 1;
    });
  });

  // If no languages were found in any repository, return empty array
  if (Object.keys(languageMap).length === 0) {
    return [];
  }

  // Convert the language map into an array of objects and sort them
  return (
    Object.entries(languageMap)
      // Convert entries into array of [language, count] pairs
      .sort(([, a], [, b]) => b - a) // Sort by count in descending order
      .slice(0, 5) // Take only the top 5 languages
      .map(([language, count]) => ({ language, count }))
  ); // Transform into required object format
};
