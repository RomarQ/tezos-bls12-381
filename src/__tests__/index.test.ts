import { PointG1, PointG2 } from 'noble-bls12-381';

import Bls12 from '..';

const G1_SAMPLE =
    '17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1';
const G2_SAMPLE =
    '13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb80606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801';
const FR_SAMPLE = 'd30edc8fce6c34442d371da0e24fc3fb83ea957cfea9766c62a531dda98e4b52';

describe('BLS12-381', () => {
    describe('G1 Point', () => {
        it('add', () => {
            const output =
                '0572cbea904d67468808c8eb50a9450c9721db309128012543902d0ac358a62ae28f75bb8f1c7c42c39a8c5529bf0f4e166a9d8cabc673a322fda673779d8e3822ba3ecb8670e461f73bb9021d5fd76a4c56d9d4cd16bd1bba86881979749d28';

            expect(Bls12.addG1(G1_SAMPLE, G1_SAMPLE)).toBe(output);
        });
        it('negate', () => {
            const output =
                '17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb114d1d6855d545a8aa7d76c8cf2e21f267816aef1db507c96655b9d5caac42364e6f38ba0ecb751bad54dcd6b939c2ca';

            expect(Bls12.negateG1(G1_SAMPLE)).toBe(output);
        });
        it('multiply By Fr', () => {
            const output =
                '03f9c71a9cc3375dfbbae74c877690c37f634c7724c7cac820c8d10849db2034ecae27c9bbce98b28fc3f22522ff6ce9022f7cd70a8e74f3170c0020d9af54521eb5584a73aa7df5fd1117f4b7b25e4b75552a1e3cb79aca363af514af9719b6';

            expect(Bls12.multiplyG1ByFr(G1_SAMPLE, FR_SAMPLE)).toBe(output);
        });
    });
    describe('G2 Point', () => {
        it('add', () => {
            const output =
                '0a4edef9c1ed7f729f520e47730a124fd70662a904ba1074728114d1031e1572c6c886f6b57ec72a6178288c47c335771638533957d540a9d2370f17cc7ed5863bc0b995b8825e0ee1ea1e1e4d00dbae81f14b0bf3611b78c952aacab827a0530f6d4552fa65dd2638b361543f887136a43253d9c66c411697003f7a13c308f5422e1aa0a59c8967acdefd8b6e36ccf30468fb440d82b0630aeb8dca2b5256789a66da69bf91009cbfe6bd221e47aa8ae88dece9764bf3bd999d95d71e4c9899';

            expect(Bls12.addG2(G2_SAMPLE, G2_SAMPLE)).toBe(output);
        });
        it('negate', () => {
            const output =
                '13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb813fa4d4a0ad8b1ce186ed5061789213d993923066dddaf1040bc3ff59f825c78df74f2d75467e25e0f55f8a00fa030ed0d1b3cc2c7027888be51d9ef691d77bcb679afda66c73f17f9ee3837a55024f78c71363275a75d75d86bab79f74782aa';

            expect(Bls12.negateG2(G2_SAMPLE)).toBe(output);
        });
        it('multiply By Fr', () => {
            const output =
                '013b35a6a9af19a16dd4966deb50ec44f187ec86defab81ab4f6a9e57ac31fd060a61f0f1064cab2bb4ef5d18ae23a33094ef465be7de7d9061447101707e58bf0de9b478fe38fc0f773227300b684ddb079a0b2d441878ec90ac26b4c1f17ad080bdfcc191fbfcc419ea5c98cabc66719e26540ee1a4be84e29ad0807656fb91dec12be1e9e768c383af935bc0cba53077763962e045c7e9bf37ecfbba52eeb496babbbfe4c5ed244e9b1d2e0b613b7259abe120722798c3e3c6acbb248c105';

            expect(Bls12.multiplyG2ByFr(G2_SAMPLE, FR_SAMPLE)).toBe(output);
        });
    });
    describe('Prime Field (Fr)', () => {
        it('add', () => {
            const output = '4a54c3261ffff0afc0c0b329a7b9ffe70c9c3ef0fd57d8dbc54a63be531c96a1';

            expect(Bls12.addFr(FR_SAMPLE, FR_SAMPLE)).toBe(output);
        });
        it('negate', () => {
            const output = '14cc721684cec64c393c926f30f3ec0f2390b289015341919d5ace205671b4b0';

            expect(Bls12.negateFr(FR_SAMPLE)).toBe(output);
        });
        it('multiply By Fr', () => {
            const output = '17fe4bada86b9b7eae265c0bb6361ec23b3fe1319b74eed9b020ffbf9916339c';

            expect(Bls12.multiplyFrByFr(FR_SAMPLE, FR_SAMPLE)).toBe(output);
        });
        it('multiply By Int', () => {
            const int = 2;
            const output = '4a54c3261ffff0afc0c0b329a7b9ffe70c9c3ef0fd57d8dbc54a63be531c96a1';

            expect(Bls12.multiplyFrByInt(FR_SAMPLE, int)).toBe(output);
        });
        it('convertFrToInt', () => {
            const output = '43028393996057426870012898065490292689597965734854359027939594241474458176337';
            expect(Bls12.convertFrToInt(FR_SAMPLE)).toBe(output);
        });
    });
    describe('Pairing Check', () => {
        it('True', () => {
            const pair1G1 = PointG1.BASE.toHex();
            const pair1G2 = PointG2.BASE.toHex();
            const pair2G1 = PointG1.BASE.negate().toHex();
            const pair2G2 = PointG2.BASE.toHex();
            expect(
                Bls12.pairingCheck([
                    [pair1G1, pair1G2],
                    [pair2G1, pair2G2],
                ]),
            ).toBe(true);
        });
        it('Empty List => Also True', () => {
            expect(Bls12.pairingCheck([])).toBe(true);
        });
        it('False', () => {
            expect(
                Bls12.pairingCheck([
                    [G1_SAMPLE, G2_SAMPLE],
                    [G1_SAMPLE, G2_SAMPLE],
                ]),
            ).toBe(false);
        });
    });
});
