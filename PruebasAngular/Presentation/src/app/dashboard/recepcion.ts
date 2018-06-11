interface PagedDataContract {
  page: number,
  pageSize: number,
  pageCount: number
}

export class RecepcionSearchInput implements PagedDataContract {
  public page: number;
  public pageSize: number;
  public pageCount: number;
}

export class RecepcionResponse implements PagedDataContract {
  public page: number;
  public pageSize: number;
  public pageCount: number;
  public descripcion: string;
}
