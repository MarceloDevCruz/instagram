// Styled Component
import {
  Container, Photo,
  EditProfileButton, OtherLinks, Form
} from './styled'

// Bootstrap icons
import { BsX, BsCheck } from "react-icons/bs";

const EditProfile = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Container>
        <Form>
          <form onSubmit={handleSubmit}>
            <EditProfileButton>
              <button ><BsX /></button>
              <h2>Edit Profile</h2>
              <button type='submit'>< BsCheck /></button>
            </EditProfileButton>
            <Photo>
              <label htmlFor="file">Change profile photo</label>
              <input type="file" id="file" />
            </Photo>
            <input type="text" name="name" placeholder="Change name" />
            <input type="email" name="email" placeholder="Change email" disabled />
            <input type="text" name="bio" placeholder="Change bio" />
            <input type="password" name="password" placeholder="Change password" />
          </form>
          <OtherLinks>
            <p>Switch to Professional account</p>
            <p>Personal information settings</p>
          </OtherLinks>
        </Form>
      </Container>
    </>
  )
}

export default EditProfile