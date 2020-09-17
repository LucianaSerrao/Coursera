import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (<div></div>)
    }

}  

function RenderComments({comments}) {        
    const comment_ = comments.map(comment => {
        if (comment != null){
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'

                    }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            )
        }else{
            return (<div></div>)
        }
    })
    return(
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {comment_}
            </ul>

        </div>
    );
}
    
    
    const Dishdetail = (props) => {
        if (props.dish != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                       <RenderDish dish={props.dish} />
                       <RenderComments comments={props.dish.comments} />
                    </div>
                    
                </div>             
            )
            
        } else {
            return (<div></div>)
        }         
    }

export default Dishdetail;