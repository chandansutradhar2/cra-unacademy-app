import { useState } from "react";
import { addSection, getAllSectionByCourseId } from "../../SectionService";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import * as Yup from "yup";
import { useFormik } from "formik";

const SectionSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  duration: Yup.number().required("Required"),
});

export function SectionForm({ courseId, onCompleted }) {
  const [loading, setLoading] = useState(false);

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
      console.log(values);
      addSection(values)
        .then((res) => {
          alert("section added successfully");
          onCompleted();
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  const renderForm = () => {
    return (
      <div style={{ margin: "10pt" }}>
        <h4>Add Section</h4>
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
          </div>
          <Button label="Submit" type="submit" />
        </form>
      </div>
    );
  };

  return renderForm();
}
