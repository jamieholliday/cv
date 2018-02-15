import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jamie Holliday - CV"
      meta={[
        {
          name: 'description',
          content:
            'Jamie Holliday - CV. Front End Developer working with modern Javascript, including React, Webpack, Redux, Node',
        },
        {
          name: 'keywords',
          content: 'Javascript, React, Node, Redux, Webpack, ES6, Git, GraphQL',
        },
      ]}
    />
    <div
      style={{
        margin: '3rem auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
