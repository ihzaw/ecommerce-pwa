import SearchIcon from '../assets/search.png'
import { InputBox } from './Inputbox'

export const SearchBar = () => {
    return (
        <div className="flex items-center relative border border-grey-primary rounded-[10px] h-[45px] ml-[24px] mr-[25px] mt-[25px] py-[12.5px]">
            <img src={SearchIcon} alt="SearchIcon" className="absolute w-5 h-5 left-[15px]" />
            <input type="text" placeholder="Search headphone" className="ml-[47px] mr-5 leading-[20px] w-full outline-none placeholder-grey"/>
        </div>
    )
}