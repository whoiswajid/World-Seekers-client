/* eslint-disable react/prop-types */

import queryString from "query-string";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon,selected , tour }) => {
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate();
    const handleClick = () => {
        let currentQuery = {}
        if (params) {
            currentQuery = queryString.parse(params.toString())

            const updatedQuery = {
                ...currentQuery, category : label }

            const url = queryString.stringifyUrl({
                url: '/',
                query : updatedQuery,
            })
            navigate(url)
        }
    }
    params.get('category')
    return (
        <Link to={`/tour/${tour?._id}`} onClick={handleClick} className={`flex flex-col items-center justify-center gap-3 border-b-2 hover:text-blue-400 transition cursor-pointer ${selected? 'font-bold' : 'text-gray-500'}`} >
            <Icon></Icon>
            {label}
        </Link>
    );
};

export default CategoryBox;