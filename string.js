// Java Program to Implement Zhu–Takaoka String Matching
// Algorithm

// Importing required classes
import java.io.*;
import java.lang.*;
import java.util.*;

// Main class
public class GFG {

	// Declaring custom strings as inputs and patterns
	public static String string = "ABCABCDEABCDEA";
	public static String pattern = "ABCD";

	// And their lengths
	public static int stringlen = 14;
	public static int patternlen = 4;

	// Preprocessing and calculating the ZTBC for above
	// pattern by creating an integer array

	// As alphabets are 26 so
	// square matrix of 26 * 26
	public static int[][] ZTBC = new int[26][26];

	// Method
	// To calculate ZTBC to
	// print the indepattern at which the patternlenatches
	// occurs
	public static void ZTBCCalculation()
	{

		// Declaring variables within this scope
		int i, j;

		// Iterating over to compute
		// using nested for loops
		for (i = 0; i < 26; ++i)
			for (j = 0; j < 26; ++j)
				ZTBC[i][j] = patternlen;

		for (i = 0; i < 26; ++i)
			ZTBC[i][pattern.charAt(0) - 'A']
				= patternlen - 1;
		for (i = 1; i < patternlen - 1; ++i)
			ZTBC[pattern.charAt(i - 1) - 'A']
				[pattern.charAt(i) - 'A']
				= patternlen - 1 - i;
	}

	// Main driver method
	public static void main(String args[])
	{
		// Declare variables in main() body
		int i, j;

		// Calling the above created Method 1
		ZTBCCalculation();

		// Lastly, searching pattern and printing the
		// indepattern

		j = 0;

		// Till condition holds true
		while (j <= stringlen - patternlen) {

			i = patternlen - 1;
			while (i >= 0
				&& pattern.charAt(i)
						== string.charAt(i + j))
				--i;
			if (i < 0) {

				// Pattern detected
				System.out.println("Pattern Found at "
								+ (j + 1));
				j += patternlen;
			}

			// Not detected
			else
				j += ZTBC[string.charAt(j + patternlen - 2)
						- 'A']
						[string.charAt(j + patternlen - 1)
						- 'A'];
		}
	}
}
