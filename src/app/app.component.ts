import { Component, OnInit } from '@angular/core';
import { UserService } from './user-detail/user-detail.service';
import { IUser } from './shared/model/user.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bulkyTest';
  user: IUser;
  avatar: string;
  constructor(protected userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.queryUser();
  }
  queryUser() {
    this.userService
      .query()
      .pipe(
        filter((res: HttpResponse<IUser>) => res.ok),
        map((res: HttpResponse<IUser>) => res.body) // userService
      )
      .subscribe(
        (res: any) => {
          this.user = res.results;
          this.user = this.user[0];
          console.log(this.user);
          this.avatar = this.user.picture.large;
          console.log(this.avatar);
        },
        (res: HttpErrorResponse) => console.log('error')
      );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '250px',
      data: {
        user: this.user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
