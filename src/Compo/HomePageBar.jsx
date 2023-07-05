import React, { useState, useEffect } from 'react';

function HomePageBar() {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const timer= setTimeout(()=>{
        setCurrentDiv(prevDiv=>prevDiv+1)
    },4000);


    return () => clearTimeout(timer); 
  }, [currentDiv])

  useEffect(() => {
    if(currentDiv===4){
        setCurrentDiv(1);
      }
    },[currentDiv]);
  



  return (
    <div className='homePageBar'>
      {currentDiv=== 1 && <div style={{fontSize:'20px'}}> אנו שמחים להציג את האתר החדש שלנו </div>}
      {currentDiv=== 2 && <div style={{fontSize:'20px'}}> מבצע קיץ- כל השרשראות עד 130 ש"ח</div>}
      {currentDiv=== 3 && <div style={{fontSize:'20px'}}> רק אצלנו-שרשרת בהפתעה</div>}
    
    </div>
  );
}

export default HomePageBar;
