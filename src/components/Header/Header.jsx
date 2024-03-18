import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className=' mx-auto flex justify-between items-center p-4  max-w-7xl mx-auto marker:border-b-4 '>
           <h1 className='text-5xl font-semibold bg-green-500'> Knowledge cafee</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;