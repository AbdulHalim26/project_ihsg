export default function StockTicker(){
    return(
    <div className="bg-black text-white p-2">
    <marquee>
        <span className="mr-10">
           BUMI: <span className="text-red-500">-5.11%</span>
            </span> 
        <span className="mr-10">
            DEWA: <span className="text-green-500">+7.20%</span>
        </span>
        <span className="mr-10">
            ARCI: <span className="text-red-500">-7.55%</span>
        </span>
        <span className="mr-10">
            PANI: <span className="text-green-500">+30.22%</span>
        </span>    
    </marquee>
    </div>
);
}