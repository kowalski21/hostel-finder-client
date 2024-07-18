import { Eye } from "lucide-react";
import React from "react";
import Link from "next/link";
import BookPayment from "./BookPayment";
const BookingCard = ({ item, customer, hostel, room }) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-header">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold text-gray-900">Room Details</span>
          <span class="text-muted mt-1 fw-semibold fs-7">Details of the booking Requests</span>
        </h3>
      </div>
      <div className="card-body pt-6">
        <div class="d-flex flex-stack">
          <div class="symbol symbol-40px me-4">
            <div class="symbol-label fs-2 fw-semibold bg-dark text-inverse-danger">C</div>
          </div>

          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
            <div class="flex-grow-1 me-2">
              <a class="text-gray-800 text-hover-primary fs-6 fw-bold">Customer</a>
              <span class="text-muted fw-semibold d-block fs-7">
                {customer.first_name} {customer.last_name}
              </span>
            </div>
            <Link href={`/dashboard/profile/${customer.id}`} legacyBehavior>
              <a class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                <Eye size={16} />
              </a>
            </Link>
          </div>
        </div>
        <div class="separator separator-dashed my-4"></div>
        <div class="d-flex flex-stack">
          <div class="symbol symbol-40px me-4">
            <div class="symbol-label fs-2 fw-semibold bg-dark text-inverse-danger">R</div>
          </div>

          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
            <div class="flex-grow-1 me-2">
              <a class="text-gray-800 text-hover-primary fs-6 fw-bold">Room Details</a>
              <span class="text-muted fw-semibold d-block fs-7">
                {hostel.name} - {room.name} - GHS {item.room_price}
              </span>
            </div>
          </div>
        </div>
        <div class="separator separator-dashed my-4"></div>
        <div class="d-flex flex-stack">
          <div class="symbol symbol-40px me-4">
            <div class="symbol-label fs-2 fw-semibold bg-dark text-inverse-danger">P</div>
          </div>

          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
            <div class="flex-grow-1 me-2">
              <a class="text-gray-800 text-hover-primary fs-6 fw-bold">Payment Details</a>
              <span class="text-muted fw-semibold d-block fs-7">{item.paid ? "Paid" : "No Payment yet"}</span>
            </div>
            {!item.paid && <BookPayment bookingId={item.id} />}
            {/* <button class="btn btn-sm  btn-bg-light btn-active-color-primary ">Make Payment</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
