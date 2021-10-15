import React, {useState, useEffect} from 'react'


const Clock: React.FunctionComponent = () => {

  const [date, setDate] = useState(new Date());

  useEffect( ()=> {
    const intervalId = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalId);
    }
  })

  const tick = () => {
    setDate (new Date())
  }

    return ( 
            <div> 
              <h2>Now is  {date.toLocaleTimeString()}</h2>
            </div>
          )

}
  export default Clock;