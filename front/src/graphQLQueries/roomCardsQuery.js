import { gql } from "apollo-boost";

export default gql`
  {
    roomsDescriptions {
      id
      currencySymbol
      pricePerMonth
      photoUrls {
        homecardHidpi
      }
      title
    }
  }
`;
