import React, { useEffect, useState } from "react";

function Card({submitButton,setSubmitButton,editElement,bucketNames,onAdd,setEditElement}) {
  
  const [cardData, setcardData] = useState({
    title : "",
    mediaLink: "",
    bucketName : ""
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setcardData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(cardData);
    setcardData({title : "",mediaLink:"", bucketName:""})
    setEditElement({});
  };

  useEffect(() => {
    setcardData(prevDetails => {
      return {...prevDetails, title : editElement.title,
         mediaLink : editElement.mediaLink,
         bucketName : editElement.bucketName
      }
    })
    
  }, [editElement])


  return (
    <div >
      {editElement.title === undefined ? 
        <form className="bg-[#3c3c3c] ml-48 mt-20 pt-6 w-[50%] border-solid border-2 border-[teal] rounded-xl" onSubmit={handleSubmit}>
          <label className="text-black ml-14 font-bold text-xl justify-center flex">
            Title:
            <input className="border-2 mx-2"
              type="text"
              name="title"
              value={cardData.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="text-black mx-auto font-bold text-xl justify-center flex">
            Media Link:
            <input className="border-2 mx-2"
              type="text"
              name="mediaLink"
              value={cardData.mediaLink}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className="text-black mx-auto font-bold text-xl justify-center flex">
            Chose a Bucket:
            <select className="border-2 mx-2" name="bucketName" value={cardData.bucketName} onChange={handleChange}>
              <option value="" >---Select---</option>
              {bucketNames.map(name => 
              {
              return <option value = {name}>{name}</option>
              })}
            </select>
          </label>
          
          <button className="text-white my-8 px-3 py-1 ml-[40%] font-bold text-xl  border-2 rounded-sm bg-black hover:text-[gray] " type="submit">
            Add
          </button>
        </form> :
        <div>
        <form className="bg-[teal] ml-36 mt-12 pt-6 w-[50%] border-solid border-2 border-[teal] rounded-xl" onSubmit={handleSubmit}>
          <label className="text-black ml-14 font-bold text-xl justify-center flex">
            Title :
            <input className="border-2 mx-2 rounded-md"
              type="text"
              name="title"
              value={cardData.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="text-black mx-auto font-bold text-xl justify-center flex">
            Media Link:
            <input className="border-2 mx-2 rounded-md"
              type="text"
              name="mediaLink"
              value={cardData.mediaLink}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className="text-black ml-12 font-bold text-xl flex">
            Select a Bucket:
            <select className="border-2 mx-2 rounded-md" name="bucketName" value={cardData.bucketName} onChange={handleChange}>
              <option value="" >---Select---</option>
              {bucketNames.map(name => 
              {
              return <option value = {name}>{name}</option>
              })}
            </select>
          </label>
          
          <button className="text-white my-8 px-3 py-1 ml-[40%] font-bold text-xl  border-2 rounded-md bg-black hover:text-[#00df9a] " type="submit">
            Edit
          </button>
        </form>
        </div>

      
    }
    </div>  
  );
}

export default Card;