import React, { useEffect } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });


    // delete a user by id
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire("Deleted!", "The user has been deleted.", "success");
                    }
                });
            }
        });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <Helmet>
                <title>All Users</title>
            </Helmet>

            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Users Info</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                        <thead>
                            <tr className="bg-gray-300 text-gray-700 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Serial</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Role</th>
                                <th className="py-3 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-semibold">
                            {users.map((user, index) => (
                                <tr key={user._id} className="border-b border-gray-300 hover:bg-gray-200">
                                    <td className="py-3 px-6 text-left">{index + 1}</td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{user.name}</td>
                                    <td className="py-3 px-6 text-left">{user.email}</td>

                                    <td className='text-center text-gray-900'><span className={`py-1 px-3 rounded-full ${user.role === 'Admin' ? 'bg-lime-400' : "bg-blue-500"}`}>{user.role}</span></td>

                                    <td className="py-3 px-6 text-center flex justify-center gap-2">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">Update</button>
                                        <button onClick={() => { handleDelete(user._id) }} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
