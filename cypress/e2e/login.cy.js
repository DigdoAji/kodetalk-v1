/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email input is empty
 *   - should display alert when password input is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login form page correctly', () => {
    cy.get('input[placeholder="user@example.com"]').should('be.visible');
    cy.get('input[placeholder="Must be at least 6 characters"]').should('be.visible');
    cy.get('button').contains(/^Sign In$/).should('be.visible');
  });

  it('should display alert when email input is empty', () => {
    cy.get('button').contains(/^Sign In$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password input is empty', () => {
    cy.get('input[placeholder="user@example.com"]').type('samuelblazer@gmail.com');

    cy.get('button').contains(/^Sign In$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="user@example.com"]').type('swarmuser@gmail.com');
    cy.get('input[placeholder="Must be at least 6 characters"]').type('notpassword123');

    cy.get('button').contains(/^Sign In$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="user@example.com"]').type('samuelblazer@gmail.com');
    cy.get('input[placeholder="Must be at least 6 characters"]').type('hotaruismecha');
    cy.get('button').contains(/^Sign In$/).click();

    cy.get('header').contains(/^KodeTalk$/).should('be.visible');
    cy.get('Button[title="Logout"]').should('be.visible');

    cy.get('nav').contains(/^Home$/).should('be.visible');
    cy.get('nav').contains(/^Leaderboards$/).should('be.visible');
    cy.get('nav').contains(/^New Thread$/).should('be.visible');
  });
});
