import { Pagination } from 'react-bootstrap';
import _ from "lodash";

interface paginationProps {
    currentPage: number;
    noOfPages: number;
    postsPerPage: number;
    onClick: () => void;
}

export default function Pages(props: paginationProps){
    const pages = _.range(1, props.noOfPages + 1);
    if (props.noOfPages === 1) return null;
    
    return (
        <>
            <Pagination>
             {props.currentPage !== 1 && (
                <Pagination.Prev />
             )}
            </Pagination>
        </>
    )
}