// import {ProductState} from '../products/state/product.reducer'; => Removed because this causes the module to be loaded (not lazy loaded)

export interface State {
  // products: ProductState; => Removed because Product is lazy loaded
  user: any;
}
