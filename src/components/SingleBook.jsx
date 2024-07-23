
import { useLoaderData } from 'react-router-dom';
import {FaStar} from "react-icons/fa6";

const SingleBook = () => {
  const data = useLoaderData(); // Get the data from the loader
  console.log('Book Data:', data);

  if (!data) {
    return <div>Loading...</div>; // Show a loading message if data is not yet available
  }

  const { _id, bookTitle, imageUrl } = data; // Destructure the book data

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageUrl} alt="" className='h-96'/> {/* Display book image */}
      <h2>{bookTitle}</h2> {/* Display book title */}
      <div className='text-amber-500 flex gap-1'>   
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
    </div>
  );
}

export default SingleBook;
