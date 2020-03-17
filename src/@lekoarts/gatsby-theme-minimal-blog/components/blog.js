/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "@theme-ui/components";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ListingByYear from "./listing-by-year";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import usePostTags from "../../../hooks/use-post-tags";
import TagsList from "./tags-list";

// Enable if linking to the "Tags" page
// import { Link } from "gatsby";
// import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
// import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";

// Enable if using Typescript
// type PostsProps = {
//   posts: {
//     slug: string
//     title: string
//     date: string
//     excerpt: string
//     description: string
//     timeToRead: number
//     tags?: {
//       name: string
//       slug: string
//     }[]
//   }[]
// }

const Blog = ({ posts }) => {
  // const { tagsPath, basePath } = useMinimalBlogConfig(); // Enable if linking to the "Tags" page

  const tags = usePostTags();

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`
        }}
      >
        <Styled.h2>Blog</Styled.h2>
        {/* <Styled.a
          as={Link}
          sx={{ variant: `links.secondary` }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </Styled.a> */}
      </Flex>

      {/* Render list of tags */}
      <TagsList list={tags} />
      {/* */}

      {/* Group posts by year */}
      <ListingByYear posts={posts} sx={{ mt: [4, 5] }} />
      {/* */}
    </Layout>
  );
};

export default Blog;
