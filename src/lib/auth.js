import { postFunc } from "./api";

export function getToken() {
  const token = localStorage.getItem("token") || null;
  return token;
}

export function setToken(token) {
  localStorage.setItem("token", token);
  return true;
}

export function isLoggedIn() {
  if (!getToken()) {
    return false;
  }
  return true;
}

/**
 *
 * @param {string} username
 * @param {number} phone
 * @param {string} dob
 * @returns {Array}
 */
export async function login(username, phone, dob) {
  try {
    const data = {
      username: username,
      phone: phone,
      dob: dob,
    };
    // const token = await postFunc("/user/login", data);
    const token = '1234abcdef567gh';
    return [token, null];
  } catch (error) {
    return [null, error];
  }
}

export function logout() {
  if (!getToken()) {
    return;
  }
  localStorage.removeItem("token");
}

export async function signup(username, fname, lname, phone, school, dob) {
  try {
    const data = {
      username: username,
      fname: fname,
      lname: lname,
      school: school,
      phone: phone,
      dob: dob,
    };
    const res = await postFunc("/user/signup", data);
    return [res, null];
  } catch (error) {
    return [null, error];
  }
}