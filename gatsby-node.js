const { createFilePath } = require(`gatsby-source-filesystem`)

require("source-map-support").install()
require("ts-node").register()

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = require("./src/lib/createPages").createPages

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@toruslabs/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
