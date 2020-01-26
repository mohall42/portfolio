import { useStaticQuery, graphql } from "gatsby"

export const getAboutData = () => {
    const { about } = useStaticQuery(
        graphql`
            query {
                background: file(relativePath: { eq: "images/background.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 4160){
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                },
                about: markdownRemark(frontmatter:{title: { eq: "About Me"} }){
                html
                
                }
            }
        `
    )
    return about.data;
}