import gql from "graphql-tag";

export const hwdiQuery = gql`
query hwdiQuery{
  homepage{
    hwdi_body1
    hwdi_body2
    hwdi_body3
    hwdi_body4
    hwdi_body5
  }
}
`
