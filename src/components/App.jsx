import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../data/recipes.json';
import { Component } from 'react';

export class App extends Component {
  handleClick = () => {
    console.log('Hello Im Clicked');
  };
handleClickTest = name => {
  console.log(`Hello! I'm clicked by ${name}`);
};

render() {
  return (
    <>
      <RecipeList recipes={recipes} />
      <button onClick={this.handleClick}>Click Me</button>
      <button onClick={() => this.handleClickTest('daisy')}>Click Me</button>
    </>
  );
}
}