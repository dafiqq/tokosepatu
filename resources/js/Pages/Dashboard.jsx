import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* Total Sales Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                                Total Sales
                            </h3>
                            <p className="text-2xl font-bold text-green-600 mt-2">
                                Rp 12,000,000
                            </p>
                        </div>

                        {/* Products Sold Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                                Products Sold
                            </h3>
                            <p className="text-2xl font-bold text-blue-600 mt-2">
                                320 Items
                            </p>
                        </div>

                        {/* New Users Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                                New Users
                            </h3>
                            <p className="text-2xl font-bold text-purple-600 mt-2">
                                45 Users
                            </p>
                        </div>
                    </div>

                    {/* Section for Charts or Graphs */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
                            Sales Overview
                        </h3>
                        <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            {/* Placeholder for a chart (e.g., use a chart library like Chart.js) */}
                            <p className="text-gray-500 dark:text-gray-400 text-center py-16">
                                Chart will be here
                            </p>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
                            Recent Activity
                        </h3>
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-4">
                                <p className="text-gray-600 dark:text-gray-300">
                                    John Doe purchased "Product A" -{" "}
                                    <span className="font-bold">
                                        Rp 300,000
                                    </span>
                                </p>
                            </li>
                            <li className="py-4">
                                <p className="text-gray-600 dark:text-gray-300">
                                    Jane Smith signed up as a new user.
                                </p>
                            </li>
                            <li className="py-4">
                                <p className="text-gray-600 dark:text-gray-300">
                                    Product B sold 10 items.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}