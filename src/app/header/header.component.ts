import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  // @Output() featureSelected = new EventEmitter<string>();
  constructor(
    private router: Router,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  // onSelect(feature: string) {
  //   if(feature === 'recipe') {
  //     this.router.navigate(['/recipes']);
  //   }
  //   else {
  //     this.router.navigate(['/shoppinglist']);
  //   }
  //   //this.featureSelected.emit(feature);
  // }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
