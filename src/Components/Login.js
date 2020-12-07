import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <div className="bg-green-200 min-h-screen">
                <div className="flex justify-center">
                    <div className="bg-white w-80 md:w-96 top-40 absolute rounded-md shadow-2xl">
                        <div className="login-back p-4">
                            <img src={process.env.PUBLIC_URL + '/Images/avatar.svg'} className="w-28 mx-auto" alt="avatar" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-center text-blue-500 text-3xl font-bold font-serif">Login</h4>
                            <div className="flex flex-col mb-4 mt-4">
                                <input type="text" className="border py-2 px-3 text-grey-darkest rounded-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" placeholder="Enter email"></input>
                            </div>
                            <div className="flex flex-col mb-4 mt-4">
                                <input type="text" className="border py-2 px-3 text-grey-darkest rounded-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" placeholder="Enter password"></input>
                            </div>
                            <div className="flex flex-col mb-4 mt-4">
                                <button className="bg-green-400 p-3 rounded-md text-white text-xl font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                                    Login
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login;