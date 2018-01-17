import ApiClient from '../api/client'
import { loading, loadError } from './loading'

export const CREATE_RECIPE = 'CREATE_RECIPE'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'
export const TOGGLE_LIKE_RECIPE = 'TOGGLE_LIKE_RECIPE'

const api = new ApiClient()

export const createRecipe = (newRecipe) => {
  return {
    type: CREATE_RECIPE,
    payload: newRecipe
  }
}

export const fetchRecipes = () => {
  return dispatch => {
    const path = '/recipes'
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const toggleLikeRecipe = (recipeId) => {
  return {
    type: TOGGLE_LIKE_RECIPE,
    payload: recipeId
  }
}
