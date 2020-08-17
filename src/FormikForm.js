import React from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

import "./formik.css";

export default class FormikForm extends React.Component {
  listofnumbers = ["Syria", "Norway"];
  state = {
    title: this.props.title,
    selectednumber: 0,
    overage: false,
    insidecounty: 1,
    class: "formik",
  };
  constructor(props) {
    super(props);
  }
  numberschanged = (event) => {
    this.setState({ selectednumber: event.target.value });
    console.log(this.state.selectednumber);
  };

  onSubmit = (values) => {
    console.log(values);
  };
  schema = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      cat: Yup.string().required(),
      checked: Yup.string().required(),
      sosial: Yup.object().shape({
        twitter: Yup.string().required("please give us the facebook"),
        facebook: Yup.string().required("the twitter is importnant "),
      }),
      friends: Yup.array().of(Yup.string().required("fill")),
    });

    return schema;
  };
  changestyle = () => {
    let newclassname = this.state.class;
    newclassname = newclassname === "formik" ? "formik2" : "formik";
    this.setState({ class: newclassname });
    alert(newclassname);
  };
  form = (props) => {
    return (
      <form className={this.state.class} onSubmit={props.handleSubmit}>
        <h1>
          play Formik{" "}
          <a href="https://formik.org/docs/overview" target="blank">
            Formik
          </a>
        </h1>
        <input type="button" onClick={this.changestyle} value=" change styl" />
        <label>Name</label> <Field name="name" />
        <ErrorMessage name="name"></ErrorMessage>
        <br />
        <label>Email</label> <Field name="email" type="email" />
        <ErrorMessage name="email"></ErrorMessage>
        <br />
        <label>choose</label>
        <Field name="colors" as="select" className="my-select">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <br />
        <label>
          1
          <Field type="checkbox" name="checked" value="1" />
        </label>
        <label>
          2
          <Field type="checkbox" name="checked" value="2" />
          <ErrorMessage name="checked" />
        </label>{" "}
        <br />
        <label>
          Onell
          <Field type="radio" name="cat" value="1" />
        </label>
        <label>
          {" "}
          Two
          <Field type="radio" name="cat" value="2" />
          <ErrorMessage name="cat" /> <br />
        </label>
        <h1>Here try the Formik - Nested Objects</h1>
        <label>
          {" "}
          twitter
          <Field name="sosial.twitter" />
          <ErrorMessage name="sosial.twitter" /> <br />
        </label>
        <label>
          {" "}
          facebook
          <Field name="sosial.facebook" />
          <ErrorMessage name="sosial.facebook" /> <br />
        </label>
        <h1>Here fieldsarray</h1>
        <FieldArray
          name="friends"
          render={(arrayHelper) => (
            <div>
              {props.values.friends.map((item, index) => (
                <div key={index}>
                  <Field name={item} value={item} />
                  <ErrorMessage name={item} />
                  <button
                    type="button"
                    onClick={() => arrayHelper.remove(index)}
                  >
                    -
                  </button>
                </div>
              ))}

              <button type="button" onClick={() => arrayHelper.push("d ")}>
                +
              </button>
            </div>
          )}
        />
        <button type="submit">Send</button>
      </form>
    );
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            cat: "",
            colors: "",
            checked: "",
            friends: ["ali", "Isak"],
            sosial: {
              facebook: "",
              twitter: "",
            },
          }}
          onSubmit={this.onSubmit}
          render={this.form}
          validationSchema={this.schema()}
        />
      </div>
    );
  }
}
