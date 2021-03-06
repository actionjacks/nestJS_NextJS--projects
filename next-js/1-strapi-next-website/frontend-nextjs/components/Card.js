import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";

import propTypes from "prop-types";

const Card = ({ data }) => {
  const { API_URL } = process.env;

  if (!data.genre) {
    data.genre = {};
    data.genre.slug = "uncategorised";
  }

  return (
    <CardStyled>
      {data.poster[0] && (
        <div className="poster">
          <Image src={API_URL + data.poster[0].url} width={400} height={400} />
        </div>
      )}

      <div className="body">
        <h3>{data.title}</h3>
        <p>{data.fraction}</p>

        <Link href={`/fractions/${data.genre.slug}/${data.slug}`}>
          <a>more about this</a>
        </Link>
      </div>
    </CardStyled>
  );
};
//check type of prop
Card.propTypes = {
  data: propTypes.object.isRequired,
};

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #6666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`;
export default Card;
