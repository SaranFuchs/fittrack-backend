export function dataResponse(data, init = {}) {
  return Response.json({ data }, init);
}

export function emptyResponse() {
  return new Response(null, { status: 204 });
}

export function optionsResponse() {
  return new Response(null, { status: 204 });
}
