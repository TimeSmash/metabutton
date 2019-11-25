import React from 'react'


function MetaButton (props) {
    // will receive >=2 of the following props:
    // pCompName = Name of parent component
    // pCompProps = Props of the parent component
    // pCompState = state of the parent component

    let showPropsOrState = () =>{
        
        if (!props.pCompName){

            alert("Warning! You never specified a name for pCompName. Please give MetaButton the parent component's name to continue. ")
            return null
        } else if (props.pCompName && props.pCompProps === undefined && props.pCompState === undefined){

            alert("Warning! You never gave MetaButton the parent component's state or props. Please give MetaButton the parent component's props, state, or both to continue. ")
        } else if (props.pCompName && (props.pCompProps || props.pCompState)){           
                
            
                if (props.pCompProps && props.pCompState){
                        console.log(`${props.pCompName} props`, props.pCompProps )
                        console.log(`${props.pCompName} state`, props.pCompState )
                } else if (props.pCompProps){
                    console.log(`${props.pCompName} props`, props.pCompProps )
                } else if (props.pCompState){
                    console.log(`${props.pCompName} state`, props.pCompState )
                }
            }
            
        }
      
// Uncomment the line below if you ever need to see MetaButton's props upon rendering.
//    console.log("MetaButton props", props.pCompProps)
   
    return (
            <button onClick={() => showPropsOrState("state")}>Console.log props/state for {props.pCompName}</button>
           
        
    )
}

export default MetaButton;
