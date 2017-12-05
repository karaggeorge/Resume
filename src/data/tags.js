import experiences from './experiences';
import _ from 'lodash';

export const getTags = () => {
  return experiences.reduce((list, experience) => list.concat(experience.tags), []);
}

export const getUniqueTags = () => {
  return _.uniq(getTags());
}

