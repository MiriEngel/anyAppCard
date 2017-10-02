export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public mail: string,
    public phone: string,
    public address?: string,
  ) { }
}


