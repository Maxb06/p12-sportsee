/**
 * Creates a user model from the provided data.
 *
 * @param {Object} data user data in the format of the SportSee API response
 * @returns {Object} the user model
 */
export function GetModelUser(data) {
    return {
      id: data.id,
      firstName: data.userInfos.firstName,
      lastName: data.userInfos.lastName,
      age: data.userInfos.age,
      todayScore: data.todayScore || data.score,
      keyData: data.keyData,
    };
  }
  