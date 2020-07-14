import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {Product} from '../product';
import * as AppState from '../../state/app.state'; // This way we can access the global application state

// Extend the State interface to include the product slice
export interface IState extends AppState.IState {
  products: IProductState;
}

export interface IProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: IProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

//#region selectors

const getProductFeatureState = createFeatureSelector<IProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

//#endregion

export const productReducer = createReducer<IProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state): IProductState => {
    console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
