import { GetModelUser } from '../models/userModel';
import { GetModelActivity } from '../models/ActivityModel';
import { GetModelPerformance } from '../models/PerformanceModel';
import { GetModelSessions } from '../models/SessionsModel';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/mockData';

export const mockService = {
  /**
   * Fetches user data from the mock data source using the provided user ID.
   * Returns a user model created from the response data, or null if the user ID is not found.
   * @param {string} userId - The user ID to fetch data for
   * @returns {Object} A user model or null
   */
  async getUserData(userId) {
    const user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId, 10));
    return user ? GetModelUser(user) : null;
  },

  /**
   * Fetches user activity data from the mock data source using the provided user ID.
   * Returns a sessions model created from the response data, or null if the user ID is not found.
   * @param {string} userId - The user ID to fetch data for
   * @returns {Object} A session model or null
   */
  async getUserActivity(userId) {
    const activity = USER_ACTIVITY.find((user) => user.userId === parseInt(userId, 10));
    return activity ? GetModelActivity(activity) : null;
  },

  /**
   * Fetches user average session data from the mock data source using the provided user ID.
   * Returns a session model created from the response data, or null if the user ID is not found.
   * @param {string} userId - The user ID to fetch data for
   * @returns {Object} A session model or null
   */
  async getUserAverageSessions(userId) {
    const sessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId, 10));
    return sessions ? GetModelSessions(sessions) : null;
  },

  /**
   * Fetches user performance data from the mock data source using the provided user ID.
   * Returns a performance model created from the response data, or null if the user ID is not found.
   * @param {string} userId - The user ID to fetch data for
   * @returns {Object} A performance model or null
   */
  async getUserPerformance(userId) {
    const performance = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId, 10));
    return performance ? GetModelPerformance(performance) : null;
  },
};
