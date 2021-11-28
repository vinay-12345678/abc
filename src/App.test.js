import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textbox from './Components/Textbox';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"ajdsbf ausdhf  dafg");
  userEvent.click(screen.getByText('Convert To Uppercase'));

  const textbox=screen.getByTestId("mybox");
  // userEvent.type(textbox,"ajdsbf ausdhf  dafg");
  // expect (textbox).toHaveAttribute("value","hsvdjvf")
  expect (textbox).toHaveAttribute("placeholder","Text to be converted....")
  // console.log(textbox.getAttribute("placeholder"));
  // expect(textbox).toHaveValue("ajdsbf ausdhf  dafg");
});
