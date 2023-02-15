import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import AddMedicine from "../components/Model/AddMedicine";
import EditMedicine from "../components/Model/EditMedicine";
import { useNavigate } from "react-router-dom";

const Medicine = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const [medicineList, setmedicineList] = useState([]);
  const [ids, setids] = useState([]);
  const [editModel, seteditModel] = useState(false);
  const [SelectedData, setSelectedData] = useState({});
  const [sortedData, setsortedData] = useState([])

  useEffect(() => {
    setmedicineList(JSON.parse(localStorage.getItem("medicinedata")) || []);
  }, [sortedData]);

  const onClickAdd = () => {
    // setDisplay(true)
    navigate(`/addMedicine`);
  };

  const onClickDelete = (event) => {
    if (window.confirm("Are you sure you want to delete ?") === true) {
      const filter = medicineList.filter((i) => {
        return i.id !== event;
      });

      setmedicineList(filter);
      localStorage.setItem("medicinedata", JSON.stringify(filter));
    }
  };

  const onChangeHandler = (isChecked, id) => {
    if (isChecked) {
      setids([...ids, id]);
    } else {
      const filter = ids.filter((i) => i !== id);
      setids(filter);
    }
  };

  const onClickBulkDelete = () => {
    const filter = medicineList.filter((i) => {
      return !ids.includes(i.id);
    });

    setids([]);
    setmedicineList(filter);
    localStorage.setItem("medicinedata", JSON.stringify(filter));
  };

  const onClickEdit = (data) => {
    setSelectedData(data);
    // seteditModel(true)
    navigate(`/updateMedicine/${data.id}`);
  };

  const onChangeSearch = (event) => {
    const data = JSON.parse(localStorage.getItem("medicinedata"));

    const filter = data.filter((i) =>
      i.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    if (!event.target.value) {
      setmedicineList(data);
    } else {
      setmedicineList(filter);
    }
  };

  const onClickSort = (field) => {
    const sort = medicineList.sort((a, b) => a[field] - b[field]);
    localStorage.setItem("medicinedata", JSON.stringify(sort));
    setsortedData(sort)
  };

  const onClickSortDec = (field) => {
    const sort = medicineList.sort((a, b) => b[field] - a[field]);
    localStorage.setItem("medicinedata", JSON.stringify(sort));
    setsortedData(sort)
  };

  const onClickName = () => {

    new Date().getTime()

    const sort = medicineList.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("medicinedata", JSON.stringify(sort));
    setsortedData(sort)
  }

  const onChangeSelect = (event) => {
    const data = JSON.parse(localStorage.getItem("medicinedata"));

    const filter = data.filter((i) => i.name === event.target.value)

    if (!event.target.value) {
      setmedicineList(data);
    } else {
      setmedicineList(filter);
    }
  }

  return (
    <div>
      <AddMedicine display={display} setDisplay={setDisplay} />
      <EditMedicine
        SelectedData={SelectedData}
        display={editModel}
        setDisplay={seteditModel}
      />
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Medicine</h2>
          </div>
          <div className="d-flex justify-content-center my-4">
            <button className="btn btn-danger me-4" onClick={onClickBulkDelete}>
              Bulk Delete
            </button>
            <button className="btn btn-primary" onClick={onClickAdd}>
              Add Medicine
            </button>
          </div>

          <div className="text-center my-5">
            <input
              placeholder="search by name..."
              onChange={onChangeSearch}
              className="text-center me-4 col-md-4"
              type="text"
            />

            <select onChange={onChangeSelect}>
            <option value={''}>--- select options ----</option>
              {
                JSON.parse(localStorage.getItem("medicinedata")).map((i) => {
                  return <option value={i.name}>{i.name}</option>
                })
              }
            </select>
            
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th onClick={() => onClickSort('id')}>id</th>
                <th onClick={onClickName}>name</th>
                <th onClick={() => onClickSort('quantity')}>qunatity</th>
                <th onClick={() => onClickSort('price')}>price</th>
                <th onClick={() => onClickSortDec('updatedAt')}>updateAt</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {medicineList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={ids.includes(item.id)}
                        onChange={(event) =>
                          onChangeHandler(event.target.checked, item.id)
                        }
                      />
                    </td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{new Date(item.updatedAt).toLocaleDateString() + ' ' +new Date(item.updatedAt).toLocaleTimeString()}</td>
                    <td>
                      <button
                        className="btn btn-success me-4"
                        onClick={() => onClickEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => onClickDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Medicine;
