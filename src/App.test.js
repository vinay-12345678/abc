import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextBox from './Components/Textbox';
import '@testing-library/jest-dom'

test('clearing the text area', () => {
  render(<TextBox />);
  
  userEvent.type(screen.getByRole("textbox"),"jHd siudugf  iuegf");
  userEvent.click(screen.getByText('Clear'));
  const paragraph=screen.getByTestId("preview");
  expect(paragraph).toHaveTextContent("");


});

test('convert textarea to Uppercase ', () => {
  render(<TextBox />);
  
  userEvent.type(screen.getByRole("textbox"),"KJWDHKJ iih HWDIHUIahdsh uiAD");
  userEvent.click(screen.getByText('Convert To Uppercase'));
  const paragraph=screen.getByTestId("preview");
  expect(paragraph).toHaveTextContent("KJWDHKJ IIH HWDIHUIAHDSH UIAD");


});

test('convert textarea to lowercase than uppercase ', () => {
  render(<TextBox />);
  
  userEvent.type(screen.getByRole("textbox"),"KJWDHKJ iih HWDIHUIahdsh uiAD");
  userEvent.click(screen.getByText('Convert To Lowercase'));
  userEvent.click(screen.getByText('Convert To Uppercase'));
  const paragraph=screen.getByTestId("preview");
  expect(paragraph).toHaveTextContent("KJWDHKJ IIH HWDIHUIAHDSH UIAD");


});


test('convert textarea to Uppercase than lowercase ', () => {
  render(<TextBox />);
  
  userEvent.type(screen.getByRole("textbox"),"MHVBD Jgdhg yG Dg uig dugUIGD Ugd");
  userEvent.click(screen.getByText('Convert To Uppercase'));
  userEvent.click(screen.getByText('Convert To Lowercase'));
  const paragraph=screen.getByTestId("preview");
  expect(paragraph).toHaveTextContent("mhvbd jgdhg yg dg uig duguigd ugd");


});

test('convert single character to lowercase', () => {
  render(<TextBox />);
  
  userEvent.type(screen.getByRole("textbox"),"A");
  userEvent.click(screen.getByText('Convert To Lowercase'));
  const paragraph=screen.getByTestId("preview");
  expect(paragraph).toHaveTextContent("a");

});


test('Check the total word count ', () => {
  render(<TextBox />);
  
  userEvent.type(screen.getByRole("textbox"),"Hello");
  const wordCount=screen.getByTestId("number-of-word");
  expect(wordCount).toHaveTextContent(1);
});


test('Check the total character count ', () => {
  render(<TextBox />);
  
  userEvent.type(screen.getByRole("textbox"),"wkdnbsh iuwdhsuif iuhfd uhdoif oifvcho feudohiouefhd.    djfoij rfdoij fi. rfi ijioj oi.     efodhj");
  const wordCount=screen.getByTestId("number-of-character");
  expect(wordCount).toHaveTextContent(99);
  
});
