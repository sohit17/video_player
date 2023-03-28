import React,{useEffect, useState} from 'react'
import BucketList from './components/BucketList'
import Card from './components/Card'
import CardList from './components/CardList'
import History from './components/History'


const App = () => {

  const [bucketMembers, setBucketMembers] = useState([
    {
      title: "Video 1",
      mediaLink : "https://www.youtube.com/embed/shZfe-1bEUU",
      bucketName : "For You"
    },
    {
      title: "Video 2",
      mediaLink : "https://www.youtube.com/embed/shZfe-1bEUU",
      bucketName : "For You"
    },
    {
      title: "Video 3 ",
      mediaLink : "https://www.youtube.com/embed/shZfe-1bEUU",
      bucketName : "Newest"
    },
    {
      title: "Video 4 ",
      mediaLink : "https://www.youtube.com/embed/shZfe-1bEUU",
      bucketName : "Newest"
    },
    {
      title: "Video 5",
      mediaLink : "https://www.youtube.com/embed/shZfe-1bEUU",
      bucketName : "Subscribed"
    },
    {
      title: "Video 6 ",
      mediaLink : "https://www.youtube.com/embed/shZfe-1bEUU",
      bucketName : "Recomendations"
    }
  ]);
  
  const [bucketNames, setbucketNames] = useState(["Educational","Motivational"]);
  const [history, setHistory] = useState([]);

  const [submitButton, setSubmitButton] = useState(true);
  const [editElement, setEditElement] = useState({});

  const [activeBucket, setActiveBucket] = useState("Educational");
  const [filteredBuckets, setFilteredBuckets] = useState([]);

  function addCard(cardData) {
    setBucketMembers(prevBucketMembers => {
      return [...prevBucketMembers, cardData];
    })
  }

  function deleteCard(id) {
    setBucketMembers(prevMembers => {
      return prevMembers.filter((prevItem, index) => {
        return index !== id;
      })
    })
  }

  function editCard(id) {
      console.log("Edit triggered for id: ",id)
      setSubmitButton(!submitButton);
      let triggeredCard = bucketMembers.find((elem,index) => {
          return index === id
      });
      deleteCard(id);
      const newObject = {...editElement, title:triggeredCard.title,
        mediaLink : triggeredCard.mediaLink,
        bucketName : triggeredCard.bucketName}
      setEditElement(newObject);
  }

  function addHistory(id){
    console.log("History added for id: ",id)
    let triggeredCard = bucketMembers.find((elem,index) => {
          return index === id
      });
    const newObject = {
      title: triggeredCard.title,
      mediaLink : triggeredCard.mediaLink,
      time : new Date().toLocaleTimeString()
    }
    setHistory(prevHistory => {
      return [...prevHistory,newObject]
    })
  }

  function newBucketAdded(bucketName){
    setbucketNames(prevBuckets => {
      return [...prevBuckets,bucketName];
    })
  }
  
  useEffect(() => {
    console.log(activeBucket)
    const newData = bucketMembers.filter(item => item.bucketName === activeBucket);
    setFilteredBuckets(newData);
  }, [bucketMembers,activeBucket]);


  return (
    <div className='bg-white text-black flex flex-col-2 h-full'>
      
      

      <div className='w-2/3'>
      

        <BucketList bucketMembers ={bucketMembers}
                    newBucketAdded = {newBucketAdded}
                    setActiveBucket = {setActiveBucket}
                    activeBucket = {activeBucket}
        />

        
       
        {filteredBuckets.map((member,id) => {          
          return <div className='flex'>
                    <CardList 
                        key = {id}
                        id = {id}
                        title={member.title}
                        mediaLink ={member.mediaLink} 
                        bucketName = {member.bucketName}
                        deleteCard={deleteCard}
                        editCard = {editCard}
                        addHistory = {addHistory}
                      />                                 
                  </div>
        })}
        <Card
          onAdd = {addCard}
          submitButton = {submitButton}
          setSubmitButton = {setSubmitButton}
          editElement = {editElement}
          bucketNames = {bucketNames}
          setEditElement = {setEditElement}
        />
      </div>

      <div className='w-1/3'>
        <History history = {history}/>
      </div>

        


    </div>
  )
}

export default App
