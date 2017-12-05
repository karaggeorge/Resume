import React from 'react';
import getTags from '../data/tags';

const renderStringTag = (tag) => <a href={`#${tag}`}>{tag}</a>;

const renderCountTag = ({ name, count }) => <a href={`#${name}`}>{name}<span>{count}</span></a>;

const Tag = ({ value }) => {
  if (typeof value === 'string') return renderStringTag(value);
  return renderCountTag(value);
};

export default Tag;
