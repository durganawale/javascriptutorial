let characters = lowercase;

if (includeUppercase) {
    characters += uppercase;
}

if (includeNumbers) {
    characters += numbers;
}

if (includeSpecial) {
    characters += special;
}