import React, { useContext } from 'react';
import { SlSocialGoogle } from 'react-icons/sl';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';

const Signup = () => {

    const { user, register, updateUserProfile, googleLogin } = useContext(Authcontext)

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        register(email, password)
            .then(result => {
                const user = result.user
                handleupdateUser(name, photo)
                form.reset()
                toast.success('Successfully Sign Up!', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });

            })
            .catch(error => {
                toast.error(error, {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });
            })
    }

    const handleupdateUser = (name, picture) => {
        const profile = {
            displayName: name,
            photoURL: picture
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }


    const handleGoogleLogin = () => {
        googleLogin()
    }
    return (
        <div >
            <section class="relative flex flex-wrap lg:h-screen lg:items-center">
                <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/3 lg:px-8 lg:py-24">
                    <div class="mx-auto max-w-lg text-center">

                        <p class="mt-4 text-7xl font-bold text-gray-400">
                            Sign Up
                        </p>
                    </div>

                    <form
                        onSubmit={handleSignUp}
                        class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="name" class="sr-only">Name</label>

                            <div class="relative">
                                <input
                                    name='name'
                                    type="name"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Your name"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="photo" class="sr-only">Photo URL</label>
                            <div class="relative">
                                <input
                                    name='photo'
                                    type="photo"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Photo URL"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="Email" class="sr-only">Email</label>
                            <div class="relative">
                                <input
                                    name='email'
                                    type="email"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <div class="relative">
                                <input
                                    name='password'
                                    type="password"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <p class="text-sm text-gray-500">
                                Allready have account ?
                                <Link to='/signin' class="underline text-gray-50"> Sign In</Link>
                            </p>

                            <button
                                type='submit'
                                class="group relative inline-flex items-center overflow-hidden rounded border border-current my-1 px-8 py-3 text-teal-600 focus:outline-none focus:ring active:text-teal-500"

                            >
                                <span
                                    class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                                >
                                    <svg
                                        class="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span class="text-sm font-medium transition-all group-hover:ml-4">
                                    Sign up
                                </span>
                            </button>
                        </div>
                    </form>
                    <hr className='w-96 mx-auto my-4' />
                    <div>
                        <button
                            onClick={handleGoogleLogin}
                            class="group relative inline-flex items-center overflow-hidden rounded border border-current my-1 px-8 py-3 text-teal-600 focus:outline-none focus:ring active:text-teal-500"

                        >
                            <span
                                class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                            >
                                <SlSocialGoogle></SlSocialGoogle>
                            </span>

                            <span class="text-sm font-medium transition-all group-hover:ml-4">
                                Sign In Google
                            </span>
                        </button>
                    </div>
                </div>

                <div class="relative hidden lg:block md:hdden h-64 w-full sm:h-96 lg:h-full lg:w-2/3" style={{ backgroundColor: 'hsla(181, 100%, 7%, 1)', zIndex: '10' }}>
                    <div className=" map-container absolute md:top-56 md:left-52 lg:top-56 lg:left-72">
                        <iframe background="transparent" speed="1" style={{ width: '500px', height: '500px' }} src="https://embed.lottiefiles.com/animation/92809"></iframe>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Signup;