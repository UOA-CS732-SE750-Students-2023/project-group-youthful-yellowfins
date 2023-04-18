module.exports =  class ApiException extends Error {
    constructor(msg, statusCode) {
      super(msg);
      this.statusCode = statusCode;
      this.name = MyCustomError.name;
    }
  }
