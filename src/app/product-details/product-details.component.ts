import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Router,ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
selector: 'app-product-details',
templateUrl: './product-details.component.html',
styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id:number;
product:Product;
constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

ngOnInit(): void {
this.product = new Product();

this.id = this.route.snapshot.params['id'];

this.productService.getProduct(this.id)
.subscribe(data => {
console.log(data)
this.product = data;
}, error => console.log(error));
}
list(){
this.router.navigate(['products']);
}



}

