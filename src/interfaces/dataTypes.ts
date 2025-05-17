export interface PeopleInfoDTO {
  firstName: string;
  secondName: string | null;
  lastName: string;
  gender: string;
}

export interface AccountDTO {
  email: string;
  peopleInfoDTO: PeopleInfoDTO; 
}

export interface MessageToSend {
    id : number ;
    accountDTO : AccountDTO ;
    object : string ;
    body : string ;
    sendDateTime : string ;
}

export interface messagesPage {
  content : MessageToSend[] ,
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      sorted: boolean;
      empty: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
}