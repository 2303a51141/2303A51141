import axios from "axios";

const API = "http://4.224.186.213/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzYTUxMTQxQHNydS5lZHUuaW4iLCJleHAiOjE3ODE3NjQ5NTUsImlhdCI6MTc4MTc2NDA1NSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjMxMWUwN2VjLTk0NjktNDQ2MS05ZmJjLWM2NTgxZWM4ZjI2NSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImphcmF0aGkgbWFuaSB0ZWphIHBhdGVsIiwic3ViIjoiMTc3Mzg1MTYtODQzZS00OTRhLTg2ZDQtYjQ3NmJmZGI3M2Y3In0sImVtYWlsIjoiMjMwM2E1MTE0MUBzcnUuZWR1LmluIiwibmFtZSI6ImphcmF0aGkgbWFuaSB0ZWphIHBhdGVsIiwicm9sbE5vIjoiMjMwM2E1MTE0MSIsImFjY2Vzc0NvZGUiOiJiRHJlQXEiLCJjbGllbnRJRCI6IjE3NzM4NTE2LTg0M2UtNDk0YS04NmQ0LWI0NzZiZmRiNzNmNyIsImNsaWVudFNlY3JldCI6Ik5TWnNoYmVSek5DR2NmWXMifQ.bvZtM5iFSXawmRoWDPIGQHXNoWPQurstcqjmyx_-amA";

export const getNotifications = async () => {
  try {
    const response = await axios.get(API, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    console.log("API SUCCESS:", response.data);

    return response.data.notifications;
  } catch (error) {
    console.log("API ERROR:", error.response?.data || error.message);
    throw error;
  }
};