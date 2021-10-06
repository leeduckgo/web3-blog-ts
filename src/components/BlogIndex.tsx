import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Bio } from "./bio"
import { Layout } from "./layout"
import { MarkdownRemark } from "../graphql-types"
import { rhythm } from "../utils/typography"

interface IAppState {
    fetching: boolean;
    address: string;
    web3: any;
    provider: any;
    connected: boolean;
    chainId: number;
    networkId: number;
    assets: IAssetData[];
    showModal: boolean;
    pendingRequest: boolean;
    result: any | null;
  }
  
const INITIAL_STATE: IAppState = {
fetching: false,
address: "",
web3: null,
provider: null,
connected: false,
chainId: 1,
networkId: 1,
assets: [],
showModal: false,
pendingRequest: false,
result: null
};

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <Bio />
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const frontmatter = node!.frontmatter!
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.excerpt!

        const title = frontmatter.title || fields.slug
        return (
          <div key={slug}>
            <Title>
              {title}
            </Title>
            <small>{frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
