"use client";

import React from "react";
import Image from "next/image";
import { BusFront, User, Phone, MapPin, Clock } from "lucide-react";

interface BusInfo {
  name: string;
  routes: string[];
  status: 'Running' | 'Repairing' | 'Offline' | 'x';
  driverName: string;
  phone: string;
  imageSrc: string; 
}

const ALL_BUSES_INFO: BusInfo[] = [
  {
    name: "BRTC-04 (Joyonti)",
    routes: ["Barishal Club", "Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc04.png",
  },
  {
    name: "BRTC-05 (Chitra)",
    routes: ["Barishal Club", "Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc05.png",
  },
  {
    name: "BRTC-06 (Boikali/Kirtonkhola)",
    routes: ["Barishal Club"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc06.png",
  },
  {
    name: "BRTC-07",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc07.png",
  },
  {
    name: "BRTC-08",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc08.png",
  },
  {
    name: "BRTC-09",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc09.png",
  },
  {
    name: "BRTC-10",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc10.png",
  },
  {
    name: "BRTC-11 (Double Decker)",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc11.png",
  },
  {
    name: "BRTC-12",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc12.png",
  },
  {
    name: "BRTC-13",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc13.png",
  },
  {
    name: "BRTC-14",
    routes: ["Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_brtc14.png",
  },
  {
    name: "Andharmanik",
    routes: ["Natun Bazar"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_andharmanik.png",
  },
  {
    name: "Sugondha",
    routes: ["Natun Bazar"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_sugondha.png",
  },
  {
    name: "Sondha",
    routes: ["Natun Bazar"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_sondha.png",
  },
  {
    name: "Agunmukha",
    routes: ["Natun Bazar"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_agunmukha.png",
  },
  {
    name: "BRTC (Single Decker)",
    routes: ["Barishal Cantonment", "Ichladi Toll Plaza", "Jhalokathi Sadar"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_singlesecker.png",
  },
  {
    name: "Lata/Payra",
    routes: ["Barishal Club", "Nothullabad"],
    status: "x",
    driverName: "x",
    phone: "x",
    imageSrc: "/static/bus_lata.png",
  },
];

interface BusCardProps {
    info: BusInfo;
}

const BusCard: React.FC<BusCardProps> = ({ info }) => {
    const isRunning = info.status === 'Running';
    const statusColor = isRunning ? 'bg-green-100 text-green-700' : 
                        info.status === 'Repairing' ? 'bg-yellow-100 text-yellow-700' :
                        info.status === 'Offline' ? 'bg-red-100 text-red-700' :
                        'bg-gray-200 text-gray-700';

    return (
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-48 w-full bg-gray-200">
                <Image
                    src={info.imageSrc}
                    alt={`${info.name} Bus`}
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                        <BusFront className="text-red-600 w-6 h-6" /> {info.name}
                    </h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${statusColor}`}>
                        {info.status === 'x' ? 'Status N/A' : info.status}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm border-t pt-4 border-gray-100">
                    <div className="flex items-center text-gray-700">
                        <User className="w-4 h-4 mr-2 text-red-500" />
                        <span className="font-semibold mr-1">Driver:</span> {info.driverName}
                    </div>

                    <div className="flex items-center text-gray-700">
                        <Phone className="w-4 h-4 mr-2 text-red-500" />
                        <span className="font-semibold mr-1">Phone:</span> {info.phone}
                    </div>

                    <div className="col-span-2 text-gray-700 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span className="font-semibold mr-1">Routes:</span> {info.routes.join(', ')}
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="w-full py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                        View Live Location
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function BusesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto pt-16"> 
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-red-600 mb-3">
                        Meet Our Fleet
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A detailed look at the {ALL_BUSES_INFO.length} buses serving the Campus Connect network, showing their primary routes and operational status.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_BUSES_INFO.map((bus) => (
                        <BusCard key={bus.name} info={bus} />
                    ))}
                </div>

            </div>
        </div>
    );
}