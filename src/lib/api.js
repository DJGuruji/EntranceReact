import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
});

async function getFunc(url) {
  const res = await instance.get(url);
  return res.data;
}

async function postFunc(url, payload) {
  const res = await instance.post(url, payload);
  return res.data;
}

async function putFunc(url, payload) {
  const res = await instance.put(url, payload);
  return res.data;
}

async function delFunc(url, payload) {
  const res = await instance.delete(url, payload);
  return res.data;
}

export { getFunc, postFunc, putFunc, delFunc };