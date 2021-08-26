function UserProfilePage({ username }) {
  return <h1>{username}</h1>;
}
export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context; //get acess to req and res
  return {
    props: {
      username: "jacel",
    },
  };
}
