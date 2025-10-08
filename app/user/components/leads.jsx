import React, { useEffect } from 'react'
import axios from "@/lib/axios";
import Filter from "./ui/filter";
import AutoLoad from './AutoLoad';
import { StarIcon } from '@heroicons/react/24/solid';

export default function leads() {
    const [leads, setLeads] = React.useState([]);
    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await axios.get('/leads/getLeads?email=test@test1.com');
                setLeads(response.data);
            } catch (error) {
                console.error('Error fetching leads:', error);
            }
        };
        fetchLeads();
    }, []);

    
    return (
        <div>
            <div className='relative h-[5rem] '>
                <div className='bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] w-full h-full rounded-2xl flex items-center pl-5'>
                    <div>
                    <div className=''>Hi, Alex Good Morning</div>
                    <div className='font-black upp'>Your Tasks</div>
                    </div>
                </div>
            
                <div className='absolute bottom-0 -right-1'>
                    <img src="/img/stickers/bunnyChar.png" alt="" className='w-[10rem]' />
                </div>
                
                </div>
            <div className='flex py-3 justify-between'>
                <Filter />
                <div role="button" className="px-5 py-2 flex items-center justify-center rounded-lg bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] cursor-pointer" ><StarIcon className="w-5 text-gray-800" /></div>
            </div>

            <div className=''>
                {leads.length > 0 && <AutoLoad leads={leads} />}
            </div>


            {leads.length === 0 && <div className='text-center  mt-20'>
                <img src="/img/stickers/noLeads.svg" alt="No leads" className="mx-auto mb-4 w-[20rem]" />
                <p className='text-lg'>
                    No Leads Available !!
                </p>
            </div>}
        </div>
    )
}
