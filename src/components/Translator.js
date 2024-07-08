import languages from "./languages";
import{ useState } from "react";

 function Translator(){
  const [fromLanguage, setFromLanguage] = useState('en-GB');
  const [toLanguage, setToLanguage] = useState('hi-IN');
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const handleTranslate = () =>{
      let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;
      fetch(url).then((res) => res.json()).then((data) =>{
        setToText(data.responseData.translatedText);
      });
    };
    return( 
      <>
       <div className="wrapper">
        <div className = "text-input">
        <textarea placeholder="Enter Text" className="from-input" value={ fromText } onChange={ (e) => setFromText(e.target.value) }></textarea>          
        <textarea className= "to-input"  value={ toText } onChange={ (e) => setToText(e.target.value) }></textarea>          

      </div>
      <ul className ="controls">
        <li className= "row from">
             <div className="icons">
             <i id ="from" class="fa-solid fa-volume-high"></i>
             <i id = "from" class="fa-solid fa-copy"></i>
             </div>
             <select value={ fromLanguage }  className="from-language" onChange={ (e) => setFromLanguage(e.target.value) }>
              {
               Object.entries(languages).map(([code,name]) =>(
                <option key={code} value={code}>{name}</option>
               ))
              } 
             </select>
            
        </li> 
  
        <li className = "exchange">
        <i class="fa-solid fa-right-left"></i>
        </li>
        <li className = "row to">
         
        <select value={ toLanguage } className="to-language" onChange={ (e) => setToLanguage(e.target.value) }>
           {
               Object.entries(languages).map(([code,name]) =>(
                <option key={code} value={code}>{name}</option>
               ))
              } 
          </select> 
         
          <div className="icons">
             <i id = "to"class="fa-solid fa-volume-high"></i>
             <i id = "to" class="fa-solid fa-copy"></i>
          </div>  
        </li>
      </ul>
      </div>
      <button onClick = {handleTranslate}>Translate</button>
      </>
    )
}

export default Translator;

