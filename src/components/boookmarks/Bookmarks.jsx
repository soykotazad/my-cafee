import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:1/3 bg-gray-200 m-4 ">

            <h2 className=" text-2xl text-purple-800"> Total Time : {readingTime} </h2>
            <h2 className=" text-2xl text-red-400"> Bookmarks Blog:  {bookmarks.length} </h2>
           {
            bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark> )
           }
        
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
  
}

export default Bookmarks;