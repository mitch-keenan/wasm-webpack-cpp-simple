#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>

int main(int argc, char ** argv)
{
    printf("WASM loaded!\n");
    srand ( time(NULL) );
}

// Simple C function that rolls a dice with N sides.
int EMSCRIPTEN_KEEPALIVE roll_dice(int sides) {
    return rand() % sides + 1;
}