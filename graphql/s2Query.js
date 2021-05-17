import gql from "graphql-tag";

export const Query = gql`
query s2Query{
    homepage{
      s2title1
      s2cardTitle1
      s2cardBody1
      s2cardTitle2
      s2cardBody2
      s2cardTitle3
      s2cardBody3
    }
  }
`