import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ProductsList } from '../../../models/productsLists';
import { ProductwithAPIService } from 'src/app/services/productwith-api.service';
import { Iproduct } from 'src/app/models/iproduct';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  //Variable
  productId: any;
  product: Iproduct | any;

  constructor(
    private router: Router,
    private activateroute: ActivatedRoute,
    private productservice: ProductwithAPIService
  ) {}

  //form group (Reactice forms)
  productForm = new FormGroup({
    productName: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  });

  get getProductName() {
    return this.productForm.controls['productName'];
  }
  get getProductPrice() {
    return this.productForm.controls['price'];
  }
  get getProductQuantity() {
    return this.productForm.controls['quantity'];
  }

  ngOnInit(): void {
    this.productId = this.activateroute.snapshot.params['id'];
    console.log(this.productId);

    if (this.productId != 0) {
      this.productservice.getProductById(this.productId).subscribe({
        next: (product: any) => {
          this.productForm.controls['productName'].setValue(
            product.productName
          );
          this.productForm.controls['price'].setValue(
            product.price
          );
          this.productForm.controls['quantity'].setValue(
            product.quantity
          );
        },
      });
    } else {
      // add code
      this.productservice.addNewProduct(this.productForm.value).subscribe();
    }
  }

  formOperation(e: Event) {
    e.preventDefault();
    if (this.productId == 0) {
      //Add New PRoduct
      this.productservice.addNewProduct(this.productForm.value).subscribe();
    } else {
      this.productservice
        .editProduct(this.productId, this.productForm.value)
        .subscribe();
    }
    this.router.navigate(['/products']);
  }
}
