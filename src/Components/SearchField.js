import { useState } from "react";
function SearchField({setCityName}) {
  const [text, setText] = useState("");

function handleOnClick() {
  if (text.trim() === "") {
    alert("Please enter a valid city name.");
    return;
  }
  setCityName(text);
}
  return (
    <>
      <div className="search-box">
        <input className="search-bar" type="text" placeholder="Search..." value={text} onChange={(e)=> setText(e.target.value)}/>
        <div className="img-box" tabIndex="0" onClick={handleOnClick}> {" "}<img src="https://images.avishkaar.cc/workflow/newhp/search-white.png"  alt="Search-Button"/>
          </div>
      </div>
    </>
  );
}
export default SearchField;


