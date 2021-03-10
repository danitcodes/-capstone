export default async function orderApi({
  uri = process.env.ORDER_API_URL,
  customer,
  cart,
  payment,
  total,
  additionalInformation
}) {
  const body = JSON.stringify({
    customer,
    cart,
    payment,
    total,
    additionalInformation
  });

  const response = await fetch(uri, {
    method: 'post',
    headers: {
      // need to set access token to header for auth process
      //https://crystallize.com/learn/developer-guides/api-overview/authentication
      'content-type': 'application/json'
      //'access-token': 'process.env.CRYSTALLIZE_ACCESS_TOKEN'
    },
    credentials: 'include',
    body
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const json = await response.json();

  if (json.errors) {
    console.error('Order API encountered an error', json.errors);
  }

  return json;
}
