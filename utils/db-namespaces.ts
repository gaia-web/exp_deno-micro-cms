export class DBNamespaces {
  static readonly APP = ["app"];
  static readonly APP_GENERAL = DBNamespaces.APP.concat("general");
  static readonly APP_COLLECTION = DBNamespaces.APP.concat("collection");
  static readonly APP_ASSET = DBNamespaces.APP.concat("asset");
}
