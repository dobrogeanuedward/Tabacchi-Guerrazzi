import {getProducts as getManagedProducts,getProductBySlug as getManagedProductBySlug} from './store.mjs';
import {catalogProducts} from '../data/catalog-products.mjs';

// Keep photographed public records available in both the Node and static builds.
// Database records remain independent and keep their existing publication rules.
export function getProducts(options={}){
 const managed=getManagedProducts(options);
 const slugs=new Set(managed.map(product=>product.slug));
 return [...catalogProducts.filter(product=>!slugs.has(product.slug)),...managed];
}
export function getProductBySlug(slug){
 return getManagedProductBySlug(slug)||catalogProducts.find(product=>product.slug===slug)||null;
}
