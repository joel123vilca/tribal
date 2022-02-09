import api from "./HttpApi";

class BusinessController {
  static async getBusiness() {
    try {
      const response = await api.get(`/business`);
      return response.data.businesses;
    } catch (err) {
      throw err;
    }
  }

  static async getBusinessById(payload) {
    try {
      const response = await api.get(`/business/${payload.businessId}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async postBusiness(payload) {
    try {
      const response = await api.post(`/business`, payload);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async putBusiness(payload) {
    try {
      const response = await api.put(
        `/business/${payload.businessId}`,
        payload
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async deleteBusiness(payload) {
    try {
      const response = await api.delete(`/business/${payload.businessId}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default BusinessController;
