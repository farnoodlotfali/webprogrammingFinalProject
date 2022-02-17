import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Control = () => {
  const [id, setid] = useState("");
  const [add, setAdd] = useState({
    name: "",
    year: "",
    desc: "",
    image: "",
  });
  const [update, setpdate] = useState({
    name: "",
    year: "",
    desc: "",
    image: "",
    id: "",
  });
  const [validation, setValidation] = useState({
    name: false,
    year: false,
    desc: false,
    image: false,
    id: false,
    uname: false,
    uyear: false,
    udesc: false,
    uimage: false,
    uid: false,
  });
  const addMovie = async (e) => {
    let n = add.name === "";
    let y = add.year === "";
    let d = add.desc === "";
    let i = add.image === "";

    if (n || y || i || d) {
      setValidation((prev) => {
        return {
          ...prev,
          name: n,
          year: y,
          desc: d,
          image: i,
        };
      });
      return;
    }
    e.preventDefault();
    var data = JSON.stringify({
      name: add.name,
      year: add.year,
      desc: add.desc,
      image: add.image,
    });
    try {
      const res = await axios.post("http://127.0.0.1:8001/create", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {}, 1500);
    }
  };

  const deleteMovie = async (e) => {
    let i = id === "";

    if (i) {
      setValidation((prev) => {
        return {
          ...prev,
          id: i,
        };
      });
      return;
    }
    e.preventDefault();
    var data = JSON.stringify({
      id: id,
    });
    try {
      const res = await axios.post("http://127.0.0.1:8001/delete", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {}, 1500);
    }
  };

  const updateMovie = async (e) => {
    let n = update.name === "";
    let y = update.year === "";
    let d = update.desc === "";
    let i = update.image === "";
    let ii = update.id === "";

    if (n || y || i || d || ii) {
      setValidation((prev) => {
        return {
          ...prev,
          uname: n,
          uyear: y,
          udesc: d,
          uimage: i,
          uid: ii,
        };
      });
      return;
    }
    e.preventDefault();
    var data = JSON.stringify({
      name: update.name,
      year: update.year,
      desc: update.desc,
      image: update.image,
      id: update.id,
    });
    try {
      const res = await axios.post("http://127.0.0.1:8001/update", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {}, 1500);
    }
  };

  const handleAddOnChange = (e) => {
    setAdd((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleUpdateOnChange = (e) => {
    setpdate((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className=" m-5">
      <div className="">
        <h3>Add movie</h3>
        <Form className="d-flex justify-content-between">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={add.name}
              onChange={handleAddOnChange}
              isInvalid={validation.name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              name="year"
              value={add.year}
              onChange={handleAddOnChange}
              isInvalid={validation.year}
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>desc</Form.Label>
            <Form.Control
              name="desc"
              value={add.desc}
              onChange={handleAddOnChange}
              isInvalid={validation.desc}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>image url</Form.Label>
            <Form.Control
              name="image"
              value={add.image}
              onChange={handleAddOnChange}
              isInvalid={validation.image}
            />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            {/* <Form.Control
              className="bg-info"
              //  type="submit" value={"submit"}
            /> */}
            <Button onClick={(e) => addMovie(e)}>submit</Button>
          </Form.Group>
        </Form>
      </div>
      <div className="my-4">
        <h3>Upadte movie</h3>
        <Form className="d-flex justify-content-between">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={update.name}
              onChange={handleUpdateOnChange}
              isInvalid={validation.uname}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              name="year"
              value={update.year}
              onChange={handleUpdateOnChange}
              isInvalid={validation.uyear}
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label>desc</Form.Label>
            <Form.Control
              name="desc"
              value={update.desc}
              onChange={handleUpdateOnChange}
              isInvalid={validation.udesc}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>image url</Form.Label>
            <Form.Control
              name="image"
              value={update.image}
              onChange={handleUpdateOnChange}
              isInvalid={validation.uimage}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Id</Form.Label>
            <Form.Control
              name="id"
              value={update.id}
              isInvalid={validation.uid}
              onChange={handleUpdateOnChange}
            />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <Button
              onClick={(e) => updateMovie(e)}
              className="bg-warning align-self-center"
            >
              Update
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="">
        <h3>Delete movie</h3>
        <Form className="d-flex justify-content-between">
          <Form.Group className="mb-3">
            <Form.Label>id</Form.Label>
            <Form.Control
              value={id}
              onChange={(e) => setid(e.target.value)}
              isInvalid={validation.id}
            />
          </Form.Group>
          <Button
            onClick={(e) => deleteMovie(e)}
            className="bg-danger align-self-center"
          >
            delete
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Control;
