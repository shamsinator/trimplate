import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function BookingModule() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [barber, setBarber] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    // Form data is tracked via data attributes
    // Additional booking logic here
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="font-oswald text-2xl uppercase tracking-wide">
          Book Your Appointment
        </CardTitle>
        <CardDescription>
          Select your preferred date, time, and barber
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Barber</label>
          <Select value={barber} onValueChange={setBarber}>
            <SelectTrigger
              data-track="Select"
              data-category="Booking"
              data-label="Barber"
            >
              <SelectValue placeholder="Choose your barber" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="james">James Wilson</SelectItem>
              <SelectItem value="michael">Michael Brown</SelectItem>
              <SelectItem value="david">David Clark</SelectItem>
              <SelectItem value="robert">Robert Taylor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Service</label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger
              data-track="Select"
              data-category="Booking"
              data-label="Service"
            >
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="haircut">Classic Haircut</SelectItem>
              <SelectItem value="beard">Beard Trim</SelectItem>
              <SelectItem value="shave">Hot Towel Shave</SelectItem>
              <SelectItem value="combo">Hair & Beard Combo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Date</label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            data-track="Select"
            data-category="Booking"
            data-label="Date"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Time</label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger
              data-track="Select"
              data-category="Booking"
              data-label="Time"
            >
              <SelectValue placeholder="Choose a time slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0900">9:00 AM</SelectItem>
              <SelectItem value="1000">10:00 AM</SelectItem>
              <SelectItem value="1100">11:00 AM</SelectItem>
              <SelectItem value="1300">1:00 PM</SelectItem>
              <SelectItem value="1400">2:00 PM</SelectItem>
              <SelectItem value="1500">3:00 PM</SelectItem>
              <SelectItem value="1600">4:00 PM</SelectItem>
              <SelectItem value="1700">5:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          onClick={handleBooking}
          data-track="Submit"
          data-category="Booking"
          data-label="Appointment"
          data-meta={`{"barber":"${barber}","service":"${service}","date":"${date?.toISOString().split("T")[0]}","time":"${time}"}`}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
}
