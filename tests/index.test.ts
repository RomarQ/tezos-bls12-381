import { PointG1, PointG2 } from '@noble/bls12-381';

import Bls12 from '../src';

const G1_SAMPLE =
    '17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1';
const G2_SAMPLE =
    '13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb80606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801';
const FR_SAMPLE = '90988a2421c40eaba101137fecccce44177b040c671fbce4ead7b129a3d1e26f';

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
                '045c0433bce14e71697f81ba2a4de7898d26677a7c4c587a96691e83d48dfba8b0790f9cf445bed09c8b34e13a361d4e06f39e53398b49c0c73af2a59054994999e70ba792990943af63a4a2c5db374c447130d18594c8ae4d7d6e553bb02b70';

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
                '032371743c9e2b09f45ea03f339af18fb7bd731a65ab720b05f293c2995385a068009fcfc859a1f73301d7430855a3d40ec83a929015835d91eb386034ab7c929d9f995225983e1be1138ab4e161c865b50e86c6a1b63ba02f9c3de1ee19686714540c10f5c01175a16404c5509dd499b8fce73b22ea53032469e964a0750a59342d77e96f046cb1476a1f9de35f3dc2072dac804404ea8d6636b55a9b8ef3f53c0e0902a80a58ea9037731c3117eb0ad8fd31372c7e19fb22ba7ef598d06fae';

            expect(
                Bls12.multiplyG2ByFr(
                    '08f035b8a5be927d572523547626a4fab8e7eb70835e76ef384bebd24c00ff6a85b0276c9dc57c6193a2b7cb3c498aa10193b7a7c3acdd3de0d15da408ba6cd8f6076dfb7e65be8afa9844384230152062ad3a3a17c3cb3d4b9c059920821aba0d878c1f1e14dc4a7f1b4a35660b1a12348da93db333bb9fec00985d863e3c2c05af9b28e308a40bf8936af3ac50da0906e8fa7ee56e0e8d279e3897c19627ab5d2c72a1ae0bad6db53fa414d647077c206b751e70a14e45ce2baad8f0cc9a55',
                    '90988a2421c40eaba101137fecccce44177b040c671fbce4ead7b129a3d1e26f',
                ),
            ).toBe(output);
        });
    });
    describe('Prime Field (Fr)', () => {
        it('add', () => {
            const output = '1f31154943881d5644a727fed5f5df35291e670ec6663e968d32c629f3fbd76b';

            expect(Bls12.addFr(FR_SAMPLE, FR_SAMPLE)).toBe(output);
        });
        it('negate', () => {
            const output = '716775dbdd3bf1545d5aeb8016d7ee0eee5c9dfda0b87d4e5da5ebffafd50a04';

            expect(Bls12.negateFr(FR_SAMPLE)).toBe(output);
        });
        it('multiply By Fr', () => {
            const output = '6d3b7aed2bd527aadec83793137e066f3e7784a60aa1d190f49870b35b834f21';

            expect(Bls12.multiplyFrByFr(FR_SAMPLE, FR_SAMPLE)).toBe(output);
        });
        it('multiply By Int', () => {
            const int = 18000000;
            const output = '0040e820ad260100000000000000000000000000000000000000000000000000';

            expect(Bls12.multiplyFrByInt('80a8120100000000000000000000000000000000000000000000000000000000', int)).toBe(
                output,
            );
        });
        it('convertFrToInt', () => {
            const output = '50607480493231234442512859501114091061098710212140837128944409744146262825104';
            expect(Bls12.convertFrToInt(FR_SAMPLE)).toBe(output);
        });
    });
    describe('Pairing Check 1', () => {
        it('True 1', () => {
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
        it('True 2', () => {
            const pair1G1 =
                '0a6c72a6cbe82240fb3e26892bb8baea20951af3843f13620a401239436fa6bc77106faa0d89228ccce1514962008eda14ff80b3b23e3de09b478281cfcb32a5064633830a32da6dd9e1f8da0c4a540eb873d396197e5264c4918022c61d9841';
            const pair1G2 =
                '055f747e60b6324409095ea64a0b4141e0b090f843d31eeea127ad0c51e25594b3c20b58714b6a6cf08fa396736ef86c0e2e0c5fd057c48ca36e5a8c2cedd779f59722a2893a1be8eed23fbce35a0e9a95f72e4d31542e083b145b3f328062be1812877bcb4b646c0e5af84b246f7fc4c1757d8eb5ef520c2df43f0e874c99bb774330f02f03c8f46648c6ef0df58a6c038f87eadada70950fcdf705ad364b0f8437f4702d3fc41d88df7f3ac82eb1896c93708fe8d92deabfa70e5efa9d245b';
            const pair2G1 =
                '19bc007de29752594f8c006b21fc1a4806fd2a1aa48db7f2d0c0dc694bea195f52c0c0159df4776fd89afbc1d7c2e0bf0b229543fba3cbcb2d4cf1559ee2f6327e2fecdf9fc7d52bb7a13b3699844f88f7f5dc1d1077b2d7fd9a1fc13e381159';
            const pair2G2 =
                '0a6cca158299d9f2110d74aeaf0659713ff93851970e49919904abb1845a2a1e121dd1dea360f3556bdfe8f455c4dd07048c12b7a689a096b86e6c8d5b3c9be2d17d09531124d19538621c9bed7445552f14938dfdcceb52e079e0ceccf579e11950529261c8a81ab0bb1dd34b6d41c71fca862871301fb36fef57048055a8744971555c8ee64381ba83cb190e322c6311e7984651b1044ba35c97a00628327ad9f278cb4e9731d90c0c8e31b9d470138c15f2893a84040dcf4a792853f93064';
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
