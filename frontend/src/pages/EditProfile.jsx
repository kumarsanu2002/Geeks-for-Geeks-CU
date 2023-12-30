import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { FaEdit } from "react-icons/fa";

const Field = ({ label, placeholder, value, id, onChange }) => (
  <div className="flex flex-col justify-center">
    <label className="my-2 font-montserrat" htmlFor={id}>
      {label}
    </label>
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      id={id}
      className="glassmorphism-input"
    />
  </div>
);

const EditProfile = () => {
  const onChange = () => {};
  const submit = () => {};
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    contact: "",
    uidMemberId: "",
    languageUsed: "",
    year: "",
    branch: "",
    description: "",
    skills: [],
    achievements: [],
    linkedin: "",
    github: "",
    twitter: "",
  });

  const {
    name,
    userName,
    email,
    contact,
    uidMemberId,
    languageUsed,
    year,
    branch,
    description,
    skills,
    achievements,
    linkedin,
    github,
    twitter,
  } = formData;
  return (
    <Layout>
      <div className="flex items-center justify-center px-5 py-10">
        <div className="glassmorphism w-full">
          <div className="flex justify-end">
            <FaEdit className="text-2xl " />
          </div>
          <h1 className="font-poppins text-2xl font-bold my-8 text-center">
            Edit Profile
          </h1>
          <form onSubmit={submit} className="glassmorphism p-5">
            <div className="grid mf:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              <Field onChange={onChange} value={name} id="name" label="Name" />
              <Field
                onChange={onChange}
                value={userName}
                id="userName"
                label="UserName"
                placeholder="Your Full Name"
              />
              <Field
                onChange={onChange}
                value={email}
                id="email"
                label="Email"
                placeholder="abcxyz@mail.com"
              />
              <Field
                onChange={onChange}
                value={contact}
                id="contact"
                label="Contact"
                placeholder="XXXXXXX90"
              />
              <Field
                onChange={onChange}
                value={uidMemberId}
                id="uidMemberId"
                label="UID/Member Id"
                placeholder="Your College Id"
              />
              <Field
                onChange={onChange}
                value={languageUsed}
                id="languageUsed"
                label="Language Used"
                placeholder="language used in coding."
              />
              <Field
                onChange={onChange}
                value={year}
                id="year"
                label="Year of Study"
                placeholder="2nd year"
              />
              <Field
                onChange={onChange}
                value={branch}
                id="branch"
                label="Branch"
                placeholder="CSE"
              />
              <Field
                onChange={onChange}
                value={description}
                id="description"
                label="Description"
                placeholder="Write about yourself."
              />
              <Field
                onChange={onChange}
                value={skills}
                id="skills"
                label="Skills"
                placeholder="Seperate your skills with white space."
              />
              <Field
                onChange={onChange}
                value={achievements}
                id="achievements"
                label="Achievements"
                placeholder="Seperate your achievements with white space."
              />
              <Field
                onChange={onChange}
                value={linkedin}
                id="linkedin"
                label="Linkedin"
                placeholder="Your Linkedin Profile Link"
              />
              <Field
                onChange={onChange}
                value={github}
                id="github"
                label="Github"
                placeholder="Your Github Profile Link"
              />
              <Field
                onChange={onChange}
                value={twitter}
                id="twitter"
                label="Twitter"
                placeholder="Your Twitter Profile Link"
              />
            </div>
            <button
              type="submit"
              className="bg-gfg-green text-white flex m-auto rounded-lg text-xl mt-10 mb-4 px-3 py-1 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
