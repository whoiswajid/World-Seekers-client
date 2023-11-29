import axiosSecure from ".";

export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: "tourist",
        status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data
}


///user role
export const getRole = async (email) => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role
}


// all users
export const getAllUsers = async () => {
    const { data } = await axiosSecure('/users')
    return data
}


// update role

export const updateRole = async ({ email, role }) => {
    const currentUser = {
        email,
        role,
        status: 'Verified',
    }
    const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser)
     return data
}