import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TodoList from "./TodoList";

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
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    const toggleButton = screen.getAllByText('Completed')[0];
    fireEvent.click(toggleButton);

    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');

     // Click the toggle button again to mark the todo as not completed
     fireEvent.click(toggleButton);
    
     // Verify the todo is not completed
     expect(todoItem).not.toHaveStyle('text-decoration: line-through');
})

test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];
  
    fireEvent.click(deleteButton);
  
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });