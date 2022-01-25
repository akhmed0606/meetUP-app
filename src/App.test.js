import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router';
import App from './App'
import AllMeetsPage from "./pages/AllMeet";
import NewMeetPage from "./pages/NewMeet";
import Favorites from "./pages/Favorites";

jest.mock('./pages/AllMeet');
jest.mock('./pages/NewMeet');
jest.mock('./pages/Favorites');
           
           //All Meetups
test("Should render ALL meetups page on default route", () => {

    // Arrange
    AllMeetsPage.mockImplementation(() => <div>AllMeetupsPage</div>);

    // Act
    render(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("AllMeetupsPage")).toBeInTheDocument();
    
})
              //New Meetups
test("Should render NEW meet page on new-meet route", () => {

    // Arrange
    NewMeetPage.mockImplementation(() => <div>NewMeetingDetailsPage</div>);

    // Act
    render(
      <MemoryRouter initialEntries={[ '/new-meet' ]}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("NewMeetingDetailsPage")).toBeInTheDocument();
    
})
             //Favorite
test("Should render FAVORITE meetups page on favorite route", () => {

    // Arrange
    Favorites.mockImplementation(() => <div>FavoriteMeetingDetailsPage</div>);

    // Act
    render(
      <MemoryRouter initialEntries={[ '/favorites' ]}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("FavoriteMeetingDetailsPage")).toBeInTheDocument();
    
})