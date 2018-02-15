module.exports = {
  siteMetadata: {
    title: 'Jamie Holliday - CV',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-30710543-2',
      },
    },
  ],
};
