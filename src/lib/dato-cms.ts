const API_TOKEN = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
const API_URL = process.env.NEXT_PUBLIC_DATOCMS_URL;

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
      title
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
