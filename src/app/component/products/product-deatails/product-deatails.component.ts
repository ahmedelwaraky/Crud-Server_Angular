import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ProductwithAPIService } from 'src/app/services/productwith-api.service';

@Component({
	selector: 'app-product-deatails',
	templateUrl: './product-deatails.component.html',
	styleUrls: ['./product-deatails.component.css']
})
	export class ProductDeatailsComponent  implements OnInit{
		//variables
		productId : any;
		product : any | Iproduct;

		constructor(private _activeRoute : ActivatedRoute  , private productService : ProductwithAPIService ){}

		ngOnInit(): void {
			this.productId = this._activeRoute.snapshot.params['id']  //get Id
			console.log(this._activeRoute.snapshot.params['id']);

			this.product = this.productService.getProductById(this.productId)
			.subscribe({
				next:(myProduct : any) => {
					this.product = myProduct;
				},
			}) 

		
		}
}
