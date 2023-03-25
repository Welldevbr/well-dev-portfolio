import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = process.env.NEXT_DATOCMS_API_TOKEN;

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_DATOCMS_URL
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
