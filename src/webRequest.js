export const doGet = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((json) => json);

export const doPost = (url, payload) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);