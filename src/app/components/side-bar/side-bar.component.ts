import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public isActive: boolean = true;

  public linksSideBar: any[] = [
    {title: 'Dashboard', isActive: false, icon: faHouse, page: ''},
    {title: 'Vendas', isActive: false, icon: faShoppingCart, page: 'vendas'},
  ]; 
  public page: string = 'Dashboard';

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  changePage(links: any): void {
    this.page = links.title;
    this.router.navigate([links.page]);
  }


}
