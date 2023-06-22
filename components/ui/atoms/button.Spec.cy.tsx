import React from 'react';
import { mount } from '@cypress/react';
import Button from './Button';

describe('Button component', () => {
  it('renders button text', () => {
    const buttonText = 'Click me';
    mount(<Button>{buttonText}</Button>);
    cy.contains(buttonText).should('be.visible');
  });

  it('triggers onClick callback when clicked', () => {
    const onClick = cy.stub().as('clickHandler');
    mount(<Button onClick={onClick}>Click me</Button>);
    cy.get('button').click();
    cy.get('@clickHandler').should('have.been.calledOnce');
  });

  it('disables the button when isDisabled prop is true', () => {
    mount(<Button isDisabled>Click me</Button>);
    cy.get('button').should('be.disabled');
  });

  it('renders a spinner icon when isLoading prop is true', () => {
    mount(<Button isLoading>Click me</Button>);
    cy.get('svg[data-testid="tail-spin-svg"]').should('exist');
  });
});
