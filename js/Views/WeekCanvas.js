/// <reference path="../Models/Employee.ts" />
var WeekColumnType;
(function (WeekColumnType) {
    WeekColumnType[WeekColumnType["planningUnitColumn"] = 0] = "planningUnitColumn";
    WeekColumnType[WeekColumnType["weekDayColumn"] = 1] = "weekDayColumn";
})(WeekColumnType || (WeekColumnType = {}));
/**
 * Represents the weekschedule planningunit rows and bookings
 *
 * @class WeekCanvas
 */
var WeekCanvas = (function () {
    function WeekCanvas(weekCanvas) {
        this.canvas = weekCanvas;
        this.Draw();
    }
    WeekCanvas.prototype.Draw = function () {
        var context = this.canvas.getContext("2d");
        //context.fillRect(0, 0, 100, 100);
        //TODO: Draw header (need dates)
        if (this.rows == null)
            return;
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            row.Draw(context);
        }
    };
    return WeekCanvas;
}());
var WeekRow = (function () {
    function WeekRow(columns) {
        this._columns = columns;
    }
    Object.defineProperty(WeekRow.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    WeekRow.prototype.Draw = function (context) {
        //TODO:: Draw PlanningUnit column
        for (var _i = 0, _a = this._columns; _i < _a.length; _i++) {
            var column = _a[_i];
            column.Draw(context);
        }
    };
    return WeekRow;
}());
var WeekColumn = (function () {
    function WeekColumn(columnType) {
        this.columnType = columnType;
    }
    WeekColumn.prototype.Draw = function (context) {
    };
    return WeekColumn;
}());
//# sourceMappingURL=WeekCanvas.js.map