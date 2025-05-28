import React from "react";
import { useState, useEffect } from "react";

export default function test() {
  const [users, setUsers] = useState("");
  const [postBody, setPostBody] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("");
        setUsers(res.data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    try {
      axios.post("https://", postBody).then((response) => {
        console.log("Post created");
      });
    } catch (err) {
      console.log("Eror:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostBody({
      ...postBody,
      [name]: value,
    });
  };

  return (
    <>
      {/**post  */}

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="name"
            value={postBody.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Title:
          <input
            type="email"
            name="email"
            value={postBody.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {/**get */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.name} {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
