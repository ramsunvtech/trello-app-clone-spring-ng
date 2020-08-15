import { Observable } from 'rxjs';

// models
import { BoardItem } from './../../../common/models/board';

export interface AppBoardListComponentInterface {
  boardList: Observable<BoardItem[]>;
}
