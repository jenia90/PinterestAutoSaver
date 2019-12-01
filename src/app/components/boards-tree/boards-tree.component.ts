import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoardApiService, BoardData } from 'src/app/services/board-api.service';
import { Board } from 'src/app/models/board';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-boards-tree',
  templateUrl: './boards-tree.component.html',
  styleUrls: ['./boards-tree.component.sass']
})
export class BoardsTreeComponent implements OnInit, OnDestroy {

  public pinId: number;
  public sub: any;
  public boards: Board[];
  public boardTreeControl = new FlatTreeControl<Board>(node => 1, node => false);

  constructor(private boardsApi: BoardApiService,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(p => {
      this.pinId = +p.get('pinId');
    });

    // this.boardsApi.getAllPins().subscribe(b => {
    //   this.boards = b.data;
    // });
    this.getMockData().subscribe(p => {
      this.boards = p.data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  private getMockData() {
    return this.http.get<BoardData>('./assets/mockPins.json');
  }

}
