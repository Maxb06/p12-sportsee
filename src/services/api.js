import { GetModelUser } from '../models/userModel';

export const apiService = {
  async getUserData(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) throw new Error(`Failed to fetch data for user ${userId} from API.`);
    const data = await response.json();
    return GetModelUser(data.data);
  },

  async getUserActivity(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
    if (!response.ok) throw new Error(`Failed to fetch activity for user ${userId} from API.`);
    const data = await response.json();
    return data.data;
  },

  async getUserAverageSessions(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    if (!response.ok) throw new Error(`Failed to fetch average sessions for user ${userId} from API.`);
    const data = await response.json();
    return data.data;
  },

  async getUserPerformance(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
    if (!response.ok) throw new Error(`Failed to fetch performance for user ${userId} from API.`);
    const data = await response.json();
    return data.data;
  },
};



/*
import { GetModelUser } from '../models/userModel';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';


const useMock = true; // false pour api

export const dataFactory = {
  getUserData: async function(userId) {
    if (useMock) {
      // Recup les données mockées
      const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId, 10));
      return user ? GetModelUser(user) : null;
    } else {
      // Appel l'api réelle
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      if (!response.ok) throw new Error(`Failed to fetch data for user ${userId} from API.`);
      const data = await response.json();
      return GetModelUser(data.data);
    }
  },

  getUserActivity: async function(userId) {
    if (useMock) {
      const activity = USER_ACTIVITY.find((user) => user.userId === parseInt(userId, 10));
      return activity ? activity.sessions : [];
    } else {
      const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
      if (!response.ok) throw new Error(`Failed to fetch activity for user ${userId} from API.`);
      const data = await response.json();
      return data.data;
    }
  },

  getUserAverageSessions: async function(userId) {
    if (useMock) {
      const sessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId, 10));
      return sessions ? sessions.sessions : [];
    } else {
      const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
      if (!response.ok) throw new Error(`Failed to fetch average sessions for user ${userId} from API.`);
      const data = await response.json();
      return data.data;
    }
  },

  getUserPerformance: async function(userId) {
    if (useMock) {
      const performance = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId, 10));
      return performance ? performance.data : [];
    } else {
      const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
      if (!response.ok) throw new Error(`Failed to fetch performance for user ${userId} from API.`);
      const data = await response.json();
      return data.data;
    }
  }
};
*/