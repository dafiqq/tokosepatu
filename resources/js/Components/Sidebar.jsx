import React from 'react';
import { Link } from '@inertiajs/react';

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-50 dark:bg-gray-800">
            <div className="h-full px-3 py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    {/* Link Dashboard */}
                    <li>
                        <a href={route("dashboard")} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>
                    
                    {/* Link Manajemen Sepatu */}
                    <li>
                        <a href={route("sepatu.index")} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group">
                            <span className="flex-1 ms-3 whitespace-nowrap">Manajemen Sepatu</span>
                        </a>
                    </li>

                    {/* Item sidebar lainnya */}
                </ul>
            </div>
        </aside>
    );
}
