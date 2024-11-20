{
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(value => value in obj);
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    const result= validateKeys(person, ["name", "age"]);

}