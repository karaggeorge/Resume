import experiences from './experiences';
import education from './education';
import awards from './awards';
import courses from './courses';
import skills from './skills';
import _ from 'lodash';

export const tagExists = (tag) => {
  return skills.reduce((list, { skills }) => list.concat(skills.map(s => getHref(s))), []).includes(tag);
}

export const getTags = () => {
  return [
    ...experiences,
    ...education,
    ...awards,
    ...courses,
  ].reduce(
    (list, { tags = [], hiddenTags = [] }) => list.concat([...tags, ...hiddenTags]), []
  );
}

export const getHref = (tag) => `#${tag.toLowerCase().replace(/\W/g, '')}`;

export const getUniqueTags = () => {
  return _.uniq(getTags());
}

export const countTag = (tag) => getTags().filter(t => t === tag).length;

const countOccurances = (tag, set) => set.filter(({ tags = [], hiddenTags = [] }) => [...tags, ...hiddenTags].includes(tag)).length;

export const tagData = (tag) => ({
  experiences: countOccurances(tag, experiences),
  education: countOccurances(tag, education),
  awards: countOccurances(tag, awards),
  courses: countOccurances(tag, courses),
});

export const isInactive = ({ tags = [], hiddenTags = [] }, filterTag) => {
  return ![...tags, ...hiddenTags].map(t => t.toLowerCase().replace(/\W/g, '')).includes(filterTag);
}

export const getName = (tag) => {
  return skills.reduce((list, { skills }) => list.concat(skills), []).find(s => s.toLowerCase().replace(/\W/g, '') === tag);
}
