import axios from "axios";

 
 export default function App(){
   return (
     <>
        <MyComponent />
     </>
   );
 }

 function MyComponent(){
   const [usera, setUsera] = useState("");
   const [userb, setUserb] = useState("");

   const [list, setList] = useState([]);

   const handelaChange = (e) => {
    setUsera(e.target.value);
   };

   const handelbChange = (e) => {
    setUserb(e.target.value);
   };

   const adduser = async () => {
     const url = "";
     const data = {
      user_a: usera,
      user_b: userb,
     };

     await axios.post(url,data);
   };

   const getuser = asyns () => {
     const url = "http://localhost:4000/user";
     const result = await axios.get(url);

     const list = result.data;

     const newList = [...list];
     setList(newList);
   };

   return(
     <div>
       <div> Chat App</div>
     <div>
       <input type="text"
      name=""
      value={user_a}
      onChange={handelaChange}
      placeholder="Whats up..!"/>
     </div>

    <div>
    <input type="text"
    name=""
    value={user_a}
    onChange={handelaChange}
    placeholder="Whats up..!"/>
    </div>

    <div>
    <input type="button"
    name=""
    value="send"
    onClick={adduser}
    placeholder="Whats up..!"/>
    </div>

   

    
  </div>
   )

 }
