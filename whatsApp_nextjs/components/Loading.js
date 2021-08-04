import { FoldingCube } from "better-react-spinkit";

function Loading() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <FoldingCube color="#3cbc28" size={69} />
    </div>
  );
}

export default Loading;
