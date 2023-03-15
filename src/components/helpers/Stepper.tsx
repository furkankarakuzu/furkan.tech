import { FC } from 'react';
import Image from "next/image";

interface StepperProps {
    children: React.ReactNode,
    className:String
}
export const Stepper: FC<StepperProps> = (props) =>{
  return (
    <ol
      className={`position-relative border-start border-secondary text-secondary ${props.className}`}
    >
      {props.children}
    </ol>
  );
};

interface ImageObjects {
    path: string, 
    alt: string, 
    width: any, 
    height:any
}

interface StepProps {
    children: React.ReactNode, 
    icon: ImageObjects, 
}

export const Step: FC<StepProps> = (props) =>{
  return (
    <li className="mb-3 ms-2">
      <span className='position-absolute d-flex align-items-center justify-content-center rounded-circle bg-dark me-4' style={{left:"-18px"}}>
        <Image src={props.icon.path} alt={props.icon.alt} width={props.icon.width} height={props.icon.height} />
      </span>
      <div>{props.children}</div>
    </li>
  );
};