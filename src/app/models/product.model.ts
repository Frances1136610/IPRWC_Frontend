export class Product {
  private _id: bigint;
  private _name: string;
  private _description: string;

  constructor(id: bigint, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
  }

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
