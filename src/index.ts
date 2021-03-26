import { PointG1, PointG2, pairing, Fq12 } from 'noble-bls12-381';

import { frOfHex, bigEndianToLittleEndian, bigIntOfHex } from './utils';

// G1

const addG1 = (byteString1: string, byteString2: string): string => {
    const point1 = PointG1.fromHex(byteString1);
    point1.assertValidity();
    const point2 = PointG1.fromHex(byteString2);
    point2.assertValidity();
    return point1.add(point2).toHex();
};

const negateG1 = (byteString: string): string => {
    const g1 = PointG1.fromHex(byteString).negate();
    g1.assertValidity();
    return g1.toHex();
};

const multiplyG1ByFr = (byteString1: string, byteString2: string): string => {
    const g1 = PointG1.fromHex(byteString1);
    g1.assertValidity();
    return g1.multiply(bigIntOfHex(bigEndianToLittleEndian(byteString2))).toHex();
};

// G2

const addG2 = (byteString1: string, byteString2: string): string => {
    const point1 = PointG2.fromHex(byteString1);
    point1.assertValidity();
    const point2 = PointG2.fromHex(byteString2);
    point2.assertValidity();
    return point1.add(point2).toHex();
};

const negateG2 = (byteString: string): string => {
    const g2 = PointG2.fromHex(byteString).negate();
    g2.assertValidity();
    return g2.toHex();
};

const multiplyG2ByFr = (byteString1: string, byteString2: string): string => {
    const g2 = PointG2.fromHex(byteString1);
    g2.assertValidity();
    return g2.multiply(bigIntOfHex(bigEndianToLittleEndian(byteString2))).toHex();
};

// Fr

const addFr = (byteString1: string, byteString2: string): string => {
    const frOne = frOfHex(byteString1);
    const frTwo = frOfHex(byteString2);
    return bigEndianToLittleEndian(frOne.add(frTwo).toString());
};

const negateFr = (byteString: string): string => {
    const fr = frOfHex(byteString);
    return bigEndianToLittleEndian(fr.negate().toString());
};

const multiplyFrByFr = (byteString1: string, byteString2: string): string => {
    const frOne = frOfHex(byteString1);
    const frTwo = frOfHex(byteString2);
    return bigEndianToLittleEndian(frOne.multiply(frTwo).toString());
};

const multiplyFrByInt = (byteString: string, int: string | number): string => {
    return bigEndianToLittleEndian(frOfHex(byteString).multiply(BigInt(int)).toString());
};

const convertFrToInt = (byteString: string): string => {
    return bigIntOfHex(bigEndianToLittleEndian(byteString)).toString(10);
};

/**
 * PAIRING_CHECK:
 * Verify that the product of pairings of the given list of points is equal to 1 in Fq12. Returns true if the list is empty.
 * Can be used to verify if two pairings P1 and P2 are equal by verifying P1 * P2^(-1) = 1.
 */
const pairingCheck = (list: string[][]): boolean => {
    let valid = true; // Returns true if the list is empty.

    if (list.length > 0) {
        const pair1G1 = PointG1.fromHex(list[0][0]);
        pair1G1.assertValidity();
        const pair1G2 = PointG2.fromHex(list[0][1]);
        pair1G2.assertValidity();
        const pair2G1 = PointG1.fromHex(list[1][0]);
        pair2G1.assertValidity();
        const pair2G2 = PointG2.fromHex(list[1][1]);
        pair2G2.assertValidity();
        const pair1 = pairing(pair1G1, pair1G2);
        const pair2 = pairing(pair2G1, pair2G2);
        valid = pair1.multiply(pair2).equals(Fq12.ONE);
    }

    return valid;
};

const Bls12 = {
    addG1,
    addG2,
    addFr,
    multiplyG1ByFr,
    multiplyG2ByFr,
    multiplyFrByFr,
    multiplyFrByInt,
    negateG1,
    negateG2,
    negateFr,
    convertFrToInt,
    pairingCheck,
};

export default Bls12;
