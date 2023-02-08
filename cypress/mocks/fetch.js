const { tokenResponse, invalidTokenResponse } = require("./token");
const { questionsResponse, invalidTokenQuestionsResponse } = require("./questions");

const mockFetchWithToken = ({simulateExpiredToken} = {simulateExpiredToken: false}) => {
  return (url) => {
    const urls = {
      "https://opentdb.com/api_token.php?command=request": () => {
        return simulateExpiredToken ? invalidTokenResponse : tokenResponse;
      },
      [`https://opentdb.com/api.php?amount=5&token=${tokenResponse.token}`]: () => questionsResponse,
      "https://opentdb.com/api.php?amount=5&token=INVALID_TOKEN": () => invalidTokenQuestionsResponse,
    };
  
    return Promise.resolve({
      status: Object.keys(urls).includes(url) ? 200 : 404,
      ok: Object.keys(urls).includes(url),
      json: () => {
        return Object.keys(urls).includes(url)
          ? Promise.resolve(urls[url]())
          : Promise.reject(new Error("Not Found"));
      },
    });
  }
}







const fetch = mockFetchWithToken();

module.exports = { fetch, mockFetchWithToken };
