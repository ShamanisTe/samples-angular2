import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector:    'app-aside',
  templateUrl: './aside.component.html',
  styleUrls:   ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  menus: Array<Menu> = [
    {text: 'Home', link: '/'},
    {text: 'Simple todo', link: '/todos'},
    {text: 'Router', link: '/router'},
    {text: 'HTTP request', link: '/request'},
    {text: 'DI - providers', link: '/providers'},
    {text: 'Form', link: '/form'},
    {text: 'Animations', link: '/'},
    {text: 'i18n', link: '/'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
