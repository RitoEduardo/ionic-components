import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  get urlPicture(){
    const img = 'https://scontent.fntr6-1.fna.fbcdn.net/v/t1.0-9/53287676_10156163298162643_3422339596262834176_o.jpg?_nc_cat=107&_nc_ohc=3PGzQuj7B1QAX94uNki&_nc_ht=scontent.fntr6-1.fna&oh=cc5f21dfedba8ed7e96c90549f5f309c&oe=5ECF1141';
    return img;
  }

  get path(){
    return '/assets/img/profile.jpg';
  }

  constructor() { }

  ngOnInit() {
  }

}
