module.exports.data = {
  works: `{
        allPrismicWorks(sort: {first_publication_date: DESC}) {
            edges {
                node {
                    uid
                    data {
                        cover {
                            gatsbyImageData(width: 3228, placeholder: NONE)
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
