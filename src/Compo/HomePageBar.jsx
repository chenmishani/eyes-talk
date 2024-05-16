import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePageBar() {
  const [currentDiv, setCurrentDiv] = useState(1);
  const nev = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDiv(prevDiv => prevDiv + 1)
    }, 4000);


    return () => clearTimeout(timer);
  }, [currentDiv])

  useEffect(() => {
    if (currentDiv === 4) {
      setCurrentDiv(1);
    }
  }, [currentDiv]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <div className='homePageBar'>
      {currentDiv === 1 && <div style={{ fontSize: '20px', fontFamily: 'Times New Roman Times rubik' }}>₪ משלוח עד הבית בחינם בקנייה מעל 249  </div>}
      {currentDiv === 2 && <div onClick={() => { nev('/chains') }} style={{ fontSize: '20px', fontFamily: 'Times New Roman Times rubik' }}>₪ מבצע קיץ- כל השרשראות מלבד פנינים עד 130 </div>}
      {currentDiv === 3 && <div onClick={() => { nev('/suprise') }} style={{ fontSize: '20px', fontFamily: 'Times New Roman Times rubik' }}> שרשרת בהפתעה!! לפרטים לחץ כאן</div>}

    </div>
  );
}

export default HomePageBar;
