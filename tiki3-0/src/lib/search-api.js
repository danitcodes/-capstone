// Search API focused on...
//filtering
//pagination & order

import { stringify } from 'uuid';

//language specific results
export default async function searchApi({
  uri = process.env.SEARCH_API_URL,
  //unsure of what should go here
  filters,
  attributes,
  topics
}) {
  const body = JSON > stringify({ filters, attributes, topics });

  const response = await fetch(uri, {
    method: 'post',
    headers: {
      // need to set access token to header for auth process
      //https://crystallize.com/learn/developer-guides/api-overview/authentication
      'content-type': 'application/json'
      //'access-token': 'process.env.CRYSTALLIZE_ACCESS_TOKEN
    },
    credentials: 'include',
    body
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const json = await response.json();

  if (json.errors) {
    console.error('Search API encountered an error', json.errors);
  }

  return json;
}
