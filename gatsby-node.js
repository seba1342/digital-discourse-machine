const path = require('path');

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectPostTemplate = path.resolve('src/templates/loveLetterPage.js');

    resolve(
      graphql(
        `query{
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }`).then(result => {
        const posts = result.data.allMarkdownRemark.edges;

        result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          createPage({
            path: path,
            component: projectPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node,
            }
          });

          resolve();
        });
      })
    );
  });
});
