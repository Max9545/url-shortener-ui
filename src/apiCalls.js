export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}


export const postUrls = (urlTitle, longURL ) => {
  return fetch('http://localhost:3001/api/v1/urls',{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title:urlTitle,
      long_url:longURL
    })
  })
  .then(res => res.json())
}