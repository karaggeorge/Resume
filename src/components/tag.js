import React from 'react';
import { getHref } from '../data/tags';

const renderStringTag = (tag) => <a className='tag' href={getHref(tag)}>{tag}</a>;

const renderComplexTag = ({ name, side }) => <a className='tag' href={getHref(name)}>{name}<span>{side}</span></a>;

export const TagArea = ({ tags }) => {
  return tags.length ? (
    <div className='tag-area'>
      { tags.map((tag, i) => <Tag value={tag} key={`tag-${i}`} />) }
    </div>
  ) : null;
};

const Tag = ({ value }) => {
  if (typeof value === 'string') return renderStringTag(value);
  return renderComplexTag(value);
};

export default Tag;
