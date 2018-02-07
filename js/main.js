var iceCream = [
    'rocky road',
    'cookies and cream',
    'cookie dough',
    'chocolate',
];

console.log(iceCream[0]);

var presidents = {
    last5: [
        {firstName: 'Donald', lastName: 'Trump', termLength: '4 years', party: 'Republican', yearsOfPresidency: '1'},
        {firstName: 'Barack', lastName: 'Obama', termLength: '8 years', party: 'Democrat', yearsOfPresidency: '8'},
        {firstName: 'George W.', lastName: 'Bush', termLength: '8 years', party: 'Republican', yearsOfPresidency: '8'},
        {firstName: 'Bill', lastName: 'Clinton', termLength: '8 years', party: 'Democrat', yearsOfPresidency: '8'},
        {firstName: 'George', lastName: 'H. W. Bush', termLength: '4 years', party: 'Republican', yearsOfPresidency: '8'},
    ]
};

console.log(presidents.last5[2].firstName);
console.log(presidents.last5[2].lastName);

// console.log(presidents.last5[2].firstName.lastName); is not working for me, not sure what I am doing wrong... :/

function howdy(person, message) {
    return person + ' says ' + message;
}

var message = howdy('Ryan Black', 'howdy!');
console.log(message);

// var numba ... not sure how to do this content

var numba = function (string) {
  return
}

// Not sure

var inception = function (display, favMovie) {
    return display + favMovie;
};

var favMovie = inception('Die Hard is a fantastic movie.');
console.log(favMovie);
