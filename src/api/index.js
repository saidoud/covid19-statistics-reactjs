import axios from "axios";
//api URL
const url = "https://covid19.mathdro.id/api";

//Get data Function
export const fetchData = async (country) => {
  let updatedurl = url;
  if (country) updatedurl = `${url}/countries/${country}`;
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(updatedurl);

    const dataUpdated = {
      confirmed,
      deaths,
      recovered,
      lastUpdate,
    };
    return dataUpdated;
  } catch (error) {}
};

//Get Daily Data
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {}
};

//Get Daily Data New Api

export const uptadeDailyData = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
//Get Contry Data

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

//Get Data By country

export const getDataByCountry = async (country) => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(`${url}/countries/${country}`);
    return {
      confirmed,
      deaths,
      recovered,
      lastUpdate,
    };
  } catch (error) {}
};
