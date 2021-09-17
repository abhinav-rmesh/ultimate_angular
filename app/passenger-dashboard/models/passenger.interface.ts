export interface Passenger{
    id: number;
    fullname: String;
    checkedin: boolean;
    checkedInDate?: number;
    children?: Child[]; 
}
  
export interface Child{
    name: String;
    age: Number;
}