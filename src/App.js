//import React from "react";
import Navbar from "./componants/Navbar";
import About from "./componants/About";
import Section from "./componants/Section";


let section_data =[
  {title:"skills", content:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change"},

  {title:"skills 2", content:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change"} 
]


const App = () => {
    return (
        <div>
            <Navbar/>
            <About>
                <hr />
            </About>
            
            {
                section_data.map((data, index)=>
                {   
                    return (                                 //if we use { return shoul be there }
                  <Section 
                  title={data.title}
                  content={data.content}
                  >
                   <hr />
                </Section>
                    )

                }
                )
            }
        </div>
    );
}

export default App;