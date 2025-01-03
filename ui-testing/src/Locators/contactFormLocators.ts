export const contactFormLocators = {

    firstNameInput: '[data-test="first-name"]',
    lastNameInput: '[data-test="last-name"]',
    emailInput: '[data-test="email"]',
    subjectSelect: '[data-test="subject"]',
    messageTextarea: '[data-test="message"]',
    submitButton: '[data-test="contact-submit"]',
    successAlert: 'div.alert.alert-success',
    contactButton: '[data-test="nav-contact"]',


      
  errorMessages: {
    lastNameRequired: 'div:has-text("Last name is required")',
    invalidEmail: 'div:has-text("Email format is invalid")',
    subjectRequired: 'div:has-text("Subject is required")',
    messageTooShort: 'div:has-text("Message must be minimal 50 characters")',
  },
  dropdownButton: '[data-test="nav-menu"]',
  myMessagesLink: '[data-test="nav-my-messages"]',

  };
