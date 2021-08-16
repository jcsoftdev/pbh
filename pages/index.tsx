import { useEffect, useState } from "react";
import Header from "../components/Organisms/Header";

import Map from "@components/Molecules/Map";
import CustomMarker from "@components/Atoms/CustomMarker/CustomMarker";
import useLocation from "hooks/useLocation";
import { UserI } from "@api/types";
import { getUsers } from "@api/getUsers";

const Home = () => {
  const { coordinates } = useLocation();
  const [users, setUsers] = useState<UserI[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);
      console.log("data", data);
    })();
  }, []);

  return (
    <div>
      <div id="backdrop-hook"></div>
      <Header />

      <main>
        {coordinates ? (
          <Map center={coordinates} zoom={10}>
            <>
              {users.map((user) => (
                <CustomMarker
                  key={user.id}
                  position={user.location}
                  data={user.posts}
                  cellphone={ user.cellphone}
                />
              ))}
            </>
          </Map>
        ) : (
          <h1>Loading</h1>
        )}
      </main>
    </div>
  );
};

export default Home;
