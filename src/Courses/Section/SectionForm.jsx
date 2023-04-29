import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { getAllSectionByCourseId } from "../CourseService";
import emptybox from "../../img/icons8-empty-box-100.png";
//match dto of nestjs
const SectionSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  duration: Yup.number().required("Required"),
});

export function SectionForm() {
  const courseId = useParams().id;
  const [sections, setSections] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      duration: "",
      courseId: courseId,
    },
    validationSchema: SectionSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      //code to make a api call using fetch
      console.log(values);
    },
  });

  useEffect(() => {
    getAllSectionByCourseId(courseId)
      .then((res) => {
        console.log(res);
        setSections([...res.data]);
      })
      .catch((err) => {
        console.log(err);
        alert("no section found");
      });
  }, []);

  const renderForm = () => {
    return (
      <div>
        <h1>Section Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-6">
              <label htmlFor="title">Title</label>
              <InputText
                id="title"
                type="text"
                {...formik.getFieldProps("title")}
              />
              {formik.touched.title && formik.errors.title ? (
                <small className="p-error p-d-block">
                  {formik.errors.title}
                </small>
              ) : null}
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label htmlFor="description">Description</label>
              <InputText
                id="description"
                type="text"
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description ? (
                <small className="p-error p-d-block">
                  {formik.errors.description}
                </small>
              ) : null}
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label htmlFor="duration">Duration</label>
              <InputText
                id="duration"
                type="number"
                {...formik.getFieldProps("duration")}
              />
              {formik.touched.duration && formik.errors.duration ? (
                <small className="p-error p-d-block">
                  {formik.errors.duration}
                </small>
              ) : null}
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label htmlFor="courseId">Course Id</label>
              <InputText
                id="courseId"
                type="text"
                {...formik.getFieldProps("courseId")}
              />
              {formik.touched.courseId && formik.errors.courseId ? (
                <small className="p-error p-d-block">
                  {formik.errors.courseId}
                </small>
              ) : null}
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label htmlFor="sectionId">Section Id</label>
              <InputText
                id="sectionId"
                type="text"
                {...formik.getFieldProps("sectionId")}
              />
              {formik.touched.sectionId && formik.errors.sectionId ? (
                <small className="p-error p-d-block">
                  {formik.errors.sectionId}
                </small>
              ) : null}
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label htmlFor="videoUrl">Video Url</label>
              <InputText
                id="videoUrl"
                type="text"
                {...formik.getFieldProps("videoUrl")}
              />
              {formik.touched.videoUrl && formik.errors.videoUrl ? (
                <small className="p-error p-d-block">
                  {formik.errors.videoUrl}
                </small>
              ) : null}
            </div>
          </div>
          <Button label="Submit" type="submit" />
        </form>
      </div>
    );
  };

  const renderEmpty = () => {
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1>No Section Found</h1>
        <img src={emptybox}></img>
        <Button label="Add Section" />
      </div>
    );
  };

  return <>{sections.length > 0 ? renderForm() : renderEmpty()}</>;
}
