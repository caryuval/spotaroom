import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { RoomCard, Spinner, Alert, ALERT_TYPES } from "../../components";
import roomCardsQuery from "../../graphQLQueries/roomCardsQuery";

const Home = () => {
  const { data, loading, error } = useQuery(roomCardsQuery);
  let content = null;

  if (loading) {
    return <Spinner className="text-center mt-5" />;
  }
  if (error) {
    content = (
      <Alert
        className="mx-auto mt-5"
        type={ALERT_TYPES.danger}
        msg="Sorry, but there is a problem retrieving the information at the moment :-("
      />
    );
  } else if (data.roomsDescriptions && data.roomsDescriptions.length) {
    content = data.roomsDescriptions.map(room => (
      <RoomCard key={room.id} {...room}></RoomCard>
    ));
  } else {
    content = (
      <Alert
        className="mx-auto mt-5"
        type={ALERT_TYPES.warning}
        msg="Sorry, but there no rooms available at the moment :-("
      />
    );
  }

  return <section className="container">{content}</section>;
};

export default Home;
