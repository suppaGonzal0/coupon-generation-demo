import PopUp from '../PopUp'
import './Coupons.css'
export const Coupon = ({coupons}) => {

    const couponList = coupons && coupons.map((coupon, index) => {
        return (
            <div className="coupon m-10" key={index}>
                <div className="center">
                    <div>
                        <p className='mb-2 line-clamp-1 max-w-[25ch]'>{coupon.title}</p>
                        <p className='text-sm line-clamp-2 max-w-[28ch] leading-4'>{coupon.description}</p>
                        <p className='text-sm text-bold mt-1'>Code: {coupon.code}</p>
                        <PopUp coupon={coupon}/>
                    </div>
                </div>

                <div className="right flex-1">
                    <p className='mb-2'>Spend: {coupon.minSpend}TK</p>
                    <p className='text-2xl'>{coupon.amount}TK</p>
                    <p>Max Discount</p>
                    <p className="text-xs mt-3 font-thin">Valid Until {coupon.expiryDate}</p>
                </div>

                <div className='circle1 left-[-25px]'></div>
                <div className='circle2 right-[-25px]'></div>

            </div>
        )
    })

    return (
        <div className="flex flex-wrap justify-center">
            {couponList}
        </div>
    )
}
