import React,{useState,useEffect} from 'react'

const BucketList = ({bucketMembers,newBucketAdded, setActiveBucket, activeBucket}) => {
    console.log(activeBucket)
    let uniqueBucketNames = [...new Set(bucketMembers.map(item => item.bucketName))];
    const [bucketTypes, setBucketTypes] = useState(uniqueBucketNames);

    const [newBucketName, setNewBucketName] = useState("");
    const [addClicked, setAddClicked] = useState(false);
    
    function handleAdd () {
        setAddClicked(true);
    }

    function handleBucketName(event){
        const {value} = event.target;
        setNewBucketName(value);
    }

    function addBucket(){
        setBucketTypes([...bucketTypes,newBucketName]);
        newBucketAdded(newBucketName);
        setAddClicked(false);
        setNewBucketName("");
    }

    
  return (
    <div>
        {/* <p className='pt-8 text-xl font-bold py-2 ml-10'>Buckets :</p> */}
        <div className='flex pt-8 py-2 ml-6 border-gray-6000 w-[95%] ml-12'>
            {bucketTypes.map(member => {
                return <div className=' ml-5 pr-7 border-gray-600 border-r-4'>
                            <p  className={ activeBucket === member ? 
                                'flex font-bold bg-[#3c3c3c] text-black my-1 cursor-pointer rounded-sm':
                                'flex font-bold hover:bg-[teal] hover:text-black my-1 cursor-pointer rounded-sm' 
                            }
                                onClick = {() => setActiveBucket(member)}>
                                    {member}
                                </p>
                        </div>
                    
            })}

        {addClicked ? 
            <div> 
            <label className='ml-4 font-bold'>
            Bucket Name:
            <input className='border-2 ml-2 my-1 rounded-sm text-black'
                type="text"
                name="newBucketName"
                value={newBucketName} 
                onChange={handleBucketName}
            />
            <button onClick={addBucket} className='ml-4 border-2 px-2 hover:bg-[teal] hover:text-black rounded-sm'>Add Bucket</button>
        </label>
            
            </div> :
            <button onClick={handleAdd} className=' ml-80 pr-2 pl-2 border-2 hover:bg-[teal] hover:text-black' >Add New</button>}
        
        </div>
    </div>
  )
}

export default BucketList