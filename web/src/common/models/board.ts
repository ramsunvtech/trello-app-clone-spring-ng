export class BoardItem {
  id: number;
  title: string;
  boardId: number;
}

export class BoardListState {
  boardItems: BoardItem[];
}
