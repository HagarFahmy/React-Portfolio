import { Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Select from "react-select"; 

const schema = yup.object({
    firstName: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();
  
const FormComponent = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const genders = [
        { value: "1", label: "Male" },
        { value: "2", label: "feMale" },
      ];

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'mango', label: 'Mango' },
    ]
    function onSubmitHandler(data) {
        console.log(data);
    }
    return (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <Form.Group className="m-auto col-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control {...register("email")} type="email"  placeholder="Enter email" />
                <p className="text-denger">{errors.email?.message}</p>
            </Form.Group>
            <Form.Group className="m-auto col-6" controlId="formBasicFirst">
                <Form.Label>First Name</Form.Label>
                <Form.Control {...register("firstName")} type="text" placeholder="First Name" />
                <p className="text-denger">{errors.firstName?.message}</p>
            </Form.Group>
            <Form.Group className="m-auto col-6" controlId="formBasicSecond">
                <Form.Label>Last Name </Form.Label>
                <Form.Control {...register("lastName")} type="text" placeholder="Last Name" />
                <p className="text-denger">{errors.lastName?.message}</p>
                
            </Form.Group>
            <Form.Group className="m-auto col-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control {...register("password")} type="password" placeholder="Password" />
                <p className="text-denger">{errors.password?.message}</p>
            </Form.Group>
            <Form.Group className="m-auto mt-2 col-6" controlId="formBasicGender">
                <Select name="gender" options={genders} />
            </Form.Group>
            <Form.Group className="m-auto mt-2 col-6" controlId="formBasicColors">
                <Select
                    defaultValue={[options[2], options[3]]}
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </Form.Group>
            <FormGroup className="m-auto mt-2 col-1">
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </FormGroup>
        </Form>

    )
}
export default FormComponent