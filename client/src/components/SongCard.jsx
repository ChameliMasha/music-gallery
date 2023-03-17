import React from 'react'
import { motion } from "framer-motion"
import { IoTrash } from 'react-icons/io5'

const SongCard = ({data, index}) => {
  return (
    
    <motion.div className='relatoive w-40 min-w-210 px-2 py-4 cursor-pointer hover:bg-card shadow-md rounded-lg flex flex-col items-center'>
      <div className='w-4= min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden'>
        <motion.img
          
          whileHover={{scale: 1.05}}
          src={data.imageURL}
          className='w-full h-full rounded-lg object-cover'
        />
      </div>
      <p className='text-base text-headingColor font-semibold my-2'>
        {data.name.length > 25 ? `${data.name.slice(0, 25)}..` : data.name}
        <span className='block text-sm text-gray-400 my-1'>
          
          {data.artist.length > 25 ? `${data.artist.slice(0, 25)}..` : data.artist }
        
        </span>

      </p>
      <div>
        <motion.i
          whileTap={{scale: 0.75}}
          className='text-base text-red-400 drop-shadow-md hover:text-red-600'>
          <IoTrash />
        </motion.i>
      </div>
    </motion.div>
  )
}

export default SongCard
