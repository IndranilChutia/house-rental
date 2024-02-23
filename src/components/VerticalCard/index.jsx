
import { MdOutlineKingBed } from "react-icons/md";
import { IoMdPin, IoMdImages } from "react-icons/io";
import { PiIntersectSquareDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';



const VerticalCard = ({
    id,
    image,
    name = "Your Dream House",
    rent,
    bedroom,
    area,
    location = "123 Lane, Assam"
}) => {
    console.log(id, image, name, rent, bedroom, area, location)
    return (
        <div className='h-full max-w-96 overflow-hidden rounded-md cursor-pointer'>
            <Link to={`/property/${id}`}>
                <div className='max-h-80 h-80 overflow-hidden rounded-xl w-full bg-slate-200'>
                    {image ? <img className="h-full w-full object-cover" src={image} alt={name} /> : <div className='w-full h-80 flex justify-center items-center text-7xl text-white'><IoMdImages /></div>}
                </div>

                <div className='my-3 mx-2'>
                    <h1 className='font-medium w-full truncate'>{name}</h1>

                    <h2 className='text-sm text-slate-600 mt-2.5'>from &nbsp;&nbsp;<span className='text-lg font-openSans font-bold tracking-wide'>₹{rent ? rent : "XX,XXX"}</span></h2>

                    <div className='flex items-center mt-1 text-slate-600'>
                        {/* Bedroom */}
                        <div className='flex items-center justify-center gap-1'>
                            <MdOutlineKingBed />
                            <p className='text-xs text-slate-600'>{bedroom ? bedroom : 0} Bedroom</p>
                        </div>
                        {/* Dot */}
                        <span className='text-3xl'>・</span>
                        {/* Carpet Area */}
                        <div className='flex items-center justify-center gap-1'>
                            <PiIntersectSquareDuotone />
                            <p className='text-xs text-slate-600'>{area ? area : 0} sq.ft</p>
                        </div>
                    </div>

                    <div className='flex text-slate-600 items-center mt-1'>
                        <IoMdPin />
                        <p className='text-xs text-slate-600'>{location}</p>
                    </div>
                </div >
            </Link>
        </div >
    );
};

VerticalCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    rent: PropTypes.string,
    bedroom: PropTypes.string,
    area: PropTypes.string,
    location: PropTypes.string
};

export { VerticalCard };