import Apple from '../assets/Apple.png'
import Facebook from '../assets/Facebook.png'
import GoogleAuth from '../assets/Google-Auth.png'

export const AuthBtn = ({ type }) => {
    return (
        <div className="bg-white w-[52px] h-[52px] rounded-[9.4px] flex justify-center items-center cursor-pointer">
            <div className="h-auto w-auto">
                { type === 'Apple' && <img className="w-full h-full" src={Apple} alt="apple"/>}
                { type === 'Facebook' && <img className="w-full h-full" src={Facebook} alt="facebook"/>}
                { type === 'GoogleAuth' && <img className="w-full h-full" src={GoogleAuth} alt="apple"/>}
            </div>
        </div>
    )
}