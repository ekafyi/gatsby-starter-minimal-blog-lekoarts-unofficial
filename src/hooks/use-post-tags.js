import { graphql, useStaticQuery } from "gatsby";

/**
 * @returns {object[]}
 */
const usePostTags = () => {
  const query = graphql`
    query TagsQuery {
      allPost(sort: { fields: tags___name, order: DESC }) {
        group(field: tags___name) {
          fieldValue
          totalCount
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  return data.allPost.group;
};

export default usePostTags;
