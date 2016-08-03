/// <reference path="../Models/Booking.ts" />
var WeekScheduleViewModel = (function () {
    function WeekScheduleViewModel() {
    }
    WeekScheduleViewModel.prototype.LoadBookings = function () {
        //TODO: Call GSP Api and load bookings, start by using GetBookingsWithRelatedData
    };
    Object.defineProperty(WeekScheduleViewModel.prototype, "Bookings", {
        get: function () {
            return this._bookings;
        },
        enumerable: true,
        configurable: true
    });
    return WeekScheduleViewModel;
}());
//# sourceMappingURL=WeekScheduleViewModel.js.map