const baseUrl = process.env.REACT_APP_URL;

/**
 * Sending GET requests to the server and return the data.
 *
 * @param {String} url   Extension for the base url to get data.
 *
 * @return {Promise<Object>}
 */
const fetchGET = async (url) => {
  const response = await fetch(`${baseUrl}/${url}`);
  const json = await response.json();
  return json;
};

/**
 * Get all blogs from the server.
 *
 * @param {Number} limit     Default 5 blogs per page.
 * @param {Number} offset    offset number for pagination.
 *
 * @return {Promise<Object>}
 */
export const getAllBlogs = async (offset, limit = 5) =>
  fetchGET(`blog?limit=${limit}&offset=${offset}`);

/**
 * Get all unique tags from the server.
 *
 * @return {Promise<Object>}
 */
export const getAllTags = async () => fetchGET('tag');

/**
 * Get all blogs that have the tag name in it.
 *
 * @param {String} tag     Tag name to search for.
 * @param {Number} offset  Offset number for pagination.
 * @param {Number} limit   Default 5 blogs per page.
 *
 * @return {Promise<Object>}
 */
export const getBlogByTag = async (tag, offset, limit = 5) =>
  fetchGET(`blog/${tag}/tag?limit=${limit}&offset=${offset}`);
