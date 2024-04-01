import { getFunc } from "./api";

const dummyUser = {
    "username":"john",
    "fname":"John",
    "lname":"Honai",
    "phone":1234567890,
    "dob":"27/03/2005",
    "is_admin":true
};

export async function getUserDetails(id) {
  try {
    // const user = await getFunc(`/user/info/${id}`);
    return dummyUser;
  } catch (error) {
    return error;
  }
}


export async function isAdminFunc(token){
    if(!token) return;
    return await getUserDetails(token).is_admin;
}