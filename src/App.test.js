import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import App from './App'
import AllMeetsPage from "./pages/AllMeet";
import NewMeetPage from "./pages/NewMeet";
import Favorites from "./pages/Favorites";

jest.mock('./pages/AllMeet');
jest.mock('./pages/NewMeet');
jest.mock('./pages/Favorites');

