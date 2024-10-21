/**
 * Creates a session model from the provided data.
 *
 * @param {Object} data - Data related to user average sessions (day and session length)
 * @returns {Object} - Formatted session model
 */
export function GetModelSessions(data) {
    return {
      userId: data.userId,
      sessions: data.sessions.map((session) => ({
        day: session.day,
        sessionLength: session.sessionLength,
      })),
    };
  }
  