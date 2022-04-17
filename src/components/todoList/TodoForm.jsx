import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function TodoForm({addItem}){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const[titleError, setTitleError]=useState(false);
    const[contentError, setContentError]=useState(false);
    const handleSubmission = (e) => {
        e.preventDefault();
        if(title.length==0){
            setTitleError(true);
        }
        else if(content.length==0){
            setContentError(true);
        }
        else{
            addItem({ title, content });
            setTitle("");
            setContent("");
        }
      };
    return(
        <div className="">
            <Form onSubmit={handleSubmission}>
                <Form.Group className="mb-3 mx-auto col-6"   controlId="formBasicTitle">
                    <Form.Label>Tile</Form.Label>
                    <Form.Control type="text"  name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {titleError&& <p>Title Requiered</p>}
                </Form.Group>

                <Form.Group className="mb-3 mx-auto col-6"  controlId="formBasicContent" >
                    <Form.Label>Contant</Form.Label>
                    <Form.Control type="text"  name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                    {contentError && <p>Content Requiered</p>}
                </Form.Group >
                <Form.Group className="mb-3 mx-auto col-6" >
                <Button   variant="primary " type="submit">
                    Add Todo 
                </Button>
                </Form.Group >
            </Form>
        </div>
    )
}
export default TodoForm