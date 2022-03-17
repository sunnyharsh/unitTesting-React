import { useState } from "react";
const Greeting = () => {
  const [isChangedText, setChangedText] = useState(false);
  return (
    <div>
      <h1>Hello world!</h1>
      {!isChangedText && <p>It's good to see you!</p>}
      {isChangedText && <p>Changed</p>}
      <button onClick={() => setChangedText(!isChangedText)}></button>
    </div>
  );
};
export default Greeting;
