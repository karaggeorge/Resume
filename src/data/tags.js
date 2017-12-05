import experiences from './experiences';

export const getTags = () => {
  return experiences.reduce((list, experience) => list.concat(experience.tags), []).unique();
}

console.log(getTags());
