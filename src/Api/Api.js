import axios from 'axios';
const headers = {
  'X-Auth-Token': 'cb0cc3515d3e4c8c8a6f357387dac504'
};
const plan = "TIER_ONE";

export default class Api {
  static async getCompetitions(url) {
    const response = await axios.get(url, {headers, params: {
      plan,
  },});
    const data = response.data;
    return data;
  }

  static async getCompetition(url) {
    const response = await axios.get(url, {headers, params: {
      plan,
  },});
    const data = response.data;
    return data;
  }
}
