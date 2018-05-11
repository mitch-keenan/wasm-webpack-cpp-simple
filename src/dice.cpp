#include <time.h>
#include "emscripten/bind.h"

using namespace emscripten;

/**
 * This is a simple dice class that can be used in js.
 */


// NOTE: The H Definition needs to be in the same file, as mentioned in test.cpp
//  file linking does not work for this loader.
#ifndef DOG_H
#define DOG_H

class Dice {
private:
	int sides;
public:
	Dice(int sidesIn);
	int roll();
	void setSides(int sidesIn);
	int getSides();
};

#endif


// Define the constructor
Dice::Dice(int sidesIn): sides(sidesIn) {
	// Setting the random seed with the current timestamp.
	srand ( time(NULL) );
}

// Return a random number between 1 and the number of sides.
int Dice::roll() {
	return rand() % sides + 1;
}

void Dice::setSides(int sidesIn) {
	sides = sidesIn;
}

int Dice::getSides() {
	return sides;
}

/*
 * This sets up bindings that can be accessed on the js side.
 */
EMSCRIPTEN_BINDINGS (c) {
	class_<Dice>("Dice")
		.constructor<int>()
		.function("roll", &Dice::roll)
		.function("setSides", &Dice::setSides)
		.function("getSides", &Dice::getSides);
}