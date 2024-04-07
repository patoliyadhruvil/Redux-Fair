import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { studentaction } from "../../container/Services/Action/Student.action";


const Createformdata = () => {

    const [formdata, setformdata] = useState({
        image: '',
        title: '',
        price: '',
        Oprice: '',
        description: '',
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setformdata({ ...formdata, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let uid = Math.floor(Math.random() * 1000)
        console.log("uid", uid);
        let newStudent = { ...formdata, id: uid }
        console.log("NEw", newStudent);

        dispatch(studentaction(newStudent));

        setformdata({
            image: '',
            title: '',
            price: '',
            Oprice: '',
            description: '',
        })
        navigate("/view");

    }

    return (
        <>

            <section class="create">
                <div class="container">
                    <form class="pt-3 custom-form" onSubmit={handleSubmit}>
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <label class="form-label">Image</label>
                                <input class="form-control" type="text" placeholder="Enter the image URL" name="image" value={formdata.image} onChange={handleChange} />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Title</label>
                                <input class="form-control" type="text" placeholder="Enter the title" name="title" value={formdata.title} onChange={handleChange} />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Price</label>
                                <input class="form-control" type="text" placeholder="Enter The Price" name="price" value={formdata.price} onChange={handleChange} />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Original Price</label>
                                <input class="form-control" type="text" placeholder="Enter The Original Price" name="Oprice" value={formdata.Oprice} onChange={handleChange} />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Description</label>
                                <textarea class="form-control" placeholder="Enter The description" name="description" value={formdata.description} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </section>

        </>
    )

}
export default Createformdata;