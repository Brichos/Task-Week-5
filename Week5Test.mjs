import { multiply } from './Week5.mjs';

//Calculator tests
 const multiplyTester = test("Testing multiply function")

 //Testing with positive numbers
multiplyTester.isEqual(multiply(2,3),6, "2 * 3 is equal to 6");
multiplyTester.isEqual(multiply(6,7),32, "6 * 7 is equal to 32"); 

 //Testing with zero

 //Testing with negative numbers