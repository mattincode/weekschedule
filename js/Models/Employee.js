var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "employeeId", {
        get: function () {
            return this._employeeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
//# sourceMappingURL=Employee.js.map