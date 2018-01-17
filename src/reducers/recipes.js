import { FETCHED_RECIPES, CREATE_RECIPE, TOGGLE_LIKE_RECIPE, FETCHED_ONE_RECIPE } from  '../actions/recipes'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_RECIPES :
      return payload.slice()

    case FETCHED_ONE_RECIPE :
      return [payload].concat(state)

    case TOGGLE_LIKE_RECIPE :
      return state.map((recipe) => {
        if (recipe._id !== payload) return recipe
        return { ...recipe, liked: !recipe.liked }
      })

    case CREATE_RECIPE :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
