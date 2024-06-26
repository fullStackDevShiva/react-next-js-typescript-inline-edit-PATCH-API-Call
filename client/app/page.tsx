"use client";

import { useState } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import EditView from "@/components/EditView";

export default function Home() {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [editCourseData, setEditCourseData] = useState(null);

  // To get the selected course data from database
  const getCourseById = async (itemId: string) => {
    try {
      const res = await axios.get(`http://localhost:5000/courses/${itemId}`);
      if (!res) {
        console.log("Course not found");
        return;
      }
      console.log(res.data);
      setEditCourseData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // To show/hide the edit form and also pass data to the form component
  const editFormDisplayHandle = (itemId: string) => {
    console.log("Edit button clicked");

    if (showEditForm === false) {
      getCourseById(itemId);
      setShowEditForm(true);
    } else {
      setEditCourseData(null);
      setShowEditForm(false);
    }
  };

  return (
    <div className="page-layout">
      {showEditForm === false ? (
        <>
          {/* To list all the courses */}
          <div className="w-full mt-8">
            <ItemList editFormDisplayHandle={editFormDisplayHandle} />
          </div>
        </>
      ) : null}

      {editCourseData && (
        <>
          {/* To show/hide EditView component for the selected course */}
          {showEditForm === false ? null : (
            <EditView
              data={editCourseData}
              editFormDisplayHandle={editFormDisplayHandle}
              getCourseById={getCourseById}
            />
          )}
        </>
      )}
    </div>
  );
}
