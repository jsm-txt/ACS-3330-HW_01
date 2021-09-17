import data from './data.json'

// const price = data.map( function(value ){return value.name + value.price })

const allCategories = data.map(obj => obj.category)
// const price = data.map( function(value ){return value.name + value.price })

//Returns true if the category is toys and false is not true
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!
  // Make an arr array of the keys
  const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = allCategories.reduce((obj, cat) => {
    obj[cat] = (obj[cat] || 0) + 1;
        return obj;

  // check if cat exists as a key on obj
  // if category key does not exist
  // add that key with a value of 1
  // else 
  // add 1 to the current value of that key
}, {}) // !!! Be sure to define the initial value as an Object!
console.log(categoriesWithCounts)

export {
  allCategories, 
  categoriesWithCounts, 
  categoriesUnique
}
export default data