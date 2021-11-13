import React from "react";
import { useTranslation } from "react-i18next";

import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import Card from "../components/Card";

// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withTranslation } from "react-i18next";

function Home({ data }) {
  // console.log(data);
  const { t } = useTranslation("main");

  return (
    <Box
      maxWidth={960}
      width="100%"
      mx="auto"
      px={30}
      //brakepoints just array white properties
      // bg={["red", "blue"]}
    >
      <Box my={40} as="h2">
        {t("Age of Sigmar")}
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        flexWrap="wrap"
        mb={100}
      >
        {data.map((item) => (
          <Box key={item.id} width={["100%", "30%"]}>
            <Card data={item} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps({ ctx, locale }) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/age-of-sigmars`);
  const data = await res.json();

  return {
    props: {
      data,
      // ...(await serverSideTranslations(locale, ["common", "main"])),
    },
  };
}

export default withTranslation()(Home);
