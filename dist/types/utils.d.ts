import { Fr } from 'noble-bls12-381';
/**
 * @description Convert hexadecimal to a Big Integer.
 *
 * @param {string} byteString - e.g. d30edc8fce6c34442d371da0e24fc3fb83ea957cfea9766c62a531dda98e4b52
 *
 * @return {BigInt} Big Integer
 */
export declare const bigIntOfHex: (byteString: string) => bigint;
/**
 * @description Convert hexadecimal to a Prime Field.
 *
 * @param {string} byteString
 *
 * @return {Fr} Prime Field
 */
export declare const frOfHex: (byteString: string) => Fr;
