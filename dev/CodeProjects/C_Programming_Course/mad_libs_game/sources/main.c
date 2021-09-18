#include <stdio.h>
#include <stdlib.h>

int main() {
    char colour[20];
    char noun[20];
    char celebrityF[10];
    char celebrityL[10];

    // Getting colour
    printf("Enter a colour: ");
    scanf("%s", colour);

    // Getting noun
    printf("Enter a plural noun: ");
    scanf("%s", noun);
    
    // Getting celebrity name
    printf("Enter a name of a celebrity: ");
    scanf("%s%s", celebrityF, celebrityL);

    printf("Roses are %s\n", colour);
    printf("%s are blue\n", noun);
    printf("I love %s %s\n", celebrityF, celebrityL);

    return 0;
}

