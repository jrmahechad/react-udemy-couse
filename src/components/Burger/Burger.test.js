import Burger from './Burger';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
configure({
  adapter: new Adapter()
});

describe('Burger Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Burger ingredients={{}} />);
  });
  it('should render and empty burger', () => {
    expect(wrapper.find(BurgerIngredient)).toHaveLength(2);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toBe('Please start adding ingredients!')
  });
  it('should render and burger with one of each ingredient', () => {
    wrapper.setProps({
      ingredients: { salad: 1, bacon: 1, cheese: 1, meat: 1}
    })
    expect(wrapper.find(BurgerIngredient)).toHaveLength(6);
  });
});
