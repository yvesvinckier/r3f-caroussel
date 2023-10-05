module.exports.data = {
  works: `{
        allPrismicWorks(sort: {first_publication_date: DESC}) {
            edges {
                node {
                    uid
                    data {
                        cover {
                            gatsbyImageData
                            alt
                        }
                        title {
                            text
                        }
                        description
                    }
                }
            }
        }
    }`,
};
