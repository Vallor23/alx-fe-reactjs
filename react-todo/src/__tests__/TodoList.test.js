import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TodoList from "../components/TodoList";

test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
})

test('adds a new todo', ()=>{
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new Todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, {target: {value: 'New Todo'}});
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
})

test('toggles todo completion status', ()=>{
    render(<TodoList />);
    const toggleButton = screen.getAllByText('completed')[0];

    fireEvent.click(toggleButton);

    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
})

test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];
  
    fireEvent.click(deleteButton);
  
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });