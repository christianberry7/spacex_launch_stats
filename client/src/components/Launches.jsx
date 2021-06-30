import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message} Error :(</p>;
  console.log(data);
  return (
    <React.Fragment>
      <h2 className="mb-5 mt-5">Launches</h2>
      <MissionKey />
      {data.launches.map((launch) => (
        <LaunchItem key={launch.mission_name} launch={launch} />
      ))}
    </React.Fragment>
  );
}

export default Launches;
