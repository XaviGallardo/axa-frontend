class GnomeService {
  constructor() {
    this.BrastlewarkCensus =
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  }

  async getCensus() {
    try {
      const response = await fetch(this.BrastlewarkCensus);
      const data = await response.json();
      const { Brastlewark } = data;
      return Brastlewark;
    } catch (error) {
      return error;
    }
  }
}

const gnomeService = new GnomeService();

export default gnomeService;
