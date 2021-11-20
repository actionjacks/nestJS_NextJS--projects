import { Flex, Box } from "reflexbox";
import Select from "react-select";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";

const { API_URL } = process.env;

const getAos = async (key) => {
  console.log(key);
  const genreId = key.queryKey[1].genre;
  const playersIds = key.queryKey[2].players.map((id) => `players.id=${id}`);
  console.log(playersIds);

  const playersQueryString = playersIds.join("&");
  console.log(playersQueryString);

  if (genreId && playersQueryString) {
    const res = await fetch(
      `${API_URL}/age-of-sigmars?genre.id=${genreId}&${playersQueryString}`
    );
    return res.json();
  }

  if (genreId) {
    const res = await fetch(`${API_URL}/age-of-sigmars?genre.id=${genreId}`);
    return res.json();
  }

  if (playersQueryString) {
    const res = await fetch(`${API_URL}/age-of-sigmars?${playersQueryString}`);
    return res.json();
  }

  const res = await fetch(`${API_URL}/age-of-sigmars`);
  return res.json();
};

const FilterAos = ({ aosData, players, genres }) => {
  const queryClient = useQueryClient();
  const [genreId, setGenreId] = useState(null);
  const [playersIds, setPlayers] = useState([]);

  const { data, status } = useQuery(
    ["aosData", { genre: genreId }, { players: playersIds }],
    getAos,
    { initialData: aosData }
  );

  return (
    <>
      <Box maxWidth={960} width="100%" mx="auto" px={30}>
        <Box as="h2" my={40}>
          Filter Aos
        </Box>

        <Flex mb={100}>
          <Box width={200} mr={20}>
            <Select
              getOptionLabel={(option) =>
                `${option.first_name} ${option.last_name}`
              }
              getOptionValue={(option) => option.id}
              options={players}
              instanceId="players"
              isMulti
              placeholder="Filter by Player"
              onChange={(values) =>
                setPlayers(values.map((player) => player.id))
              }
            />
            <br />
            <Select
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option.id}
              options={genres}
              instanceId="genres"
              placeholder="Filter by Genres"
              isClearable
              onChange={(value) => setGenreId(value ? value.id : null)}
            />
          </Box>
          <Box>
            {status === "loading" && <div>I'm loading your AoS data</div>}
            {status === "error" && <div>Something went wrong</div>}

            {status === "success" &&
              data.map((item) => (
                <Box key={item.id} p={10}>
                  <strong>{item.title}</strong> -{" "}
                  {item.genre ? item.genre.title : null}
                  <br />
                  {item.players.length > 0 &&
                    item.players.map((player) => (
                      <small key={player.id}>
                        {player.first_name} {player.last_name} &nbsp;
                      </small>
                    ))}
                </Box>
              ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/age-of-sigmars`);
  const aosData = await res.json();

  const resPlayers = await fetch(`${API_URL}/players`);
  const PlayersData = await resPlayers.json();

  const resGenres = await fetch(`${API_URL}/genres`);
  const genresData = await resGenres.json();

  return {
    props: {
      aosData: aosData,
      players: PlayersData,
      genres: genresData,
    },
  };
}

export default FilterAos;
