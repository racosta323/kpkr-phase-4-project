import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CreateUser from "./AllForm-don't delete";

function Form(){

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

    //not this
  //   } catch (error) {
  //     console.error("Error submitting form", error)
  //     alert("Error submitting form, please try again when you have more money")
  //   }
  // }
  // })

return (
  <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="bg-dark">
      <Carousel.Item>
        <CreateUser/>
      </Carousel.Item>

      <Carousel.Item>
        <CreateUser/>
      </Carousel.Item>

      <Carousel.Item>
        <CreateUser/>
      </Carousel.Item>
    </Carousel>
//   <form style={{width:"50%", margin:"auto", padding:"25px"}} onSubmit={formik.handleSubmit}>
// {/* Output for firstname */}
//     <label htmlFor="firstName">$et my $avings</label>
//     <input 
//       type="text"
//       id="firstName" 
//       name="firstName" 
//       placeholder="First Name..." 
//       onChange={formik.handleChange}
//       value={formik.values.firstName} 
//     />
//     {formik.errors.firstName ? ( <div style={{ color: "red" }}>{formik.errors.firstName}</div> ) : null}

//     <input 
//       type="text"
//       id="lastName" 
//       name="lastName" 
//       placeholder="Last Name..." 
//       onChange={formik.handleChange}
//       value={formik.values.lastName} 
//     />
//     {formik.errors.lastName ? ( <div style={{ color: "red" }}>{formik.errors.lastName}</div> ) : null}

    
//     <div className="submit-button"> 
//     <button type="submit" style={{ backgroundColor: "#459C6A", color: "white" }}>
//       Submit</button>
//     </div>
//   </form>
//   )
// }
)
}
export default Form