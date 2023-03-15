import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
interface InfoCardProps { 
    title : String,
    subTitle : String,
    list : any,
    listName : String,
    dateStart : String,
    dateEnd : String,
    description : String,
    subTitleLink : any
}

export default function InfoCard ( 
    {
        title,
        subTitle,
        list,
        listName,
        dateStart,
        dateEnd,
        description,
        subTitleLink
    }: InfoCardProps){
    return (
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex flex-column">
              <h4 className="fw-bold text-light">
                {title}
              </h4>
              <h6 className="d-flex flex-wrap align-items-center gap-1 fw-normal text-light">
                <a className="me-2 d-flex align-items-center text-white" href={subTitleLink} target="_blank">
                  <span>{subTitle} <span className='text-muted'><FontAwesomeIcon icon={faArrowUpRightFromSquare} width="14" height={14} /> </span></span>
                </a>
                <span className="text-secondary fs-6">
                  ( {dateStart} - {dateEnd} )
                </span>
              </h6>
            </div>
          </div>
          <span dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}></span>
          {listName && (
            <span className="d-flex flex-wrap align-items-center gap-1 fw-bold text-secondary">
              {listName}:&nbsp;
              {list.map((item: any, index: any) => {
                return (
                  <span key={index}>
                    {item}
                    {index !== list.length - 1 && ","}
                  </span>
                );
              })}
            </span>
          )}
        </div>
      );
}