/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import kebabCase from "lodash.kebabcase";
import { Link } from "gatsby";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";

// Enable if using Typescript
// type PostsProps = {
//   list: {
//     fieldValue: string
//     totalCount: number
//   }[]
// }

const TagsList = ({ list }) => {
  const { tagsPath, basePath, blogPath } = useMinimalBlogConfig();

  // Styles
  const linkStyle = {
    variant: `links.listItem`,
    fontSize: [1, 2, 2],
    "&[aria-current]": { textDecoration: "underline" }
  };
  const listStyle = { p: 0, li: { display: "inline-block", mr: [3, 3, 4] } };

  return (
    <Box mt={[3, 4]} mb={-2}>
      <ul sx={listStyle}>
        <li>
          <Styled.a
            as={Link}
            sx={linkStyle}
            to={replaceSlashes(`/${basePath}/${blogPath}`)}
          >
            All Tags
          </Styled.a>
        </li>
        {list.map(listItem => (
          <li key={listItem.fieldValue} sx={{ alignItems: `center` }}>
            <Styled.a
              as={Link}
              sx={linkStyle}
              to={replaceSlashes(
                `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`
              )}
            >
              {listItem.fieldValue}{" "}
              <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </Styled.a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TagsList;
