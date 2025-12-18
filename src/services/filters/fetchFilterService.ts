import { selectMainIngredients, selectCuisines } from '../../db'
import { FilterOptionType, LanguageType } from "../../types/";

export const getMainIngredientsService = async (language: LanguageType): Promise<FilterOptionType[]> => {
  try {
    const data = await selectMainIngredients(language);
    return data;
  } catch (error) {
    throw error
  }
};

export const getCuisinesService = async (language: LanguageType): Promise<FilterOptionType[]> => {
  try {
    const data = await selectCuisines(language);
    return data;
  } catch (error) {
    throw error
  }
};