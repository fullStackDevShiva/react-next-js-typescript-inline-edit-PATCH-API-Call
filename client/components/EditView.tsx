"use client";

import axios from "axios";
import { MouseEvent, useState } from "react";
import TextareaEditInline from "./TextareaEditInline";
import InputEditInline from "./InputEditInline";
import { FaPen } from "react-icons/fa";

interface FormData {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  prerequisites: string;
  fees: string;
}

interface EditFormProps {
  data: FormData;
  editFormDisplayHandle: () => void;
  getCourseById: () => void;
}

const EditView: React.FC<EditFormProps> = ({
  data,
  editFormDisplayHandle,
  getCourseById,
}) => {
  const { _id, title, subtitle, description, prerequisites, fees } = data;
  const [editMode, setEditMode] = useState("close-form");

  const iconStyle = {
    color: "#20c997",
    fontSize: "12px",
    marginLeft: "10px",
    cursor: "pointer",
    display: "inline",
  };

  const editModeOn = (event: MouseEvent<HTMLElement>, value: string) => {
    console.log(value);
    event.preventDefault();
    setEditMode(value);
    // console.log(editMode);
  };

  // To update the title field - sending PATCH request to the API
  const updateTitle = async (dataId: string, dataText: string) => {
    console.log(dataId);
    console.log(dataText);
    const courseId = dataId;
    const title = dataText;
    try {
      const res = await axios.patch(
        `http://localhost:5000/courses/edit/title/${courseId}`,
        {
          title,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode("close-form");
      getCourseById(courseId);
    }
  };

  // To update the sub-title field - sending PATCH request to the API
  const updateSubTitle = async (dataId: string, dataText: string) => {
    console.log(dataId);
    console.log(dataText);
    const courseId = dataId;
    const subtitle = dataText;
    try {
      const res = await axios.patch(
        `http://localhost:5000/courses/edit/subtitle/${courseId}`,
        {
          subtitle,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode("close-form");
      getCourseById(courseId);
    }
  };

  // To update the description field - sending PATCH request to the API
  const updateDescription = async (dataId: string, dataText: string) => {
    console.log(dataId);
    console.log(dataText);
    const courseId = dataId;
    const description = dataText;
    try {
      const res = await axios.patch(
        `http://localhost:5000/courses/edit/description/${courseId}`,
        {
          description,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode("close-form");
      getCourseById(courseId);
    }
  };

  // To update the prerequisites field - sending PATCH request to the API
  const updatePrerequisites = async (dataId: string, dataText: string) => {
    console.log(dataId);
    console.log(dataText);
    const courseId = dataId;
    const prerequisites = dataText;
    try {
      const res = await axios.patch(
        `http://localhost:5000/courses/edit/prerequisites/${courseId}`,
        {
          prerequisites,
        }
      );
      console.log(res.data);
      // setEditMode("close-form");
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode("close-form");
      getCourseById(courseId);
    }
  };

  // To update the fees field - sending PATCH request to the API
  const updateFees = async (dataId: string, dataText: string) => {
    console.log(dataId);
    console.log(dataText);
    const courseId = dataId;
    const fees = dataText;
    try {
      const res = await axios.patch(
        `http://localhost:5000/courses/edit/fees/${courseId}`,
        {
          fees,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode("close-form");
      getCourseById(courseId);
    }
  };

  return (
    <>
      {!data ? null : (
        <div className="card mt-4">
          <h1>Edit course</h1>
          <div className="course-title">
            {editMode === "title-edit" ? (
              // Editable field for title
              <InputEditInline
                dataId={data._id}
                dataText={data.title}
                setEditMode={setEditMode}
                handleSubmit={updateTitle}
              />
            ) : (
              <div style={{ marginBottom: "15px", marginTop: "20px" }}>
                <h4>
                  Title: {data.title}
                  <span>
                    <FaPen
                      style={iconStyle}
                      onClick={(event) => editModeOn(event, "title-edit")}
                    />
                  </span>
                </h4>
              </div>
            )}
          </div>
          <div className="course-subtitle">
            {editMode === "subtitle-edit" ? (
              // Editable field for sub-title
              <InputEditInline
                dataId={data._id}
                dataText={data.subtitle}
                setEditMode={setEditMode}
                handleSubmit={updateSubTitle}
              />
            ) : (
              <div style={{ marginBottom: "15px" }}>
                <p>
                  Sub-title: {data.subtitle}
                  <span>
                    <FaPen
                      style={iconStyle}
                      onClick={(event) => editModeOn(event, "subtitle-edit")}
                    />
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className="course-fees">
            {editMode === "fees-edit" ? (
              // Editable field for fees
              <InputEditInline
                dataId={data._id}
                dataText={data.fees}
                setEditMode={setEditMode}
                handleSubmit={updateFees}
              />
            ) : (
              <div style={{ marginBottom: "15px" }}>
                <p className="info">
                  Fees: RS. {data.fees}
                  <span>
                    <FaPen
                      style={iconStyle}
                      onClick={(event) => editModeOn(event, "fees-edit")}
                    />
                  </span>
                </p>
              </div>
            )}
          </div>

          <h6>
            Description
            <span
              id="idDescription"
              className="btn btn-sm custom-link-btn"
              style={{
                float: "right",
                fontSize: "12px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#fd7e14",
                fontWeight: "500",
              }}
              onClick={(event) => editModeOn(event, "description-edit")}
            >
              Edit
            </span>
          </h6>
          <hr />
          {editMode === "description-edit" ? (
            // Editable field for description
            <TextareaEditInline
              dataId={data._id}
              dataText={data.description}
              setEditMode={setEditMode}
              handleSubmit={updateDescription}
            />
          ) : (
            <div
              style={{
                whiteSpace: "pre-wrap",
                marginBottom: "15px",
                fontSize: "14px",
              }}
            >
              {data.description}
            </div>
          )}

          <h6>
            Pre-requisites
            <span
              id="idPrerequisites"
              className="btn btn-sm custom-link-btn"
              style={{
                float: "right",
                fontSize: "12px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#fd7e14",
                fontWeight: "500",
              }}
              onClick={(event) => editModeOn(event, "prereq-edit")}
            >
              Edit
            </span>
          </h6>
          <hr />
          {editMode === "prereq-edit" ? (
            // Editable field for prerequisites
            <TextareaEditInline
              dataId={data._id}
              dataText={data.prerequisites}
              setEditMode={setEditMode}
              handleSubmit={updatePrerequisites}
            />
          ) : (
            <div
              style={{
                whiteSpace: "pre-wrap",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              {data.prerequisites}
            </div>
          )}

          <button
            className="btn bg-transparent text-pink-600 text-md p-0"
            onClick={editFormDisplayHandle}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
};

export default EditView;
