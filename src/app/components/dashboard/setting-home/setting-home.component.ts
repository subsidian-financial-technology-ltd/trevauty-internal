import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-home',
  templateUrl: './setting-home.component.html',
  styleUrls: ['./setting-home.component.scss']
})
export class SettingHomeComponent {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Account',
            link: '/dashboard/settings/user',
            index: 0
        }, 
        // {
        //     label: 'Account Settings',
        //     link: '/dashboard/settings/edit-user',
        //     index: 1
        // },
        {
          label: 'Option2',
          // link: '/dashboard/settings/auth',
          index: 2
      }, 
      {
          label: 'Option3',
          // link: '/dashboard/settings/help',
          index: 3
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}




// *785#
// 4
// 2
