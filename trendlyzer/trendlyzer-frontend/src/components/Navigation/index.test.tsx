import { render, screen } from '@testing-library/react';
import { TrendDetailsContext } from '../../context/TrendDetailsContext';
import { AuthContext } from '../../context/AuthContext';
import Navigation from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation component', () => {
  it('renders all navigation links and logout button', () => {
    const mockShowNavigation = true;
    const mockAuth = { isAuthenticated: true, userName: 'John' };
    const mockHandleLogout = jest.fn();

    render(
      <BrowserRouter>
        <TrendDetailsContext.Provider value={{ showNavigation: mockShowNavigation }}>
          <AuthContext.Provider value={{ auth: mockAuth, handlelogout: mockHandleLogout }}>
            <Navigation />
          </AuthContext.Provider>
        </TrendDetailsContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Trends Details')).toBeInTheDocument();
    expect(screen.getByText('Explore Trends')).toBeInTheDocument();
    expect(screen.getByText('Analyze Sentiment')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
