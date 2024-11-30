import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [emailWarning, setEmailWarning] = useState("");
    const [passwordWarning, setPasswordWarning] = useState("");

    const submit = (e) => {
        e.preventDefault();

        // Validasi Email
        if (data.email.length < 5 || data.email.length > 100) {
            setEmailWarning(
                "Email harus memiliki minimal 5 dan maksimal 100 karakter."
            );
            return;
        } else if (!data.email.includes("@")) {
            setEmailWarning(
                "Email harus mengandung domain (contoh: @gmail.com)."
            );
            return;
        } else {
            setEmailWarning("");
        }

        // Validasi Password
        if (data.password.length < 8) {
            setPasswordWarning("Password harus memiliki minimal 8 karakter.");
            return;
        } else if (data.password.length > 20) {
            setPasswordWarning("Password tidak boleh lebih dari 20 karakter.");
            return;
        } else {
            setPasswordWarning("");
        }

        // Mengirim data jika semua validasi berhasil
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={() => {
                                router.get("/");
                            }}
                            class="text-white bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            kembali
                        </button>
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form
                                class="space-y-4 md:space-y-6"
                                onSubmit={submit}
                            >
                                <div>
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                    {emailWarning && (
                                        <p className="text-red-500 text-sm mt-2">
                                            {emailWarning}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                    {passwordWarning && (
                                        <p className="text-red-500 text-sm mt-2">
                                            {passwordWarning}
                                        </p>
                                    )}
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label
                                                for="remember"
                                                class="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href={route("password.request")}
                                        class="text-sm font-medium text-teal-700 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    class="w-full text-white bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign in
                                </button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?{" "}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            router.get(route("register"));
                                        }}
                                        class="text-white bg-gradient-to-r from-green-500 to-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Register
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
