const mock = {
  loginResponse: {
    success: true,
    responseMsg: 'Signin successful',
    userToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRmNTA2MC0yOWVlLTExZTktOTNjMC04ZDdiZjBiYTc1ODgiLCJlbWFpbCI6InBpZW5yeTRnQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiZnVsbG5hbWUiOiJIZW5yeSIsImlhdCI6MTU0OTU5MTEyMCwiZXhwIjoxNTQ5Njc3NTIwfQ.AYkjS-jN3K3vf_UeLSoTaLRDpgo-mU3c5GZPxnYlHXw',
  },
  badResponse: {
    success: false,
    errorMsg: 'Bad request',
  },
};

export default mock;
