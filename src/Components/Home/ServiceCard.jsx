import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../store/mainStore";

const ServiceCard = ({ data }) => {
  const ExteriorWash = useCart((state) => state.ExteriorWash);
  const fullWash = useCart((state) => state.fullWash);
  const smallWash = useCart ((state)=>state.smallWash)

  const addFullWash = useCart((state) => state.addFullWash);
  const addExteriorWash = useCart((state) => state.addExteriorWash);
  const decFullWash = useCart((state) => state.decFullWash);
  const decExteriorWash = useCart((state) => state.decExteriorWash);
  const addsmallWash = useCart((state) => state.addsmallWash);
  const decSmallWash = useCart((state) => state.decSmallWash);

  const handleAdd =() =>{
    if(data.nameID == "full"){
      addFullWash()
    }
    if(data.nameID == "ext"){
      addExteriorWash()
    }
    if(data.nameID == "small"){
      addsmallWash()
    }
  }
  const handleRemove =() =>{
    
      if(data.nameID == "full"){
      decFullWash()
      console.log("called")
    }
    if(data.nameID == "ext"){
      decExteriorWash()
    }
    if(data.nameID == "small"){
      decSmallWash()
    }
  }
  return ( 
  <div>
    {/* Desktop View */}
    <div
      className="bg-[#FEF9ED] hidden sm:block h-24 w-28 sm:h-48 sm:w-64 rounded-xl text-center py-4 justify-center items-center mt-2.5">
      <h1 className="text-[16px] sm:text-2xl md:text-3xl text-[#5D2821] font-bold">
        
        {data.title}
      </h1>
      <h1 className="text-[15px] sm:text-xl md:text-2xl text-gray-700"> ₹{data.discountPrice} {"  "}
        <span className="line-through text-[12px] sm:text-[16px] md:text-xl">
          ₹{data.originalPrice}
        </span>
      </h1>
      {/* ADD to cart BUTTOn */}
      {data.nameID == "full" && fullWash == 0 ?
      <div className="hidden sm:flex  text-white justify-center items-center mt-10 ">
        <div className="bg-[#5D2821] w-[90%] p-2.5 rounded-xl" onClick={handleAdd}>Add To Cart</div>
      </div> :<></> }
      {data.nameID == "ext" && ExteriorWash == 0 ?
      <div className="hidden sm:flex  text-white justify-center items-center mt-10 ">
        <div className="bg-[#5D2821] w-[90%] p-2.5 rounded-xl" onClick={handleAdd}>Add To Cart</div>
      </div> :<></> }
      {data.nameID == "small" && smallWash == 0 ?
      <div className="hidden sm:flex  text-white justify-center items-center mt-10 ">
        <div className="bg-[#5D2821] w-[90%] p-2.5 rounded-xl" onClick={handleAdd}>Add To Cart</div>
      </div> :<></> }
      

      {/* Add remove buttons */}
      <div className="mt-5 hidden sm:block">
        {data.nameID == "full"  && fullWash > 0 ?  <div className=" flex justify-around  ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"  > - </div>
         <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }

        {
          data.nameID == "ext"  && ExteriorWash > 0 ?   <div className=" flex justify-around   ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"> - </div>
        <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }
        {
          data.nameID == "small"  && smallWash > 0 ?  <div className=" flex  justify-around ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"> - </div>
        <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }
      </div>
 

    </div>
    
    {/* Mobile View */}
    <div
      onClick={handleAdd}
      className="bg-[#FEF9ED] sm:hidden  h-24 w-28 sm:h-48 sm:w-64 rounded-xl text-center py-4 justify-center items-center mt-2.5">
      <h1 className="text-[16px] sm:text-2xl md:text-3xl text-[#5D2821] font-bold">
        
        {data.title}
      </h1>
      <h1 className="text-[15px] sm:text-xl md:text-2xl text-gray-700"> ₹{data.discountPrice} {"  "}
        <span className="line-through text-[12px] sm:text-[16px] md:text-xl">
          ₹{data.originalPrice}
        </span>
      </h1>
      {/* ADD to cart BUTTOn */}
      {data.nameID == "full" && fullWash == 0 ?
      <div className="hidden sm:flex  text-white justify-center items-center mt-10 ">
        <div className="bg-[#5D2821] w-[90%] p-2.5 rounded-xl" onClick={handleAdd}>Add To Cart</div>
      </div> :<></> }
      {data.nameID == "ext" && ExteriorWash == 0 ?
      <div className="hidden sm:flex  text-white justify-center items-center mt-10 ">
        <div className="bg-[#5D2821] w-[90%] p-2.5 rounded-xl" onClick={handleAdd}>Add To Cart</div>
      </div> :<></> }
      {data.nameID == "small" && smallWash == 0 ?
      <div className="hidden sm:flex  text-white justify-center items-center mt-10 ">
        <div className="bg-[#5D2821] w-[90%] p-2.5 rounded-xl" onClick={handleAdd}>Add To Cart</div>
      </div> :<></> }
      

      {/* Add remove buttons */}
      <div className="mt-5 hidden sm:block">
        {data.nameID == "full"  && fullWash > 0 ?  <div className=" flex justify-around  ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"  > - </div>
         <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }

        {
          data.nameID == "ext"  && ExteriorWash > 0 ?   <div className=" flex justify-around   ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"> - </div>
        <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }
        {
          data.nameID == "small"  && smallWash > 0 ?  <div className=" flex  justify-around ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"> - </div>
        <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }
      </div>
 

    </div>
       {/* Add Sub buttons */}
      <div className="mt-2  sm:hidden">
        {data.nameID == "full"  && fullWash > 0 ?  <div className=" flex justify-around  ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"  > - </div>
        <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }

        {
          data.nameID == "ext"  && ExteriorWash > 0 ?   <div className=" flex  justify-around  ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" > - </div>
        <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"  onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }
        {
          data.nameID == "small"  && smallWash > 0 ?  <div className=" flex justify-around  ">
        <div onClick={handleRemove} className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]"> - </div>
        <div>
          {
           data.nameID == "full" && fullWash >0 ? fullWash :<></>
          } 
          {
           data.nameID == "ext" && ExteriorWash >0 ? ExteriorWash :<></>
          } 
          {
           data.nameID == "small" && smallWash >0 ? smallWash :<></>
          } 
          </div>
        <div className="bg-[#5D2821] px-3 sm:w-14 sm:h-9 text-white rounded-[5px]" onClick={handleAdd}> + </div>
         </div> :
         <></> 
        }
      </div>

      
    </div>
  );
};

export default ServiceCard;
