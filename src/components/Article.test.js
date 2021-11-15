import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Article from './Article';

const articleTest = {
    id: 'a7xd8', 
    headline: "This is a headline", 
    createdOn: '2021-11-15T02:13:21-06:00', 
    summary: "This is the summary", 
    body: "This is the body"  
}

test('renders component without errors', () => {
    render(<Article />);
});

test('renders headline, author from the article when passed in through props', () => {
    render(<Article article={articleTest}/>);
    
    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');
   
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    
});

test('renders "Associated Press" when no author is given', () => {
    render(<Article article={articleTest} />);
    const author = screen.queryByTestId('author');
    expect(author).toHaveTextContent(/Associated Press/i);
});

test('executes handleDelete when the delete button is pressed', () => {
    const handleDelete = jest.fn();
    render(<Article article={articleTest} handleDelete={handleDelete}/>);
    const deleteBtn = screen.queryByTestId('deleteButton');
    userEvent.click(deleteBtn);
    expect(handleDelete).toHaveBeenCalled();
});