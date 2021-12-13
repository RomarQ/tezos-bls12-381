import { Fr } from '@noble/bls12-381';

/**
 * @description Convert hexadecimal to a Prime Field.
 *
 * @param {string} byteString
 *
 * @return {Fr} Prime Field
 */
export const frOfHex = (byteString: string): Fr => {
    return new Fr(bigIntOfHex(bigEndianToLittleEndian(byteString)));
};

/**
 * @description Convert hexadecimal big endian to little endian.
 *
 * @param {string} byteString - e.g. 000000000000000000000000000000000000000000000000000126ad20e84000
 *
 * @return {string} - e.g. 0040e820ad260100000000000000000000000000000000000000000000000000
 */
export const bigEndianToLittleEndian = (byteString: string): string => {
    if (byteString.startsWith('0x')) {
        byteString = byteString.slice(2);
    }
    const len = byteString.length;
    let bigEndianHexString = '';
    for (let i = 0; i < len / 2; i++) {
        bigEndianHexString += byteString.substring(len - (i + 1) * 2, len - i * 2);
    }
    return bigEndianHexString;
};

/**
 * @description Convert hexadecimal to big int.
 *
 * @param {string} byteString
 *
 * @return {bigint}
 */
export const bigIntOfHex = (hex: string): bigint => BigInt(`0x${hex}`);
