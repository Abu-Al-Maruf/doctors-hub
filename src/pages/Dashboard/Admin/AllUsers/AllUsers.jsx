import React, { useEffect } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })


    return (
        <div>
            <Helmet>
                <title>All Users</title>
            </Helmet>


            <div>
                {
                    users.map(user => <div key={user._id}>
                        <div className='flex justify-between items-center px-10'>
                            <h2 className='text-2xl font-bold'>{user.name}</h2>
                            <p className='text-lg'>{user.email}</p>
                            <p className='text-lg'>{user.role}</p>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllUsers;