const API_TOKEN = 'd849e218708b80c67634a02973e148';
const API_URL = 'https://graphql.datocms.com';

export async function request({ query, variables }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await response.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

const MY_QUERY = `
{
  allProjects {
    id
    title
    typeProject
    link
    thumbnail {
      url
    }
  }
}

`;

export async function getAllProjects() {
  const data = await request({
    query: MY_QUERY,
    variables: {}
  });

  return data.allProjects;
}

export default { getAllProjects };
