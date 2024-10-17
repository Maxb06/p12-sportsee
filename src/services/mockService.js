import { GetModelUser } from '../models/userModel';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

export const mockService = {
  async getUserData(userId) {
    const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId, 10));
    return user ? GetModelUser(user) : null;
  },

  async getUserActivity(userId) {
    const activity = USER_ACTIVITY.find((user) => user.userId === parseInt(userId, 10));
    return activity ? activity.sessions : [];
  },

  async getUserAverageSessions(userId) {
    const sessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId, 10));
    return sessions ? sessions.sessions : [];
  },

  async getUserPerformance(userId) {
    const performance = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId, 10));
    return performance ? performance.data : [];
  },
};