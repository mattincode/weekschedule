
/// <reference path="../Models/Employee.ts" />


enum WeekColumnType {
    planningUnitColumn,
    weekDayColumn
}



/**
 * Represents the weekschedule planningunit rows and bookings 
 * 
 * @class WeekCanvas
 */
class WeekCanvas {

    private canvas: HTMLCanvasElement;
    private employee: Employee;
    private rows: WeekRow[];

    constructor(weekCanvas: HTMLCanvasElement) {
        this.canvas = weekCanvas;
        this.Draw();
    }

    public Draw() {
        var context = this.canvas.getContext("2d");

        //context.fillRect(0, 0, 100, 100);
        //TODO: Draw header (need dates)
        if (this.rows == null) return; 
        for (var row of this.rows) {
            row.Draw(context);
        }
    }
}


class WeekRow {

    private _columns: WeekColumn[];

    constructor(columns: WeekColumn[]) {
        this._columns = columns;
    }

    public get columns(): WeekColumn[] {
        return this._columns;
    }

    Draw(context: CanvasRenderingContext2D) {

        //TODO:: Draw PlanningUnit column
        for (var column of this._columns) {
            column.Draw(context);
        }
    }
}

class WeekColumn {

    private columnType: WeekColumnType;

    constructor(columnType: WeekColumnType) {
        this.columnType = columnType;
    }

    public Draw(context: CanvasRenderingContext2D) {


    }

}

