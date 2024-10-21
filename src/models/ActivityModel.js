/**
 * Creates an activity model from the provided data.
 *
 * @param {Object} data - Data related to user activity (sessions with day, kg, calories)
 * @returns {Object} - Formatted activity model
 */
export function GetModelActivity(data) {
    return {
      userId: data.userId,
      sessions: data.sessions.map((session) => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      })),
    };
  }
  