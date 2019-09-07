import { gql } from "apollo-server";

const typeDefs = gql`
  type Room {
    id: Int
    adId: Int
    currencySymbol: String
    pricePerMonth: Int
    photoUrls: PhotoUrls
    title: String
  }

  type PhotoUrls {
    homecardHidpi: String
  }

  type Query {
    roomsIds: [Room]
    roomsDescriptions: [Room]
  }
`;

export default typeDefs;
