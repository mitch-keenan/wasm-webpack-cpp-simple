#include <stdio.h>
#include <emscripten.h>
#include <emscripten/bind.h>
#include <string>

using namespace emscripten;

/*
 * Any main function will run on initialization.
 */
int main(int argc, char ** argv)
{
	// A printf will log to the js console.
	printf("WASM loaded!\n");
}

/*
 * Simple CPP function that returns a string. It fails cause there are issues
 *  with strings and other types, see: https://stackoverflow.com/a/41372484. You
 *  can still use strings, but you need Emscriptens help (see below).
 *
 * The EMSCRIPTEN_KEEPALIVE tag forces our dead-code function not to be
 *  eliminated during compilation.
 *
 * The `extern "C"` syntax is also needed when exporting a simple function with
 *  C types (not cpp) as return values or paramters from a cpp file.
 */
extern "C" char const * EMSCRIPTEN_KEEPALIVE getInitialMessageC() {
	return "This message came from a c function, click roll to start!";
}

/*
 * Returning a string here will work, because we bind it with emscripten 
 *  below, also note the lack of `extern "C"` and `EMSCRIPTEN_KEEPALIVE` which
 *  are also not needed when binding with emscripten.
 */
std::string getInitialMessageCPP() {
	return "This message came from a cpp function, click roll to start!";
}

/*
 * This sets up bindings that can be accessed on the js side.
 */
EMSCRIPTEN_BINDINGS (module) {
	function("getInitialMessageCPP", &getInitialMessageCPP);
}