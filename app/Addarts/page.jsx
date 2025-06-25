"use client";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    categories: [],
    languages: [],
    fee: "",
    location: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const categoryOptions = ["Singer", "Dancer", "Speaker", "DJ"];
  const languageOptions = ["English", "Hindi", "Spanish", "French"];
  const feeOptions = ["$100-$500", "$500-$1000", "$1000-$5000", "$5000+"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field, option) => {
    setFormData((prev) => {
      const selected = prev[field];
      const updated = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];
      return { ...prev, [field]: updated };
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Artist Data:", formData);
    alert("Form submitted (check console)");
    const existing = JSON.parse(localStorage.getItem("artists")) || [];
    const updated = [...existing, formData];
    localStorage.setItem("artists", JSON.stringify(updated));

    setFormData({
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: "",
    });

    e.target.reset();
  };

  return (
    <div className="w-[calc(100dvw-1rem)] mx-auto px-4 py-10  bg-gradient-to-br from-white to-slate-300">
      <h1 className="text-3xl font-bold text-center mb-8">
        Artist Onboarding Form
      </h1>
      <div className="flex justify-center items-center  ">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-200 p-6 rounded-xl shadow-md "
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 rounded"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Bio</label>
            <textarea
              name="bio"
              rows="3"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Categories</label>
            <div className="flex flex-wrap gap-3">
              {categoryOptions.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.category?.includes(option)}
                    onChange={() => handleCheckboxChange("categories", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Languages Spoken</label>
            <div className="flex flex-wrap gap-3">
              {languageOptions.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.languages.includes(option)}
                    onChange={() => handleCheckboxChange("languages", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Fee Range</label>
            <select
              name="fee"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
              required
            >
              <option value="">Select fee</option>
              {feeOptions.map((fee) => (
                <option key={fee} value={fee}>
                  {fee}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Profile Image (optional)
            </label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="h-32 w-auto mt-3 rounded-md object-cover"
              />
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
