import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {FetchDataService} from "../services/fetch-data.service";
import {tap} from "rxjs";
import {DataModel} from "../models/data";

export type DataStateModel = {
  data: DataModel[];
}

export class GetData {
  public static readonly type = '[Data] Get';
}

@State<string>({
  name: 'ReceivedDataState',
  defaults: ''
})

@Injectable()
export class ReceivedDataState {
  constructor(private dataService: FetchDataService) {
  }

  @Selector()
  public static getDataList(model: DataStateModel): DataStateModel {
    return model;
  }

  @Action(GetData)
  public getData(ctx: StateContext<DataStateModel>): any {
    return this.dataService.fetchData().pipe(tap(res => {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        data: res
      })
    }));
  }
}
