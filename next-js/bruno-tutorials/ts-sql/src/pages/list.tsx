import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { VehiclePerson } from "../../api/VehiclePerson";

export interface ListProps {
  ownersList: VehiclePerson[] | undefined;
}

export default function List({ ownersList }: ListProps) {
  return (
    <div>
      {ownersList?.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4001/vehicles");
  const ownersList: VehiclePerson[] | undefined = await response.json();
  return {
    props: {
      ownersList,
    },
  };
};
