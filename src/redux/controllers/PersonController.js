import api from "./HttpApi";

class PersonController {
  static async getPeople(payload) {
    try {
      const response = await api.get(`/business/${payload.businessId}/persons`);
      return response.data.persons;
    } catch (err) {
      throw err;
    }
  }

  static async postPerson(payload) {
    try {
      const response = await api.post(
        `/business/${payload.businessId}/persons`,
        payload
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async putPerson(payload) {
    try {
      const response = await api.put(
        `/business/${payload.businessId}/persons/${payload.personId}`,
        payload
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async deletePerson(payload) {
    try {
      const response = await api.delete(
        `/business/${payload.businessId}/persons/${payload.personId}`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default PersonController;
