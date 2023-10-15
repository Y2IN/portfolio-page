import type { GatsbyConfig } from "gatsby";
import siteMetaData from "./gatsby-site-meta-data.ts";

const config: GatsbyConfig = {
  siteMetadata: siteMetaData,
  pathPrefix: "/portfolio-page",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yeins portfolio`,
        short_name: `yein's portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/402.png`,
      },
    },
  ],
};

export default config;
