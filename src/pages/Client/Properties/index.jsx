import { FilterHorizontal, Footer, FullSearch, Navbar, VerticalCard } from '@components';
import headerImg from '@images/Header.png'
import { useRecoilValue } from 'recoil';
import { searchState } from 'src/store/atoms/searchState';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Properties = () => {
    const searchData = useRecoilValue(searchState);

    const { data: cardData, error, isLoading } = useSWR(`${import.meta.env.VITE_HOST}/api/rental-app/appPropertyInfo`, fetcher)

    console.log(cardData?.data)

    if (isLoading) {
        return <div>Loading....</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <Navbar />
            <div className="w-full h-full flex justify-center relative">
                <img src={headerImg} alt="header" className='absolute -z-10 h-full w-full' />
                <h1 className='text-4xl py-[6%] text-white font-bold'>Properties in {searchData.location?.label}</h1>
            </div>
            <div className='w-full flex flex-col items-center bg-[var(--primary)]'>
                <div className="container flex justify-center -mt-8 ">
                    <FullSearch />
                </div>
                <div className='container'>
                    <div className='w-full py-8 text-white'>
                        <FilterHorizontal />
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className='text-xl mt-10 font-semibold'>Checkout Properties based on your location</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14 my-10'>
                    {cardData?.data?.map(item => {
                        return <VerticalCard key={item.id} {...item} />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Properties;