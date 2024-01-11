import React from 'react'
import { useState , useEffect } from 'react'
import Card from './Card';

interface CardProps {
  id: number;
  title: string;
  publishedAt: string;
  content: string;
  image: string;
}

function Form() {

    const [data, setData] = useState<CardProps[]>([]);

    useEffect(()=>{

        const fetchData = async()=>{

            try {
                const response = await fetch('https://jsonplaceholder.org/posts');

                const result = await response.json();
               
                setData(result);

                console.log(data);

            } catch (error) {
                 console.error('Error while fetching')
            }

        }

        fetchData();

    },[])



    // card = > image , title , publishDate , desc.

  return (
    <div className="cards-container">

           {
            data.map((item)=>(
                <Card
                  key={item?.id}
                  title={item?.title}
                  publishedAt={item?.publishedAt}
                  content={item?.content}
                  image={item?.image}
                 />
            )
            )
           }
    </div>
  )
}

export default Form
