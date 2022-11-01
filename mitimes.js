const axios = require('axios');

// Using snake case as Elixir uses it :)
const token_url = 'https://mitimes.com/careers/apply/secret';
const mi_post_url = 'https://mitimes.com/careers/apply';
const post_body = {
    name: "Dane Roe",
    email: "daneroe@gmail.com",
    job_title: "Software Developer",
    // I incorrectly assumed the "extra_information" property was a suggested name! Apologies! 
    about_me: {
        experience: `Per resume, NgRx experience has given me a good overview of functional style. Good deal of Elm overlap based on my research ie. registering actions, reducer functions which create new versions of state and update view. Specific experience developing Timesheet applications.`,
        why_should_you_hire_me: `Sincere interest in learning your stack and becoming more 'Functional Focused'. Very attracted to the product with my previous Timesheets experience but also very impressed at your willingness to use a tech stack that is perhaps less well understood, but a better solution to the requirements. This culture is one I would like to be a part of :)`,
    },
    final_attempt: true
};

// Header value should be called 'token'!
const header_config = (header_value) => {
    return config = { headers: { Authorization: header_value } }
};

// Using axios for HTTP request and promise chaining the token response into a new post request.
axios.get(token_url)
     .then(token => axios.post(mi_post_url, post_body, header_config(token.data))
     .then(res => console.log(res.data)))
     .catch(err => console.log(err))
