/// <reference path="../Models/Booking.ts" />


class WeekScheduleViewModel {

    public LoadBookings() {
        //TODO: Call GSP Api and load bookings, start by using GetBookingsWithRelatedData
    }
    
    private _bookings : Booking[];
    public get Bookings() : Booking[] {
        return this._bookings;
    }

}