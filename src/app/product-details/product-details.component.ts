import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
 
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ){}

  ngOnInit(){
    // first get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find the producht that correspond with the id providet in route.
    this.product = products.find( product => product.id === productIdFromRoute); 
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Dein Produkt wurde dem Warenkorb hinzugefügt.');
  }
  



}
