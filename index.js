exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from cicd github Lambda! Report lambda"),
  };
  return response;
};
