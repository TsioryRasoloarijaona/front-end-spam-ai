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
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  object: string;
  body: string;
  sendDateTime: string;
}

export interface MessageStructure {
  id: string;
  object: string;
  body: string;
  sendDateTime: string;
  messageSender: {
    email: string;
    type: string;
  };
  receivers: Array<{
    email: string;
    type: string;
    status: string;
  }>;
  spam: boolean;
}

export interface messagesPage {
  content: MessageStructure[];
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
