import React,{Component} from "react";
import { Row , Col } from "react-bootstrap";
import { useParams} from "react-router-dom";


// export default class Schedule extends Component {
    
//     //  componeneDidMount = ()=>{

//     //  }

//     render() {
//         return (
//            <div className="scheduler-container">
//     <Row className="m-5 p-2">
//       <Col><h2>This is some text within a card body. {this.id}</h2>
//       <h5 className="ps-2">11Pm </h5>
//       </Col>
//       <Col className=" d-flex justify-content-center align-items-center"><i className="far fa-trash-alt text-danger h3"></i></Col>
//     </Row>
//     </div>
   
//         )
//     }
// }


export default function Schedule() {
    const {id} = useParams()
    return (
       <h1>{id}</h1>
    )
}

