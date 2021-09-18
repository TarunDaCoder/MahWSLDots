#include <stdio.h>
#include <stdlib.h>

int main() {
    double num1;
    double num2;
    printf("Welcome to Simple Calculator\n");

    printf("Enter the first number: ");
    scanf("%lf", &num1);

    printf("Enter the second number: ");
    scanf("%lf", &num2);

    printf("After doing thorough addition, I have decided that the answer is %3.g\n", num1 + num2);
    return 0;
}
