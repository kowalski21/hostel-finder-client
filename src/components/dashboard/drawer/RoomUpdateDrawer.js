import React from "react";
import { Grid, Settings } from "lucide-react";
import { Popover, Whisper, Dropdown, Drawer, ButtonToolbar, Button, Placeholder, Input } from "rsuite";
import { LayoutGrid, ListTodo } from "lucide-react";
import { useBoolean } from "usehooks-ts";
import { FormLabel } from "react-bootstrap";
import { useForm } from "@/hooks/form";
import { useUpdateRoomMutation } from "@/hooks/room";

const RoomUpdateDrawer = ({ room, hostelId }) => {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
  const { form, handleChange, handleSuite, handleExtra } = useForm({
    name: room?.name,
    room_type: room?.room_type,
    price: room?.price,
    description: room?.description,
  });
  const mutation = useUpdateRoomMutation();
  const handleSubmit = () => {
    // console.log(form);
    // console.log(room.hostel);

    mutation.mutate(
      { id: room.id, payload: form },
      {
        onError: (e) => console.log(e),
        onSuccess: (data) => {
          alert("its working");
          toggle();
        },
      }
    );
  };
  return (
    <div>
      <button className="btn btn-dark btn-sm fs-8" onClick={() => toggle()}>
        Update
      </button>
      <Drawer size={"xs"} open={value} onClose={() => toggle()} backdrop="static">
        <Drawer.Header>
          <Drawer.Title className="fw-bolder">Room Edit</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
          <div className="container px-0 mx-0">
            <div className="row">
              <div className="col-12 mb-5">
                <FormLabel className="required">Room Name</FormLabel>
                <Input value={form.name} onChange={handleSuite("name")} size="lg" />
              </div>
              <div className="col-6 mb-5">
                <FormLabel className="required">Room Type</FormLabel>
                <Input
                  value={form.room_type}
                  onChange={handleSuite("room_type")}
                  type="number"
                  placeholder="Type of room can 1,2 or 3"
                  size="lg"
                />
              </div>
              <div className="col-6 mb-5">
                <FormLabel className="required">Room Price</FormLabel>
                <Input value={form.price} onChange={handleSuite("price")} type="number" min={1} size="lg" />
              </div>
              <div className="col-12 mb-5">
                <FormLabel className="required">Description</FormLabel>
                <Input
                  value={form.description}
                  onChange={handleSuite("description")}
                  as="textarea"
                  rows={3}
                  placeholder="Room Description"
                />
              </div>
              <div className="separator my-5"></div>
              <div className="col-12">
                <div className="d-flex flex-stack">
                  <button className="btn btn-sm btn-dark" onClick={handleSubmit}>
                    Save
                  </button>
                  <button className="btn btn-sm btn-light" onClick={toggle}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default RoomUpdateDrawer;
