export async function fetchUserData(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const data = await response.json();
    return data;
  }
  
  export async function fetchUserActivity(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
    const data = await response.json();
    return data;
  }