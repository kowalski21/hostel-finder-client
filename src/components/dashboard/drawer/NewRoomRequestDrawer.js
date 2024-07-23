import React from "react";
import { Grid, Settings } from "lucide-react";
import { Popover, Whisper, Dropdown, Drawer, ButtonToolbar, Button, Placeholder, Input } from "rsuite";
import { LayoutGrid, ListTodo } from "lucide-react";
import { useBoolean } from "usehooks-ts";
import { FormLabel } from "react-bootstrap";
import { useForm } from "@/hooks/form";
import { useNewRoomMutation, useUpdateRoomMutation } from "@/hooks/room";
import SelectUsers from "@/components/forms/SelectUsers";
import { useNotify } from "@/hooks/notify";
import { useNewRoomRequestMutation } from "@/hooks/room_request";
import { useAuthUser } from "@/store/auth";
import { assetUrl } from "@/lib/asset";
import { usePerms } from "@/hooks/perm";

const NewRoomRequestDrawer = ({ room, hostelId, manager }) => {
  const { isManager, IsOwner } = usePerms();
  const authUser = useAuthUser();
  const { showError, showMsg } = useNotify();
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { form, handleChange, handleSuite, handleExtra, resetForm } = useForm({
    customer: authUser.id,
    hostel: hostelId,
    note: room.note || "",
    room_price: room.price,
    status: "published",
    room: room.id,
  });
  const mutation = useNewRoomRequestMutation();
  const handleSubmit = () => {
    console.log(hostelId);
    if (!IsOwner(manager.id)) {
      form.customer = authUser.id;
      // console.log("Is from Customer");
      // console.log(form);
    }
    // console.log(form);
    // console.log(room.hostel);
    // form.hostel = hostelId;

    mutation.mutate(form, {
      onError: (e) => {
        showError(e.message);
      },
      onSuccess: (data) => {
        alert("its working");
        resetForm();
        toggle();
        showMsg("Room Request Created");
      },
    });
  };
  return (
    <div>
      <button className="btn btn-dark btn-sm fs-8" onClick={() => toggle()}>
        Book Room
      </button>
      <Drawer size={"xs"} open={value} onClose={() => toggle()} backdrop="static">
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">Room Request - {room.name.toUpperCase()}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
          {authUser && (
            <div className="container px-0 mx-0">
              {/* {JSON.stringify({ form: form.room })} */}
              <div className="row">
                <div className="col-12 mb-5">
                  <FormLabel className="required">Customer (Student)</FormLabel>

                  {IsOwner(manager.id) ? (
                    <SelectUsers defaultValue={form.customer} keyName={"customer"} onChange={handleExtra} />
                  ) : (
                    <div className="d-flex">
                      <img src={assetUrl(authUser.avatar)} className="w-50px h-50px img-center rounded" alt="" />
                      <div className="mx-5">
                        <span className="fs-6 fw-bolder">{authUser.first_name}</span>
                        <br />
                        <span className="text-small">{authUser.role?.name}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-6 mb-5">
                  <FormLabel className="required">Room Number</FormLabel>
                  <Input
                    disabled
                    value={room.name}
                    onChange={handleSuite("room_type")}
                    placeholder="Type of room can 1,2 or 3"
                    size="lg"
                  />
                </div>
                <div className="col-6 mb-5">
                  <FormLabel className="required">Room Price</FormLabel>
                  <Input
                    disabled
                    value={form.room_price}
                    onChange={handleSuite("price")}
                    type="number"
                    min={1}
                    size="lg"
                  />
                </div>
                <div className="col-12 mb-5">
                  <FormLabel className="">Note</FormLabel>
                  <Input
                    value={form.description}
                    onChange={handleSuite("description")}
                    as="textarea"
                    rows={3}
                    placeholder="Notes"
                  />
                </div>
                <div className="separator my-5"></div>
                <div className="col-12">
                  <div className="d-flex flex-stack">
                    {form.customer && (
                      <button className="btn btn-sm btn-dark" onClick={handleSubmit}>
                        Save
                      </button>
                    )}
                    <button className="btn btn-sm btn-light" onClick={toggle}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default NewRoomRequestDrawer;
