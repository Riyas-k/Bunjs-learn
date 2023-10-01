import axios from "axios";

export default async function fetchUser(user: string) {
  const res = await axios.get(`https://api.github.com/users/${user}`);
  return res.data.avatar_url
}
