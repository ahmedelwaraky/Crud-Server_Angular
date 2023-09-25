import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ProductwithAPIService } from 'src/app/services/productwith-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  productId: any;

  constructor(
    private productService: ProductwithAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next: (myProduct: Iproduct[]) => {
        this.products = myProduct;
      },
    });
  }

  deleteItem(id: any) {
    this.productService.removeProduct(id).subscribe({
      next: (productId) => {
        this.productService.getAllProduct().subscribe({
          next: (products) => {
            this.products = products;
          },
        });
      },
    });
  }
}
