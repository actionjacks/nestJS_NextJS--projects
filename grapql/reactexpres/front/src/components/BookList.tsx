import { useQuery, gql } from '@apollo/client';

const getBooksQuery = gql`
  query GetLocations {
    books {
      name
      author {
        id
        name
      }
    }
  }`

function BookList(props: any) {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data)

  return (
    <div className="App">
      <h1>lorem</h1>
    </div>
  );
}

export default BookList;

// query {
//   authors{
//     age
//     name
//   }
// }

// query {
//   books{
//     name
//     author {
//       id
//       name
//     }
//   }
// }