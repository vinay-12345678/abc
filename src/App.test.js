import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textbox from './Components/Textbox';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc defghi j");
  userEvent.click(screen.getByText('Convert To Uppercase'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("ABC DEFGHI J");
  // userEvent.click(screen.getByText('Remove extra spaces'));
  // screen.debug();
  // userEvent.type(textbox,"ajdsbf ausdhf  dafg");
  // expect (textbox).toHaveAttribute("value","hsvdjvf")
  // console.log( expect(paragraph).toHaveTextContent("abc"));
  // console.log(textbox.getAttributeNode());
  // expect(textbox).toHaveValue("ajdsbf ausdhf  dafg");

});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"abc    def  f  ");
  userEvent.click(screen.getByText('Remove extra spaces'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("abc def f");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"ab iaush               fb");
  userEvent.click(screen.getByText('Remove extra spaces'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("ab iaush fb");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"a                  iuSdf iushdgsi dj suidh          isudf");
  userEvent.click(screen.getByText('Remove extra spaces'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("a iuSdf iushdgsi dj suidh isudf");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"jHd siudugf  iuegf");
  userEvent.click(screen.getByText('Clear'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"KJWDHKJ iih HWDIHUIahdsh uiAD");
  userEvent.click(screen.getByText('Convert To Uppercase'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("KJWDHKJ IIH HWDIHUIAHDSH UIAD");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"KJWDHKJ iih HWDIHUIahdsh uiAD");
  userEvent.click(screen.getByText('Convert To Lowercase'));
  userEvent.click(screen.getByText('Convert To Uppercase'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("KJWDHKJ IIH HWDIHUIAHDSH UIAD");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"MHVBD Jgdhg yG Dg uig dugUIGD Ugd");
  userEvent.click(screen.getByText('Convert To Lowercase'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("mhvbd jgdhg yg dg uig duguigd ugd");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"MHVBD Jgdhg yG Dg uig dugUIGD Ugd");
  userEvent.click(screen.getByText('Convert To Uppercase'));
  userEvent.click(screen.getByText('Convert To Lowercase'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("mhvbd jgdhg yg dg uig duguigd ugd");


});

test('renders learn react link', () => {
  render(<Textbox />);
  
  userEvent.type(screen.getByRole("textbox"),"");
  userEvent.click(screen.getByText('Convert To Lowercase'));
  const paragraph=screen.getByTestId("final");
  expect(paragraph).toHaveTextContent("");


});

