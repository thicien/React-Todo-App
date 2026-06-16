// import React, { useEffect, useState } from 'react';

// const useGetUserById = (userId) => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(null)
//   const [data, setData] = useState({
//     user: null,
//     posts: [],
//   });

//   useEffect(() => {
//     let isMounted = null;
//     try {
//       const response = fetch('https://jsonplaceholder.typicode.com/users');
//       const fetch =  await response.json();
//     if (!response.ok) {
//       throw new Error('Failed to fetch the data');
      
//     }
//     } catch (error) {
//       if (!isMounted) {
//         [setLoading]
//       }
      
//     }
    
    
//   }, [userId]);

//   return {};
// };

// const UserProfileDemo = () => {
//   const [selectedUserId, setSelectedUserId] = useState(1);
//   const { user, posts, loading, error } = useGetUserById(selectedUserId);

//   const handleUserChange = (event) => {
//     setSelectedUserId(Number(event.target.value));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 font-sans">
//       <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
//         User Profile & Posts
//       </h1>

//       <div className="flex justify-center items-center gap-4 mb-8">
//         <label htmlFor="userId" className="text-lg font-medium text-gray-700">
//           Select User ID:
//         </label>
//         <select
//           id="userId"
//           value={selectedUserId}
//           onChange={handleUserChange}
//           className="px-4 py-2 text-base border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
//         >
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id: number) => (
//             <option key={id} value={id}>
//               User {id}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && (
//         <div className="text-center text-lg text-gray-600 py-10">
//           Loading user data...
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center mb-6">
//           Error: {error}
//         </div>
//       )}

//       {!loading && !error && user && (
//         <>
//           <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
//             <div className="text-2xl font-bold text-gray-800 mb-4">
//               {user.name}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Username:</span> {user.username}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Email:</span> {user.email}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Phone:</span> {user.phone}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Website:</span> {user.website}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">City:</span>{" "}
//                 {user.address?.city}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Company:</span>{" "}
//                 {user.company?.name}
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
//               Posts ({posts.length})
//             </h2>

//             {posts.length === 0 ? (
//               <p className="text-center text-gray-600">
//                 No posts found for this user.
//               </p>
//             ) : (
//               <div className="grid gap-4">
//                 {posts.map((post) => (
//                   <div
//                     key={post.id}
//                     className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <div className="text-base font-bold text-gray-800 mb-2 capitalize">
//                       {post.title}
//                     </div>
//                     <div className="text-sm text-gray-600 leading-relaxed mb-3">
//                       {post.body}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
// ... (8 lines left)
// export default useProfileMemo;

const AddCarForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Moni Cooper',
    licensePlate: '',
    horsePower: '',
    fuelType: '',
    additionalInfo: ''
  })
}

import React, { useState } from "react";

const AddCarForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Moni Cooper",
    licensePlate: "",
    horsePower: "",
    fuelType: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="w-full max-w-md bg-[#1E5A78] p-6 rounded-t-3xl relative">

        {/* Top Circle */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-slate-900"></div>

        <h1 className="text-center text-white text-4xl font-serif font-bold mb-8 mt-6">
          NEW CAR
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-white mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="e.g. My Nice Moni Car"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-full bg-[#73A7C9] text-white placeholder-white outline-none"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-white mb-2">
              Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-full bg-[#73A7C9] text-white outline-none"
            >
              <option>Moni Cooper</option>
              <option>Toyota</option>
              <option>BMW</option>
              <option>Mercedes</option>
            </select>
          </div>

          {/* License & Horse Power */}
          <div className="grid grid-cols-2 gap-3">

            <div>
              <label className="block text-white mb-2">
                License Plate
              </label>

              <input
                type="text"
                name="licensePlate"
                placeholder="e.g. M-XY 123"
                value={formData.licensePlate}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-full bg-[#73A7C9] text-white placeholder-white outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">
                Horse Power
              </label>

              <input
                type="number"
                name="horsePower"
                placeholder="110"
                value={formData.horsePower}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-full bg-[#73A7C9] text-white placeholder-white outline-none"
              />
            </div>

          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-white mb-2">
              Fuel Type
            </label>

            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-full bg-[#73A7C9] text-white outline-none"
            >
              <option value="">Select Fuel Type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
            </select>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-white mb-2">
              Additional Information
            </label>

            <input
              type="text"
              name="additionalInfo"
              placeholder="e.g. No smoking"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-full bg-[#73A7C9] text-white placeholder-white outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-20">

            <button
              type="button"
              className="flex-1 border-2 border-white text-white py-3 rounded-full font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 bg-white text-[#1E5A78] py-3 rounded-full font-semibold"
            >
              Add Car
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddCarForm;