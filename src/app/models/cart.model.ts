import {User} from "./user.model";

export class Cart {
  private _id: bigint;
  private _user: User;

  constructor(id: bigint, user: User) {
    this._id = id;
    this._user = user;
  }

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
