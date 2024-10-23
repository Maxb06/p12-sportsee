import { GetModelUser } from '../models/userModel';
import { GetModelActivity } from '../models/ActivityModel';
import { GetModelPerformance } from '../models/PerformanceModel';
import { GetModelSessions } from '../models/SessionsModel';
import { GetModelApiError } from '../models/ApiErrorModel';

const URL = import.meta.env.VITE_API_URL;

export const apiService = {
  async getUserData(userId) {
    try {
      const response = await fetch(`${URL}/user/${userId}`);
      if (!response.ok) {
        return GetModelApiError(
          response.status,
          'ressource non trouvée',
          `Erreur lors de la tentative de récupération des informations de l'utilisateur ${userId}.`,
        );
      }
      const data = await response.json();
      return GetModelUser(data.data);
    } catch {
      return GetModelApiError(
        500,
        'Erreur serveur',
        'Impossible de se connecter à l’API.',
      );
    }
  },

  async getUserActivity(userId) {
    try {
      const response = await fetch(`${URL}/user/${userId}/activity`);
      if (!response.ok) {
        return GetModelApiError(
          response.status,
          'Impossible de récupérer les données d’activité',
          `Erreur lors de la tentative de récupération des activités de l'utilisateur ${userId}.`,
        );
      }
      const data = await response.json();
      return GetModelActivity(data.data);
    } catch {
      return GetModelApiError(
        500,
        'Erreur serveur',
        'Impossible de se connecter à l’API.',
      );
    }
  },

  async getUserAverageSessions(userId) {
    try {
      const response = await fetch(`${URL}/user/${userId}/average-sessions`);
      if (!response.ok) {
        return GetModelApiError(
          response.status,
          'Impossible de récupérer les sessions moyennes',
          `Erreur lors de la tentative de récupération des sessions de l'utilisateur ${userId}.`,
        );
      }
      const data = await response.json();
      return GetModelSessions(data.data);
    } catch {
      return GetModelApiError(
        500,
        'Erreur serveur',
        'Impossible de se connecter à l’API.',
      );
    }
  },

  async getUserPerformance(userId) {
    try {
      const response = await fetch(`${URL}/user/${userId}/performance`);
      if (!response.ok) {
        return GetModelApiError(
          response.status,
          'Impossible de récupérer les données de performance',
          `Erreur lors de la tentative de récupération des performances de l'utilisateur ${userId}.`,
        );
      }
      const data = await response.json();
      return GetModelPerformance(data.data);
    } catch {
      return GetModelApiError(
        500,
        'Erreur serveur',
        'Impossible de se connecter à l’API.',
      );
    }
  },
};
