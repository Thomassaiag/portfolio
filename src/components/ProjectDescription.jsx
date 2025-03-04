import React from 'react'

const ProjectDescription = ({text}) => {
  return (
    <p className="mt-4 leading-loose text-slate-700">{text.split('\n').map((line, index)=>{
        return <React.Fragment key={index}>
            {line}
            <br/>
        </React.Fragment>
    })}</p>
    
  )
}

export default ProjectDescription