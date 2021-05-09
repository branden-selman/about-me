/* eslint-disable new-cap */
// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { YesOrNo } from 'utils.js';

const test = QUnit.test;

test('accept any word that starts with y and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = YesOrNo('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('accept any word that does NOT start with y and return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = YesOrNo('no');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

