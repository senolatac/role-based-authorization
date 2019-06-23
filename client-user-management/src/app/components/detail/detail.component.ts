import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  userId: string;
  currentUser: User;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('detailUser'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.userId = params.get('id');
      }
    });
  }

}
