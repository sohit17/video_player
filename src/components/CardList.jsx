import React, {useState} from 'react'

const CardList = ({id, title, mediaLink, deleteCard, editCard, addHistory, activeBucket,bucketName}) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
        addHistory(id)
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("isMediaOpen: ", isModalOpen)
    };


    function handleDelete() {
        deleteCard(id)
    }

    function handleEdit(){
        editCard(id)
    }

    return (
    <div className='w-[90%] justify-center flex'>
        <div className='w-[25%] h-[90%] my-5 ml-10 bg-[gray] text-black rounded-sm ' >
                <p className='font-bold justify-center flex py-6' onClick={handleCardClick}>{title}</p>
                {isModalOpen && (
                    <div>
                    <iframe className='[w-425px] h-[250px]'  src={mediaLink} title="video player" allowFullScreen></iframe>
                    
                    </div>
                )}
                <div className='flex justify-center'>
                    {!isModalOpen ?<button onClick={handleDelete} className="bg-[#3c3c3c] text-black mt-2 px-9 border-2 hover:text-teal-500">Delete</button> : null}
                    {!isModalOpen ?<button onClick={handleEdit} className="bg-[#3c3c3c] text-black mt-2 px-10 border-2 hover:text-teal-500" >Edit</button> : null}
                </div>
        </div>
        <div>
            {isModalOpen ? <button className='mx-[150px] justify-center flex my-5 font-bold hover:text-black hover:bg-[gray] ' onClick={handleCloseModal}>Close</button> : null}

        </div>
    </div>
  )
}

export default CardList