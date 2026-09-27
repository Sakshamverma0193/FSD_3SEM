/**
 * Determines whether a person is eligible to vote based on age.
 * @param {number} age - The age of the person.
 * @returns {boolean} True if age is 18 or older, false otherwise.
 */
export const isVote = (age) => {
    if (typeof age !== "number" || isNaN(age)) {
        throw new TypeError("Age must be a valid number");
    }
    return age >= 18;
};

export default isVote;