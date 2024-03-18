import PropTypes from 'prop-types';

import { TiBookmark } from "react-icons/ti";

const Blog = ({blog, handleAddToBookmark , handleMarkAsRead}) => {
    const {title , hashtags, posted_date, cover , reading_time, author_img, author} = blog;
    return (
        <div className='mb-20 mb-4 space-y-4'>
        <img className='w-full mb-8' src={cover} alt={ `cover title ${title}`} />
         
         <div className='flex justify-between '>
                <div className='flex '  >
                <img className='w-14' src={author_img} alt="" />
                </div>
                <div className='text-2xl ml-8' > {author} </div>
                <p>
                    {posted_date}
                </p>

             <div>
                <span> {reading_time} min read </span>
                <button onClick={() => handleAddToBookmark (blog)} className='text-green-400 ml-4 text-2xl font-bold'>
                     <TiBookmark></TiBookmark> </button>
             </div>
         </div>
         
         <h2 className="text-4xl "> {title}  </h2>

         <p>
            {
                hashtags.map((hash ,idx) =>  <span key={idx} > <a href="">#{hash} </a> </span>
                )
            }
         </p>

         <button onClick={() =>handleMarkAsRead (reading_time) } className='text-purple-600 font-bold' >Mark As Read</button>

        </div>
    );
};
Blog.propTypes= {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;