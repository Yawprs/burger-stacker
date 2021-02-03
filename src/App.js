import './App.css';
import IngredientsList from './IngredientsList';
import BurgerStack from './BurgerStack';
import Ingredient from './Ingredient'

function App() {
let ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

  return (
    <div className="App">
      <IngredientsList />
      <Ingredient />
      {ingredients.map((ingredient) => {
        return <Ingredient name={ingredient.name} color={ingredient.color} />
      })}
      <BurgerStack />
    </div>
  );
}

export default App;
