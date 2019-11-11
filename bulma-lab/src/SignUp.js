import React, {Component} from 'react';
import FormField from "./components/FormField";
import CoolButton from './components/CoolButton'


class SignUp extends Component {
    render() {
        return(
            <div>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

                <FormField
          label="Password"
          type="password"
          placeholder="Come up with something fancy"
          />


        <CoolButton type="button is-rounded" name='Sign In'/>
            </div> 
   
        );
    }
}


export default SignUp