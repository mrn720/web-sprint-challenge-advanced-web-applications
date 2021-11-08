import Article from './Article';

test('renders component without errors', ()=> {
    const { rerender } = render(<Article article={[]}/>)
    let articleObjects = screen.queryAllByTestId('article')
    expect(articleObjects).toHaveLength(0)

    rerender(<Article articles={Article} />)
    articleObjects = screen.queryAllByTestId('article')
    expect(articleObjects).toHaveLength(3)

});

// test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article headline = {article.headline}/>)



// });

// test('renders "Associated Press" when no author is given', ()=> {

    render(<Article/>)

    const AssociatedPress = screen.queryByText(/no author is given/i)
    expect (AssociatedPress ).toBeInTheDocument()
// });

// test('executes handleDelete when the delete button is pressed', ()=> {

    render(<Article  handleDelete = {deleteButton}/>)


// });