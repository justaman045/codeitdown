import userScreen from '../../styles/userScreen.module.scss';

export default function Signup(){
    return (
      <div className="mycard">
        <div className="card auth-card input-field">
          <h2 className="card-heading">Codeitdown</h2>
          <input placeholder="Name" type="text" className="validate" />
          <input placeholder="E-mail" type="email" className="validate" />
          <input placeholder="Password" type="password" className="validate" />
          <button className="btn waves-effect waves-light #c2185b pink darken-2">
            Sign-Up
          </button>
          <h6>Already have an account ?</h6>
        </div>
      </div>
    );
}