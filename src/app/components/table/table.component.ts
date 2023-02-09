import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {ReceivedDataState} from "../../state/recevied-data-state";
import {DataModel} from "../../models/data";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  private _sortDir = 1;
  private _data: DataModel[];
  public keyData: any;
  public get data(): DataModel[] {
    return this._data;
  }
  public currentPage: number = 1;
  public count: number = 5;
  constructor(private store: Store) {
    // empty
  }

  public ngOnInit(): void {
    this.store.select(ReceivedDataState.getDataList).subscribe(res => {
      if (res) {
        this._data = res.data;
        this.keyData = Object.keys(this._data?.flat()[0]);
      }
    });
  }
  public sorting($event: any) {
    if ($event === 'name') {
      this._sortDir = this._sortDir === 1 ? -1 : 1;
      this.data.sort((a, b) => {
        return a.name.localeCompare(b.name) * this._sortDir;
      })
    }
  }
}
