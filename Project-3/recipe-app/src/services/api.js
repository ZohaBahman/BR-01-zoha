import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = async (searchText) => {
    const response = await axios.get(`${BASE_URL}/search.php`, {
        params: { s: searchText }
    });
    return response.data.meals || [];
};

export const getMealDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/lookup.php`, {
        params: { i: id }
    });
    return response.data.meals ? response.data.meals[0] : null;
};