import { useState } from "react";

export default function ProfileManager() {
  const [platforms, setPlatforms] = useState([]);
  const [formData, setFormData] = useState({
    linkedin: "",
    github: "",
    leetcode: "",
    stackoverflow: "",
    twitter: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or update platform
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing platform
      const updatedPlatforms = platforms.map((platform, index) =>
        index === editIndex ? formData : platform
      );
      setPlatforms(updatedPlatforms);
      setEditIndex(null);
    } else {
      // Add new platform
      setPlatforms([...platforms, formData]);
    }
    setFormData({
      linkedin: "",
      github: "",
      leetcode: "",
      stackoverflow: "",
      twitter: "",
    });
  };

  // Edit platform
  const handleEdit = (index) => {
    setFormData(platforms[index]);
    setEditIndex(index);
  };

  // Delete platform
  const handleDelete = (index) => {
    const updatedPlatforms = platforms.filter((_, i) => i !== index);
    setPlatforms(updatedPlatforms);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-green-500 mb-8">Manage Your Platforms</h1>

      {/* Form to Add/Update Platforms */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.linkedin}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="github"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="leetcode"
            placeholder="LeetCode URL"
            value={formData.leetcode}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="stackoverflow"
            placeholder="StackOverflow URL"
            value={formData.stackoverflow}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="twitter"
            placeholder="Twitter URL"
            value={formData.twitter}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          {editIndex !== null ? "Update Platform" : "Add Platform"}
        </button>
      </form>

      {/* Display Platforms */}
      <div className="space-y-4">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-green-500">LinkedIn: {platform.linkedin}</p>
              <p className="text-green-500">GitHub: {platform.github}</p>
              <p className="text-green-500">LeetCode: {platform.leetcode}</p>
              <p className="text-green-500">
                StackOverflow: {platform.stackoverflow}
              </p>
              <p className="text-green-500">Twitter: {platform.twitter}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}