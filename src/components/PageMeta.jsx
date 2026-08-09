import React from 'react';
import routeMeta from '../routeMeta';

// React 19 hoists <title> and <meta> into <head> from anywhere in the tree, so
// this keeps the tab title and description correct across client-side
// navigation. The equivalent tags for a cold load are baked into each route's
// HTML file by scripts/build-shells.js.
const PageMeta = ({ route }) => {
  const { title, description } = routeMeta[route];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default PageMeta;
