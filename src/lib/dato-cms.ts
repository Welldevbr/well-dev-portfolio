import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = 'd849e218708b80c67634a02973e148';

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/'
});

export function fetchDatoAPI() {
  const authLink = setContext((_, { headers }) => ({
    headers: Object.assign(headers || {}, {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    })
  }));
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return client;
}

export async function getAllProjects() {
  const client = fetchDatoAPI();
  const response = await client.query({
    query: gql`
      {
        allProjects {
          id
          title
          typeProject
          description
          link
          repo
          thumbnail {
            url
          }
          gallery {
            url
          }
          tags {
            name
          }
        }
      }
    `
  });
  console.log(response.data.allProjects);
  return response.data.allProjects;
}

export default { getAllProjects, fetchDatoAPI };
