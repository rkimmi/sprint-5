/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (var hashtag = '#'; hashtag.length <= 7; hashtag = hashtag += "#")
  console.log(hashtag);

/* FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
// Part One
for (upToHundred = 1; upToHundred <= 100; upToHundred++) {
    if ( (upToHundred % 3) == 0 ) {

       console.log('Fizz');
    } else if ( (upToHundred % 5) == 0 ) {

       console.log('Buzz');
    } else {
       // default
        console.log(upToHundred);
    }
}

// Part Two

for (upToHundred = 1; upToHundred <= 100; upToHundred++) {
    if ( (upToHundred % 3) == 0 && (upToHundred % 5) == 0 ) {
       // divisible by both 3 and 5
       console.log('FizzBuzz');

    } else if ( (upToHundred % 3) == 0 ) {

       console.log('Fizz');
    } else if ( (upToHundred % 5) == 0 ) {

       console.log('Buzz');
    } else {
       // default
        console.log(upToHundred);
    }
}

/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

var chessBoard = '';

// need two loops!
for (theRow = 1; theRow <= 8; theRow++) {
   chessBoard = ''; // reset
   for (theCol = 1; theCol <= 8; theCol++) {
      if ( (theRow % 2) == 0 ) {
         // even row, even col = #
         if ( (theCol % 2) == 0 ) {
            chessBoard += '#';
         } else {
            chessBoard += ' ';
         }
      } else {
         // odd row, odd col = ' '
         if ( (theCol % 2) == 0 ) {
            chessBoard += ' ';
         } else {
            chessBoard += '#';
         }
      }
   }

   console.log(chessBoard);
}

/*
I recieved a lot of help with this one, and am not entirely sure how it works exactly.
*/
