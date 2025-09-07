import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordref = useRef();

  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    let stored = localStorage.getItem("passwords");
    if (stored) setPasswords(JSON.parse(stored));
  }, []);

  const copyonClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast('🦄 copied to clipboard!', {
      position: "bottom-left",
      autoClose: 3000,
      theme: "light",
    });
  };

  const Showpassword = () => {
    passwordref.current.type = passwordref.current.type === "password" ? "text" : "password";
    ref.current.src = ref.current.src.includes("eye.png")
      ? "icons/eyecross.png"
      : "icons/eye.png";
  };

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      alert("Please fill all the fields");
      return;
    }
    toast('✅ Password saved successfully', {
      position: "bottom-left",
      autoClose: 3000,
      theme: "light",
    });
    const updated = [...passwords, { ...form, id: uuidv4() }];
    setPasswords(updated);
    localStorage.setItem("passwords", JSON.stringify(updated));
    setForm({ site: "", username: "", password: "" });
  };

  const deletePassword = (id) => {
    let confirmDelete = window.confirm("Are you sure you want to delete this password?");
    if (!confirmDelete) return;
    const updated = passwords.filter((item) => item.id !== id);
    setPasswords(updated);
    toast('🗑️ Password deleted', {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
    localStorage.setItem("passwords", JSON.stringify(updated));
  };

  const editPassword = (id) => {
    setForm(passwords.find((item) => item.id === id));
    const updated = passwords.filter((item) => item.id !== id);
    setPasswords(updated);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white 
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
        linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
        bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto 
          h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]">
        </div>
      </div>

      <div className="container m-auto px-4 sm:px-6 md:px-10 py-6">
        <div className="m-auto max-w-4xl p-4 sm:p-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-green-600">&lt;</span>
            Get
            <span className="text-green-600">PASS/&gt;</span>
          </h1>
          <p className="text-green-700 text-sm sm:text-base">
            Your Own Password Manager
          </p>

          {/* FORM */}
          <div className="flex flex-col p-4 m-3 gap-6 items-center">
            <input
              value={form.site}
              onChange={handleChange}
              placeholder="Enter Website URL"
              type="text"
              className="rounded-md border border-green-800 p-2 sm:p-4 w-full text-center"
              name="site"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
                type="text"
                className="rounded-md border border-green-800 p-2 sm:p-4 w-full"
                name="username"
              />
              <div className="relative w-full">
                <input
                  ref={passwordref}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  type="password"
                  className="rounded-md border border-green-800 p-2 sm:p-4 w-full"
                  name="password"
                />
                <button
                  onClick={Showpassword}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <img
                    src="icons/eye.png"
                    alt="toggle password"
                    className="w-[22px] sm:w-[26px]"
                    ref={ref}
                  />
                </button>
              </div>
            </div>

            <button
              onClick={savePassword}
              className="flex justify-center items-center bg-green-600 hover:bg-green-700 w-fit rounded-full py-2 px-4 gap-2 text-white text-sm sm:text-base"
            >
              <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
              Save
            </button>
          </div>

          {/* PASSWORDS TABLE */}
          <div className="passwords mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Your Passwords</h2>
            {passwords.length === 0 && (
              <div className="text-center text-green-700 mt-4">No Passwords Saved</div>
            )}
            {passwords.length !== 0 && (
              <div className="overflow-x-auto mt-4">
                <table className="table-auto min-w-full border border-green-800 bg-green-100 rounded-md">
                  <thead className="text-lime-50 bg-green-500">
                    <tr>
                      <th className="px-2 py-2">Site</th>
                      <th className="px-2 py-2">Username</th>
                      <th className="px-2 py-2">Password</th>
                      <th className="px-2 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passwords.map((item, index) => (
                      <tr key={index} className=" hover:bg-green-200">
                        <td className="py-2 px-2 text-center break-all">
                          <div className="flex items-center justify-center gap-2">
                            <a href={item.site} target="_blank" rel="noreferrer" className="truncate">{item.site}</a>
                            <div className="size-6 cursor-pointer" onClick={() => copyonClipboard(item.site)}>
                              <lord-icon src="https://cdn.lordicon.com/xuoapdes.json" trigger="hover" colors="primary:#0a5c15"></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 px-2 text-center">{item.username}</td>
                        <td className="py-2 px-2 text-center">{item.password}</td>
                        <td className="py-2 px-2 text-center flex justify-center gap-2">
                          <span className="cursor-pointer" onClick={() => deletePassword(item.id)}>
                            <lord-icon src="https://cdn.lordicon.com/xyfswyxf.json" trigger="hover" colors="primary:#0a5c15" style={{ width: "25px", height: "25px" }}></lord-icon>
                          </span>
                          <span className="cursor-pointer" onClick={() => editPassword(item.id)}>
                            <lord-icon src="https://cdn.lordicon.com/umuwriak.json" trigger="hover" colors="primary:#0a5c15" style={{ width: "25px", height: "25px" }}></lord-icon>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
