import { Container, Table } from 'react-bootstrap';
import { Button, Form, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletestu, singleStu } from '../../container/Services/Action/Student.action';
import { useNavigate } from 'react-router';
import { useState } from 'react';


const ViewPage = () => {

    const { students } = useSelector((state) => state.studentReducer);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {

        dispatch(singleStu(id));
        navigate("/edit");

    }

    const handleDelete = (id) => {

        dispatch(deletestu(id));

    }

    const handleSort = () => {

        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);

    }


    const sortedStudents = [...students].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (titleA > titleB) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const filteredAndSortedStudents = sortedStudents.filter(stu =>
        stu.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <Container className="mt-3">
            <h2>Product List</h2>
            <div className="search-container">
                <Form.Control
                    type="text"
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <Button variant="primary" className="search-button">Search</Button>
            </div>

            <div className="sorting-container">
                <Button variant="primary" onClick={handleSort} className="bg-danger mb-4">
                    Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                </Button>
            </div>
            <div class="card-container">
                {filteredAndSortedStudents.map((stu, index) => (
                    <div class="card" key={index}>
                        <img src={stu.image} alt={stu.title} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{stu.title}</h5>
                            <p class="card-text">
                                <span class="price-label">Price: </span>{stu.price}<br />
                                <span class="price-label">Original Price: </span>{stu.Oprice}<br />
                                <span class="price-label">Description: </span>{stu.description}
                            </p>
                            <button class="btn btn-primary" onClick={() => handleEdit(stu.id)}>Edit</button>
                            ||||
                            <button class="btn btn-primary" onClick={() => handleDelete(stu.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

        </Container >
    );
};

export default ViewPage;
