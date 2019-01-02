import { cloneableGenerator } from 'redux-saga/utils';
import { call, put } from 'redux-saga/effects';
import {  initIngredientsSaga } from './burgerbuilder';
import * as actions from '../actions/index';
import axios from '../../axios-orders';

describe('init ingredients saga', () => {
  let generator;
  beforeEach(()=>{
    generator = cloneableGenerator(initIngredientsSaga)(actions);
  })
  it('should get ingredients', ()=>{
    const clone = generator.clone();
    expect(clone.next().value).toEqual(call(axios.get, '/ingredients.json'))
  })

  it('should set ingredients', ()=>{
    const clone = generator.clone();
    const ingredients = {"bacon":0,"cheese":0,"meat":1,"salad":0}
    clone.next();
    expect(clone.next({ data: ingredients }).value).toEqual(put(actions.setIngredients(ingredients)))
    expect(clone.next().done).toEqual(true);
  })

  it('should throw error getting ingredients', ()=>{
    const clone = generator.clone();
    clone.next();
    const error = {};
    expect(clone.throw(error).value).toEqual(put(actions.fetchIngredientsFailed()))
  })


});
