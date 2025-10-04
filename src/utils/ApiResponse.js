class ApiResponse {
    constructor(success,data, message = "sucess") {
          
        this.success = statusCode < 400
        this.data = data
        this.message = message
        this.statusCode = statusCode
    }
}

export default ApiResponse