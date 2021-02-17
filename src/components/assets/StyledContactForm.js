import styled, { css } from 'styled-components';

const sharedStyles = css`
  background-color: #ccc;
<<<<<<< HEAD
  height: .5vw;
=======
  height: 40px;
>>>>>>> fc49f60ceeabe456594af305b8130802a992deff
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  height: 150%;
  margin-top: 4vw;
=======
  height: 100vh;
  margin-top: -3.7vw;
>>>>>>> fc49f60ceeabe456594af305b8130802a992deff
  padding: 0 20px;
`;

const StyledForm = styled.form`
<<<<<<< HEAD
  width: 50%;
  height:130%;
=======
  width: 100%;
  max-width: 700px;
>>>>>>> fc49f60ceeabe456594af305b8130802a992deff
  padding: 40px;
  background-color: #eee;
  color: #3d5a80;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(250, 250, 250, 0.4);
`;

  // border-radius: 10px; (if we want a round form)

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextAreaSubject = styled.textarea`
  background-color: #98c1d9;
  width: 100%;
<<<<<<< HEAD
  min-height: 5%;
=======
  min-height: 60px;
>>>>>>> fc49f60ceeabe456594af305b8130802a992deff
  resize: none;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #98c1d9;
  width: 100%;
<<<<<<< HEAD
  min-height: 20%;
=======
  min-height: 100px;
>>>>>>> fc49f60ceeabe456594af305b8130802a992deff
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #ee6c4d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
<<<<<<< HEAD
  height: 40%;
=======
  height: 40px;
>>>>>>> fc49f60ceeabe456594af305b8130802a992deff
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
		background-color: #3D5A80;
		cursor: pointer;
    opacity:0.7;
	}
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const ButtonSet = styled.div`
<<<<<<< HEAD
  background-color: #3d5a80;
  color: white;
  font-size:1.7em;
  position: absolute;
  border-radius:10px;
  bottom: 5%;
  width: 20%;
  left:  40%;
=======
  margin-top: 2vw;
  vertical-align: middle;
>>>>>>> fc49f60ceeabe456594af305b8130802a992deff
  text-align: center;
  padding: 0 20px;
`;

export default StyledFormWrapper;

export {
    StyledFormWrapper,
    StyledForm,
    sharedStyles,
    StyledInput,
    StyledTextArea,
    StyledButton,
    StyledError,
    StyledTextAreaSubject,
    ButtonSet
};