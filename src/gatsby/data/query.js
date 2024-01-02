module.exports.data = {
  works: `{
        allPrismicWorks(sort: {first_publication_date: DESC}) {
            edges {
                node {
                    uid
                    data {
                        cover {
                            gatsbyImageData(width: 1800, placeholder: BLURRED)
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
