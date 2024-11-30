import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const validationErrors = {};

        // Validasi Nama
        if (!data.name) {
            validationErrors.name = 'Name is required.';
        } else if (data.name.length < 3) {
            validationErrors.name = 'Name must be at least 3 characters.';
        }

        // Validasi Email
        if (!data.email) {
            validationErrors.email = 'Email is required.';
        } else if (data.email.length < 5 || data.email.length > 100) {
            validationErrors.email = 'Email must be between 5 and 100 characters.';
        } else if (!data.email.includes('@')) {
            validationErrors.email = 'Email must include a domain (e.g., @gmail.com).';
        } else if (!/\S+@[a-zA-Z]+\.\S+/.test(data.email)) {
            validationErrors.email =
                'Email must include a valid domain name (e.g., @gmail.com).';
        }

        // Validasi Password
        if (!data.password) {
            validationErrors.password = 'Password is required.';
        } else if (data.password.length < 8) {
            validationErrors.password = 'Password must be at least 8 characters.';
        } else if (data.password.length > 20) {
            validationErrors.password = 'Password must not exceed 20 characters.';
        }

        // Validasi Konfirmasi Password
        if (!data.password_confirmation) {
            validationErrors.password_confirmation = 'Password confirmation is required.';
        } else if (data.password !== data.password_confirmation) {
            validationErrors.password_confirmation = 'Passwords do not match.';
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const submit = (e) => {
        e.preventDefault();

        if (validate()) {
            post(route('register'), {
                onFinish: () => reset('password', 'password_confirmation'),
            });
        } else {
            console.log('Validation failed:', errors);
        }
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className={`mt-1 block w-full ${
                            errors.name ? 'border-red-500' : ''
                        }`}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    {errors.name && (
                        <div className="mt-2 text-sm text-red-500">
                            {errors.name}
                        </div>
                    )}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className={`mt-1 block w-full ${
                            errors.email ? 'border-red-500' : ''
                        }`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    {errors.email && (
                        <div className="mt-2 text-sm text-red-500">
                            {errors.email}
                        </div>
                    )}
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className={`mt-1 block w-full ${
                            errors.password ? 'border-red-500' : ''
                        }`}
                        aria-invalid={errors.password ? 'true' : 'false'}
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    {errors.password && (
                        <div className="mt-2 text-sm text-red-500">
                            {errors.password}
                        </div>
                    )}
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={`mt-1 block w-full ${
                            errors.password_confirmation ? 'border-red-500' : ''
                        }`}
                        aria-invalid={errors.password_confirmation ? 'true' : 'false'}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    {errors.password_confirmation && (
                        <div className="mt-2 text-sm text-red-500">
                            {errors.password_confirmation}
                        </div>
                    )}
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
