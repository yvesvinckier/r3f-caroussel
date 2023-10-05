const query = require("../data/query");
const path = require(`path`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create a page for each post
  const worksQuery = await graphql(query.data.works);
  const works = worksQuery.data.allPrismicWorks.edges;
  works.forEach((work, i) => {
    const selected = work.node;
    const previous = i === works.length - 1 ? null : works[i + 1].node;
    const next = i === 0 ? null : works[i - 1].node;
    createPage({
      path: `/${work.node.uid}/`,
      component: path.resolve(`./src/templates/work.js`),
      context: {
        ...selected,
        previous,
        next,
      },
    });
  });
};
