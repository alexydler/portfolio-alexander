import React from 'react'
import { IconType } from 'react-icons/lib'

type Props = {
    role: string;
    Icon: IconType;
    date?: string;
    description?: string;
    url?: string;
    company?: string;
    // NUEVO: Propiedad para cambiar el color de la empresa (Opcional)
    companyColor?: string; 
}

const ResumeCard = ({ Icon, role, date, description, url, company, companyColor = "text-cyan-300" }: Props) => {
    
    // Contenido de la tarjeta
    const cardContent = (
        <div className={`flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md border border-transparent ${url ? 'hover:border-cyan-400 hover:bg-blue-950/40 cursor-pointer group' : ''}`}>
            <div className='sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col shrink-0'>
                <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white' />
            </div>
            <div className='flex-1'>
                <div className="flex justify-between items-center">
                    {date && (
                        <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold'>
                            {date}
                        </h1>
                    )}
                </div>

                <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold'>
                    {role}
                </h1>
                
                {company && (
                    // AQUI USAMOS LA NUEVA VARIABLE companyColor
                    <h2 className={`${companyColor} text-lg font-medium mt-1`}>
                        {company}
                    </h2>
                )}

                <p className='text-gray-300 text-sm sm:text-base pt-3 leading-relaxed'>
                    {description}
                </p>
            </div>
        </div>
    );

    return (
        <div className='mb-6'>
            {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                    {cardContent}
                </a>
            ) : (
                cardContent
            )}
        </div>
    )
}

export default ResumeCard