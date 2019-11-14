export class User {
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) {}

  public get token(): string {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
  public set token(v: string) {
    this._token = v;
  }

  public get tokenExpirationDate(): Date {
    return this._tokenExpirationDate;
  }
  public set tokenExpirationDate(v: Date) {
    this._tokenExpirationDate = v;
  }
}
