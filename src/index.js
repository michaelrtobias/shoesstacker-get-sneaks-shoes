const getSneaks = require("./getSneaks.js");
exports.handler = async (event) => {
  console.log("event:", event);
  let { body } = event;
  console.log("typeof body:", typeof body);
  body = typeof body === "string" ? JSON.parse(body) : body;
  try {
    const results = await getSneaks(body);
    let response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
      },
      body: JSON.stringify(results),
    };
    return response;
  } catch (e) {
    console.log(e.message);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
};
