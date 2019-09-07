import axios from "axios";

const SPOTAHOME_API_URL = "https://frontend-interview.spotahome.com/api/public";

const Query = {
  roomsIds: async () => {
    const response = await axios.get(
      `${SPOTAHOME_API_URL}/listings/search/markers/madrid`
    );
    return response.data.data;
  },
  roomsDescriptions: async () => {
    const roomsIdsResponse = await Query.roomsIds();
    const response = await axios.get(
      `${SPOTAHOME_API_URL}/listings/search/homecards_ids`,
      {
        params: {
          ids: roomsIdsResponse.slice(0, 30).map(room => room.id)
        }
      }
    );
    return response.data.data.homecards;
  }
};
export default Query;
