import { Box } from "reflexbox";
import getConfig from "next/config";
import Router from "next/router";
import { parseCookies } from "nookies";

function AuthArticles({ articles }) {
  //console.log(articles.statusCode);
  if (articles.statusCode === 401) {
    Router.push("/login");
  }
  return (
    <>
      {articles.statusCode !== 401 && (
        <Box maxWidth={960} width="100%" mx="auto" px={30}>
          <Box as="h2" my={40}>
            Payed articles
          </Box>
          {articles.map((article) => (
            <Box as="div" className="article" key={article.id}>
              <h3>{article.Title}</h3>
              <p
                style={{ overflowWrap: "break-word" }}
                dangerouslySetInnerHTML={{ __html: article.Body }}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}

// function redirectUser(ctx, location) {
//   if (ctx.req) {
//     ctx.res.writeHead(302, { Location: location });
//     ctx.res.end();
//   } else {
//     Router.push(location);
//   }
// }

export async function getServerSideProps(ctx) {
  const { publicRuntimeConfig } = getConfig();
  let jwt = parseCookies(ctx).jwt;

  const res = await fetch(`${publicRuntimeConfig.API_URL}/auth-articles`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const articles = await res.json();

  return { props: { articles } };
  // if (!jwt) {
  //   if (ctx.resolvedUrl === "/auth-articles") {
  //     redirectUser(ctx, "/login");
  //   }
  // } else {
  //   redirectUser(ctx, "/auth-articles");
  // }

  // return { props: { cookie: !jwt ? null : jwt } };
  // dev
  // const { publicRuntimeConfig } = getConfig();

  // //auth hardcoded login password data
  // const logininfo = {
  //   identifier: "jacek@o2.pl",
  //   password: "123456",
  // };
  // const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(logininfo),
  // });
  // const loginResponse = await login.json();

  // //fetch auth-articles and pass loginResponse token
  // const res = await fetch(`${publicRuntimeConfig.API_URL}/auth-articles`, {
  //   headers: {
  //     Authorization: `Bearer ${loginResponse.jwt}`,
  //   },
  // });
  // const articles = await res.json();

  // return { props: { articles, authData: loginResponse } };
}

export default AuthArticles;
