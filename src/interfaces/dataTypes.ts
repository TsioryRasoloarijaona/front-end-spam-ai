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