import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductsList } from '../models/productsLists';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	productsArray: Iproduct[];
	constructor(private router: Router) {
		//to navigate
		this.productsArray = ProductsList;   //MyArray == Static Array 
	}

	//get all
	getAllProducts() {
		return this.productsArray;
	}

	//get by id
	getProductId(productId: number): Iproduct | undefined {
		return this.productsArray.find(
		(product: Iproduct) => product.id == productId
		);
	}

	//add
	addNewProduct(product: any) {
		this.productsArray.push(product);
	}

	//remove
	RemoveItem(productId: number) {
		this.productsArray = this.productsArray.filter((product) => {
		return product.id != productId;
		});
		this.router.navigate(['/products']);
	}
  //edit
	editProduct(pId: number, product: any) {
		this.productsArray = this.productsArray.map((p) => {
		if (p.id == pId)
			p = {id: pId,...product,};
		return p;
		});
		console.log(this.productsArray);
	}
}
