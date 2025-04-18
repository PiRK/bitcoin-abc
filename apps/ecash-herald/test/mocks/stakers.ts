// Copyright (c) 2024 The Bitcoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

import { CoinDanceStaker } from '../../src/events';

const mockStakers: CoinDanceStaker[] = [
    {
        proof: '0f1465ccff1e1ad24c82b2de00db50fe0b83666c31e00a4ce7a62109df0d2fe0',
        stake: '34325804845.84',
        creationTimeStamp: '1730464721',
        payoutAddress: 'ecash:qpfxsdj49cxk3268y25sjamjnd7usvah5ymcy3e06m',
    },
    {
        proof: '9328c4a753edef59f71a137b656931fc46ae83509289b50115be4281d9a0e5e2',
        stake: '22000000000.00',
        creationTimeStamp: '1731202930',
        payoutAddress: 'ecash:qr42c8c04tqndscfrdnl0rzterg0qdaegyjzt8egyg',
    },
    {
        proof: '09ce8958d554c576fce394e1d520dacca694ae05021e2002164eadb105e91814',
        stake: '20825161315.32',
        creationTimeStamp: '1732136171',
        payoutAddress: 'ecash:qpsqlcd0k9gzj9nr24gpedugwsntqp2u5ygeamfc33',
    },
    {
        proof: '5b2d8ae6be1fcd0bb03a565e57cb5d0803016f5be76be82798804d06b7980f77',
        stake: '17961949344.69',
        creationTimeStamp: '1663167734',
        payoutAddress: 'ecash:qzcrhdhc2ea6mefucwn3dczpfsgg92znqqr4ymf609',
    },
    {
        proof: 'a9d29e9eead135bb52b8802749785c0726874bcd824631547a9e3c8f27c26809',
        stake: '17814046067.34',
        creationTimeStamp: '1704134143',
        payoutAddress: 'ecash:qqfzls0nhjf7ukgpsmtlly2s2dueq54c5ulydy0h79',
    },
    {
        proof: '197e4e5e0bdf4e1d90d4c7c22a3dbedeb7546f1d4486fedf276fba8d29a02d28',
        stake: '12208531957.40',
        creationTimeStamp: '1729035309',
        payoutAddress: 'ecash:qruqqff92xws4xwwl4ac2trhrewwqsgnycwsuwf5xe',
    },
    {
        proof: '428bf3614e415e5ae5c25c0144cf488fdfd6f9815a8fba928be40bb0f476117c',
        stake: '11600513622.49',
        creationTimeStamp: '1663134714',
        payoutAddress: 'ecash:qrumdwtakfk0uga6drejum42gnhqreh28sfl4llkqe',
    },
    {
        proof: 'c85e0ede9332d6b1db7968a94c232c73f54bc870084c4cbb91c6f8b8a6f4faf6',
        stake: '11277991369.06',
        creationTimeStamp: '1729878158',
        payoutAddress: 'ecash:qp2akgkat3s26qdl68qw3aaegnkk9z7zdqr05m4m7v',
    },
    {
        proof: '61ac8b143b83d3449c2fe93b09ade67880e45cfa0315ba231eb839111869d40a',
        stake: '10622846076.51',
        creationTimeStamp: '1726971582',
        payoutAddress: 'ecash:qrgffz2k2ly8drv80xax822flq9cccwgvu5j4t68pu',
    },
    {
        proof: '91e4cefab657815d3d7972b91376a9c2d3611eb264e9218b8304a79384b1e21d',
        stake: '10199236961.23',
        creationTimeStamp: '1662538001',
        payoutAddress: 'ecash:qpucqwxgj6239d6wsgfy4xnnvsvj3yerwynur52mwp',
    },
    {
        proof: '1c93cdf20b4f5baebdc8603e2642a76cf448f630ae53e5d062f409e219118169',
        stake: '10199057479.53',
        creationTimeStamp: '1699328977',
        payoutAddress: 'ecash:qp7ungzdvgvh4g95ld3mffp9lp69vwqrjqay5lw5pw',
    },
    {
        proof: '023b65af3b48c3c435fd1f68c9ff19eef6721a9f89360d8762e83f74078d2c73',
        stake: '9414681249.59',
        creationTimeStamp: '1730872242',
        payoutAddress: 'ecash:qr0t7lw39q83snmgu3ctq04h5x8n29mfus6almk4tv',
    },
    {
        proof: 'ffaf6d263119ce6348d42c1c938185d13738c307bdb95c67e021d3e3151058ae',
        stake: '7004008716.56',
        creationTimeStamp: '1716388320',
        payoutAddress: 'ecash:qpflnhgfw9gq359eajfyu6d8j47u35m7kqdas06cd6',
    },
    {
        proof: '0cd3eddf3794bfc92ebac1b16f10927407fe3cfe0ddc8e1a4542e06a67f08096',
        stake: '7000000000.00',
        creationTimeStamp: '1705993244',
        payoutAddress: 'ecash:qq775g7uy7cen56w9jlua53ng8pyyjujy5spzvyqy8',
    },
    {
        proof: '4c40a35d7eeb073a366023de6c19103ac8ab3c9ffaaa9a54798df37038587221',
        stake: '4480905835.59',
        creationTimeStamp: '1730129530',
        payoutAddress: 'ecash:qpspalp25sr0a84wm4qa9dwet505mwgyr508tnwqda',
    },
    {
        proof: '7512ff2522a398ef94f7588d65e1d242dd14c8847147d91eec239a648f6c542d',
        stake: '3934165360.57',
        creationTimeStamp: '1722900230',
        payoutAddress: 'ecash:qp8fx07kpajsn8l993t4w8amyrn2ef7p4y06avlfrz',
    },
    {
        proof: '2983761db99ceffd06920b97e6608859da264dc41a2cda9a398d9674d0bfdb68',
        stake: '3526384183.73',
        creationTimeStamp: '1730309051',
        payoutAddress: 'ecash:qqp57v3rygr8jdpukl0dt9xz9f2y09anry8a3m9gr7',
    },
    {
        proof: '2eb37950e8e53ee4becbb94feb1bdeca874899ca1ef13185340e3c367ec173cc',
        stake: '2953701373.61',
        creationTimeStamp: '1703183081',
        payoutAddress: 'ecash:qzs8hq2pj4hu5j09fdr5uhha3986h2mthvfp7362nu',
    },
    {
        proof: 'ca0f5121a072fe80bc6a246a9c3592d34fee76665daa5c927770d76f0f041e2e',
        stake: '2341871628.08',
        creationTimeStamp: '1698587734',
        payoutAddress: 'ecash:qqn6fn4xptchnfnkvlgc742f0ra8f3ar9yh5etlgps',
    },
    {
        proof: '0101bd930d1146e1659e7dcf37a5efdcade30a665b86d0a3e5a04bf59bfb6976',
        stake: '2201508511.46',
        creationTimeStamp: '1730906471',
        payoutAddress: 'ecash:qq7jzf7p068wwhq0z3z4fzmee7d25nv2hs6pa8erkw',
    },
    {
        proof: '8a088e63616d6d2563ab0aab4cbd9b891034f136a65a6e4b37957d3fdbc7e66d',
        stake: '2100000000.00',
        creationTimeStamp: '1700093109',
        payoutAddress: 'ecash:qqqp96rlge8472qxf2lq2m35s83agdgyyg2nve2xxw',
    },
    {
        proof: 'c029f8a81314659cf1a4876997b714643fdb0989288069dd9a1070686137c071',
        stake: '1855260785.32',
        creationTimeStamp: '1706051624',
        payoutAddress: 'ecash:qp275h0upptxxhwtu424vvf66tnvaphhju6qmng0gh',
    },
    {
        proof: '8066b1a3dad041688cec5132db7c934f7e98fef54b9c6e2873da22bbc7764b3a',
        stake: '1805196027.32',
        creationTimeStamp: '1706609839',
        payoutAddress: 'ecash:qrpkjsd0fjxd7m332mmlu9px6pwkzaufpcn2u7jcwt',
    },
    {
        proof: '5ab80cfad7979e57f8336b9f238f0a9fbb7e9d4fab49dde95b733af32426dc6a',
        stake: '1613832730.15',
        creationTimeStamp: '1726713944',
        payoutAddress: 'ecash:qqgsx68mnewuyy5qx2lv8hktjnehj8fh7gwgsqzn2a',
    },
    {
        proof: 'd6c9a4ffac3abb4c464785cacbf6309add862b8131fe25173ffee30fe550a645',
        stake: '1534745204.22',
        creationTimeStamp: '1701109992',
        payoutAddress: 'ecash:qpjply9q9hk4eu83ccvjkuqxwufz3cvkvu2pfh8hqc',
    },
    {
        proof: 'cdb3658b4360847aa5fadc124fddac3a585e4d53b95c87077aa8fdf75d65c585',
        stake: '1527789225.37',
        creationTimeStamp: '1697969701',
        payoutAddress: 'ecash:qpz03d7yg7u6xdvj5lz47kzz67j930h6xqlulul2jt',
    },
    {
        proof: '3b990319b5df9498b5c69e32473b3f0c91b03ad69dda0a5a094eccf22f58208b',
        stake: '1469247462.29',
        creationTimeStamp: '1720356646',
        payoutAddress: 'ecash:qq39zzn0u4l5yt9cwwhhgzuel6mhrvn7qs0u848mhc',
    },
    {
        proof: '1d606ee8e51328da8b15fa794fdd22a8c43e266803c1207878b71da90550c606',
        stake: '1342474837.15',
        creationTimeStamp: '1718855905',
        payoutAddress: 'ecash:qrvhky5zpemt8876n2j9y4eqwjg98w04r5n9rdxhkc',
    },
    {
        proof: 'eb99aab49efd41cf7c24d2b6c8401b623932c653d38f7f797ecfcf564f793435',
        stake: '1282337774.00',
        creationTimeStamp: '1711828457',
        payoutAddress: 'ecash:qrw7mwczzskztf5x24nfsrzv6evzklx2p5svtah7va',
    },
    {
        proof: '50dd45e8bafe09733bc1551be3ce06ecc5a86a6e4866473b6b4b7c64eba3fba2',
        stake: '1161372959.67',
        creationTimeStamp: '1700751969',
        payoutAddress: 'ecash:qzr39rr0kutnqvh6vxgfkd4vhwpj6sqgp5akz9ex9k',
    },
    {
        proof: '30c759af63bb9fb947e39c25f7daa3bbcb9744ea7409c63fb2c4d6c4096632d6',
        stake: '1014083182.56',
        creationTimeStamp: '1720323076',
        payoutAddress: 'ecash:qr69g2ayxueg79cv889gtpggjqg2vv6hygphmqtpwy',
    },
    {
        proof: 'ef6bcb6d0d99519bc027fce9382f1c3e90fc92889446842267d31ac4c32c51e2',
        stake: '913545969.48',
        creationTimeStamp: '1725205278',
        payoutAddress: 'ecash:qqedvp0799tm4v570n40g7phecy3m375my5nwzpaeu',
    },
    {
        proof: 'ad84cb118d87d4861c671588348dd612f23a5b108ca17ce40aa74a50a03fcf63',
        stake: '741529195.82',
        creationTimeStamp: '1725016069',
        payoutAddress: 'ecash:qzyrathrpu3en3rhjhd46x7kukgqdcztwushdwgctf',
    },
    {
        proof: '2eda4337d3e3419e8fc07f0bde1ccf0b5091885d919c311a7382b25658167fdc',
        stake: '670880012.87',
        creationTimeStamp: '1708214475',
        payoutAddress: 'ecash:qpemfng27vzn0x3fruv09cljtjs3pmv5fgum3qjasc',
    },
    {
        proof: '7334d8110b6cce39cdff8537338703dc6e7db70f2a5c7a3e7a9af2adf607aeb1',
        stake: '647881360.75',
        creationTimeStamp: '1721896428',
        payoutAddress: 'ecash:qrltk6ffg6tyt5pv3jfdusl3vvl3fct9nuzqj3z7yj',
    },
    {
        proof: '48bfc30e4b23555eef02056067e29f3a7101db3bb6a51f2014777e8253a924c7',
        stake: '630900000.00',
        creationTimeStamp: '1708484476',
        payoutAddress: 'ecash:qp0s9lg5qhllt54r4a7pvstt2wtvqkusrynhss6fhk',
    },
    {
        proof: 'a06b27f21f7fb4024c2985adf039c22e5f2b05cf6915d02b7190374da4e5c04f',
        stake: '502509920.00',
        creationTimeStamp: '1727935211',
        payoutAddress: 'ecash:qzl5ejcfef5tlxezachpaww8t7v37qel9qkl5jxvl6',
    },
    {
        proof: '82c84c4c1db6344ad290ab0524b40b33589d7205a2965ba77a36afbeebe437ae',
        stake: '500580748.04',
        creationTimeStamp: '1723855310',
        payoutAddress: 'ecash:qzpakxc5cudvhy9c2tpw48kghhgnny3m2yy8l35w7c',
    },
    {
        proof: 'f1d9538fac5e3bf1d7ec043f62d7906c18ea74ca164e1dd1743dd9feadbadecd',
        stake: '495980187.26',
        creationTimeStamp: '1700239419',
        payoutAddress: 'ecash:qrahyham4kqygv5d5z2f8da6t7c59zxr4ykvrz09j0',
    },
    {
        proof: '8e94875ab3f31ad90fdef6298131fbfd58069ecb2bae3c2505f25eec8c7d2674',
        stake: '468336286.47',
        creationTimeStamp: '1701386740',
        payoutAddress: 'ecash:qpeg0hudrfzwfjeha9glwdw9xw8knz86y5zzrqju0m',
    },
    {
        proof: '1b66bec14a597473fd608a5ffe7b016dd6d1b7384ec5c1f80128e6fb33b132fa',
        stake: '458349581.56',
        creationTimeStamp: '1708821435',
        payoutAddress: 'ecash:qzdgyux4fyzjrx7h9hw3vywzqj2d4v4gtswghfc6dv',
    },
    {
        proof: '1c471af1f9398ab6902edbfa237bcc50bf4cb707fa7fc3a730deb7986b757171',
        stake: '405148854.27',
        creationTimeStamp: '1727633982',
        payoutAddress: 'ecash:qz0lv7ahxdeyslfj5vxwh9esqzy3m66udyvjnrwv2m',
    },
    {
        proof: 'a39a26fd45e1cf21aa2f56618661b9b721af5e588c1946471c8c14654e57b330',
        stake: '401990804.95',
        creationTimeStamp: '1722744501',
        payoutAddress: 'ecash:qpv668c8p5hxpjdl5uvkyvhhm0w9r5kn5cjezyqprm',
    },
    {
        proof: '686bd66518d8f9df6fa4918f6e055ccbeb21dc49972a4c5d7a77d88d0147433a',
        stake: '400400400.00',
        creationTimeStamp: '1728956650',
        payoutAddress: 'ecash:qqjrjf20g0trustqen99xc93f2pzn8egtul8wshf48',
    },
    {
        proof: 'fc12316fd63e806fecdd7da6de8623af85b96e0020c09c713c5f5647b1a2a384',
        stake: '381099000.00',
        creationTimeStamp: '1662538001',
        payoutAddress: 'ecash:qp3xgl9rn8uv2p2ruxczsmp68n9gp2ejvgamn47nrk',
    },
    {
        proof: '32703d94ffe01e274506f923c260f84473168e2abf902d5d1d1069188787099e',
        stake: '361176077.03',
        creationTimeStamp: '1705390156',
        payoutAddress: 'ecash:qz5gafw3pflwxklxny0xd3l9cgn3n0qvgcuwkjtjue',
    },
    {
        proof: '614c89effde3365f11b011b824516721f8f5b06324957391ff5faf86fdcf9585',
        stake: '351708450.67',
        creationTimeStamp: '1701370991',
        payoutAddress: 'ecash:qq7z5990p2v8vwjkht39aykc0zdenw8m5y65xn8ylz',
    },
    {
        proof: 'c476bfe9c948591ebc7a8b1c1ebd72099aef3bd91272b9d45bc8d528ba837449',
        stake: '323791122.31',
        creationTimeStamp: '1721400147',
        payoutAddress: 'ecash:qqm0cjk0l7pe2m2f2z4u49jf674q75q4h5du5hlmr5',
    },
    {
        proof: '0803736b2737d4ee9e30962cce17e1f9ef09970fd7995a3b8f104ac44e69869e',
        stake: '310012841.07',
        creationTimeStamp: '1720804727',
        payoutAddress: 'ecash:qrpk6jam7p3lqfgd8np8cy7tugmh8xj4jvx4s3pjx9',
    },
    {
        proof: '40d728bfeaa1d50b377c7a6e9cc3538ab5079b8fc5e6376fc18601d985f11ac9',
        stake: '308390714.65',
        creationTimeStamp: '1703203752',
        payoutAddress: 'ecash:qreeukw4gwxjs07faq9p8qduhgkjugssjucmmxl2jx',
    },
    {
        proof: 'a1ecc0b363d2f59a8f34f6182b8566d75b3598e8061263313b25153f91bba941',
        stake: '303356322.00',
        creationTimeStamp: '1727457310',
        payoutAddress: 'ecash:qr2jxzw62hx4g6jtpu5448ksppzqphce6yyguntd09',
    },
    {
        proof: '24000a2d171979182bb0307cdd87750a612a79de334a6c6cae56c5cef2b69a95',
        stake: '303145907.85',
        creationTimeStamp: '1713218359',
        payoutAddress: 'ecash:qrhaqtqeua83ymsvlk2g78n9vyvl5akkju7kwtj2k0',
    },
    {
        proof: '830c47783ad7b38024fdef7991aa017c80d33c6fcb9e15ff600ef03aef97d4bb',
        stake: '295310026.99',
        creationTimeStamp: '1727486624',
        payoutAddress: 'ecash:qqx9ew7d69txzmq0pfpjcgh440f0ymvgnvpf5y8z9d',
    },
    {
        proof: '03d358fca1ce7ee6689cc0e2e78f2c502a15ef72276076454f75fde9444ee859',
        stake: '230811851.25',
        creationTimeStamp: '1731394961',
        payoutAddress: 'ecash:qz22a93zmym8wt56ulda3qpk98dqk3xrkuv9xmuhpj',
    },
    {
        proof: '4eaee3c7f0ebe632b1f61efaed6d229712735f1d80e113280184eb928606ef89',
        stake: '222000000.00',
        creationTimeStamp: '1705263648',
        payoutAddress: 'ecash:qql4rfh00u9xs5y78afk8y7hl4zm588nwgexjk0rpd',
    },
    {
        proof: '22a990c23280ab181d305d05458ca1f45dbe8cec110d5ee1e5f166fc056cb343',
        stake: '204995928.93',
        creationTimeStamp: '1703276890',
        payoutAddress: 'ecash:qpv6llxn6tzx56q2tqtkr89gegfezzex5qwq88t2zk',
    },
    {
        proof: '2c889cd606c4266257a9aa43613a25b044dbb87a2935141c2a4e842a97fa533b',
        stake: '200729630.88',
        creationTimeStamp: '1711210997',
        payoutAddress: 'ecash:qprwmd8ufdtkyfyt6n4qk06tzaka0kaag577shqp47',
    },
    {
        proof: 'bd01aeedfcc4be614533ec79cac8c1e3bbffbb03aab0e113fe90a30103d7233e',
        stake: '200650481.31',
        creationTimeStamp: '1713886729',
        payoutAddress: 'ecash:qryhjmch4m3jqw4699ej6drdal0jzw446ytx7ddl3j',
    },
    {
        proof: 'a4ac55187901a678dc26039a35ea7e6d39127c379f1e433d4f70f4a16091af26',
        stake: '187050823.45',
        creationTimeStamp: '1710715965',
        payoutAddress: 'ecash:qqz4r8fhrj8xlhlw0ppp8wnjtnhchgaysc924gjdua',
    },
    {
        proof: '6c01bb0e93c5d85c7e379aec99b5f33cd3dac5e60f8f67e07aff6fc4cac15c85',
        stake: '123053702.27',
        creationTimeStamp: '1713880041',
        payoutAddress: 'ecash:qzp5w6lh4qwq9aqzpxys8lu4gyuzfwwm6s4s9xrwgk',
    },
    {
        proof: '6ed38dc95445a88c9cee4b930bda39dda3c33c2777a49d8c921a919c4a7514f5',
        stake: '113013260.57',
        creationTimeStamp: '1730237140',
        payoutAddress: 'ecash:qqk3ns6tmcgww4sdxewuva98h0eul72zlyamcqdl3n',
    },
    {
        proof: 'ebbdfa3e83a9e18c609f0dcb8e2ccd4a82c6a84e90279bd1ca8afe72b6058bfb',
        stake: '112420690.00',
        creationTimeStamp: '1706309383',
        payoutAddress: 'ecash:qpgj4nnun8xzlq524525gew2kdlza9vspvxglj2ewy',
    },
    {
        proof: 'dd51039d1cffb528b160a3316be76a650bce6329ba5c12903e08335bd1aa01e7',
        stake: '106273258.04',
        creationTimeStamp: '1715962735',
        payoutAddress: 'ecash:qqmj58rxwymjg7yne3equztuka7m3wuq3v4jch8v74',
    },
    {
        proof: 'a2a90c6a388356d0bc49b7958c4c3ac1d02240e9c5f66a2659588330a0d4efd1',
        stake: '102750750.00',
        creationTimeStamp: '1722477800',
        payoutAddress: 'ecash:qrk6tqwmgs7majzxd64rn3prsufggvssfu0dmuk7ac',
    },
    {
        proof: 'b42ddffac993b0cf85434523db3152d38375fe7103f3a624b4572b8819a67404',
        stake: '101101478.16',
        creationTimeStamp: '1671025440',
        payoutAddress: 'ecash:qz936hex5ljjw8fympalq8wkj498dtn0psjzmrlauz',
    },
    {
        proof: 'f9c8ac4997d28e985746910f5a29fa9d9280a378dd3663c4945c85bcefc09590',
        stake: '100656362.23',
        creationTimeStamp: '1729959552',
        payoutAddress: 'ecash:qppqp0xay6k93uf77ghkpchjm53xd8huscke3500zl',
    },
    {
        proof: '09bd456aff504b57b7edda647410f8c3cb23378f7dcecc79753b96375aacd4e1',
        stake: '100143588.11',
        creationTimeStamp: '1731437291',
        payoutAddress: 'ecash:qrkp5fatf8cu3w2ha2spxyy7tar52nves56c482c7w',
    },
    {
        proof: '2793711e80c25d78450679be9bb08163191576e0369b59d3db644f02f38e340c',
        stake: '100100000.00',
        creationTimeStamp: '1677278981',
        payoutAddress: 'ecash:qzzrek28043x5x5mz4wucvrxvhz8asnq4y8y3xe4lq',
    },
    {
        proof: 'fd8b8209ba70902fd582f129dc4d4367efc4f1c0af17e9316fe2d55597c483a6',
        stake: '100020021.71',
        creationTimeStamp: '1721236757',
        payoutAddress: 'ecash:qpnqn2dlzxja46uu2atqvpp2mps7nz9drv90edw0zl',
    },
    {
        proof: 'a828eeff452ba6930f7bc347fd091e19197bdda971b775a3da17bd3c9893d583',
        stake: '100010000.00',
        creationTimeStamp: '1697405701',
        payoutAddress: 'ecash:qrffy2pf2mw89xwda8ad2xvrmajqf9dyev9frfs3fr',
    },
    {
        proof: 'aad72154772e7a1efaec244071853f2699306cddb2112134987d1aa3900e6b2d',
        stake: '100000005.54',
        creationTimeStamp: '1728152561',
        payoutAddress: 'ecash:qrm7esgdmmerkgg6d572spglg25776yqtsczgtwz06',
    },
];

export default mockStakers;
