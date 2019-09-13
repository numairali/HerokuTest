import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { filter, map } from 'rxjs/operators';
import { IEpisode } from '../shared/model/episodes.model';
import { MatSort } from '@angular/material';
import { UserService } from '../user-detail/user-detail.service';
import { IUser } from '../shared/model/user.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'summary', 'season', 'number',
                                'runtime', 'url', 'airtime',
                                'airdate' // , 'airstamp'
                              ];
  dataSource: any;
  episodes: IEpisode[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected homeService: HomeService, protected userService: UserService) {
  }

  ngOnInit() {
    this.queryEpisode();
  }

  queryEpisode() {
    this.homeService
      .query()
      .pipe(
        filter((res: HttpResponse<IEpisode[]>) => res.ok),
        map((res: HttpResponse<IEpisode[]>) => res.body)
      )
      .subscribe(
        (res: IEpisode[]) => {
          this.episodes = res;
          console.log(this.episodes);
          this.dataSource = new MatTableDataSource<IEpisode>(this.episodes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (res: HttpErrorResponse) => console.log('error')
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

