import { createHash } from 'crypto';

export const topThousandFilms = [
  'tt0068646',
  'tt0046438',
  'tt0047478',
  'tt0071562',
  'tt0034583',
  'tt0033467',
  'tt0056172',
  'tt0050083',
  'tt0043014',
  'tt0090015',
  'tt0048452',
  'tt0042192',
  'tt0092337',
  'tt0110912',
  'tt0021749',
  'tt0046478',
  'tt0045152',
  'tt0108052',
  'tt0053198',
  'tt0099685',
  'tt0037674',
  'tt0027977',
  'tt0054215',
  'tt0073486',
  'tt0022100',
  'tt0041959',
  'tt0095327',
  'tt0057012',
  'tt0048473',
  'tt0047396',
  'tt0042876',
  'tt0078788',
  'tt0048434',
  'tt0019254',
  'tt0031885',
  'tt0040522',
  'tt0044741',
  'tt0047445',
  'tt0052572',
  'tt0060196',
  'tt0015324',
  'tt0032138',
  'tt0075314',
  'tt0064541',
  'tt0058946',
  'tt0071315',
  'tt0049902',
  'tt0017136',
  'tt0053125',
  'tt0028950',
  'tt0015881',
  'tt0083922',
  'tt0029192',
  'tt0041546',
  'tt0058625',
  'tt0089881',
  'tt0060107',
  'tt0056512',
  'tt0072443',
  'tt0040897',
  'tt0041154',
  'tt0245429',
  'tt0053291',
  'tt0052357',
  'tt0050825',
  'tt0101985',
  'tt0096908',
  'tt0036775',
  'tt0010323',
  'tt0046268',
  'tt0070359',
  'tt0053779',
  'tt0088178',
  'tt5777628',
  'tt0071141',
  'tt0000417',
  'tt0435761',
  'tt1832382',
  'tt0038650',
  'tt0047296',
  'tt0033870',
  'tt0057091',
  'tt0038890',
  'tt0112120',
  'tt0050976',
  'tt0019585',
  'tt0055630',
  'tt0015864',
  'tt0066904',
  'tt0063278',
  'tt8637428',
  'tt0032553',
  'tt0036112',
  'tt0063794',
  'tt0032904',
  'tt0018455',
  'tt0019760',
  'tt0082971',
  'tt0041719',
  'tt0087400',
  'tt0068182',
  'tt7905466',
  'tt0336693',
  'tt0048424',
  'tt0060138',
  'tt0019421',
  'tt0056111',
  'tt0051792',
  'tt0059527',
  'tt0111495',
  'tt0110057',
  'tt0032976',
  'tt2396224',
  'tt0050986',
  'tt0038733',
  'tt0057935',
  'tt0065571',
  'tt0062136',
  'tt0015624',
  'tt0054407',
  'tt0082096',
  'tt0045274',
  'tt2096673',
  'tt0064040',
  'tt0071853',
  'tt4633694',
  'tt0092593',
  'tt0067328',
  'tt0050613',
  'tt0052893',
  'tt0012349',
  'tt0017925',
  'tt8760684',
  'tt0061512',
  'tt0050783',
  'tt0056732',
  'tt0015648',
  'tt0079944',
  'tt0015064',
  'tt0018742',
  'tt0111341',
  'tt0075686',
  'tt0052311',
  'tt0049730',
  'tt0056801',
  'tt0032551',
  'tt0020530',
  'tt0468569',
  'tt0026138',
  'tt0064116',
  'tt0050212',
  'tt0346336',
  'tt0020629',
  'tt0047528',
  'tt0024844',
  'tt1895587',
  'tt0040725',
  'tt0051036',
  'tt0041452',
  'tt0043313',
  'tt0051201',
  'tt0018806',
  'tt2024544',
  'tt0053604',
  'tt0013442',
  'tt0032599',
  'tt0246135',
  'tt1065073',
  'tt8075192',
  'tt0088650',
  'tt0038787',
  'tt0012364',
  'tt0074605',
  'tt0018192',
  'tt0073195',
  'tt2582802',
  'tt0031971',
  'tt0091251',
  'tt0457430',
  'tt0062229',
  'tt0070040',
  'tt0055601',
  'tt0043686',
  'tt0045112',
  'tt0037008',
  'tt0036868',
  'tt0030241',
  'tt0053472',
  'tt0092048',
  'tt0249241',
  'tt0055499',
  'tt0074462',
  'tt0023969',
  'tt0055032',
  'tt0069762',
  'tt0025878',
  'tt0073198',
  'tt0084740',
  'tt0053221',
  'tt0034240',
  'tt0062622',
  'tt1979376',
  'tt0077838',
  'tt0045814',
  'tt0044079',
  'tt0054997',
  'tt0036342',
  'tt0910970',
  'tt0063522',
  'tt0042041',
  'tt8296608',
  'tt0167331',
  'tt0065214',
  'tt0053619',
  'tt0097202',
  'tt0046022',
  'tt4935462',
  'tt0044081',
  'tt0039192',
  'tt0036506',
  'tt0405094',
  'tt0059012',
  'tt0059825',
  'tt0038913',
  'tt5598102',
  'tt0051808',
  'tt0056443',
  'tt1134837',
  'tt0060827',
  'tt0048956',
  'tt0027125',
  'tt0033804',
  'tt0014429',
  'tt0061589',
  'tt0244316',
  'tt0111161',
  'tt0039689',
  'tt0035446',
  'tt0189219',
  'tt0086197',
  'tt0074360',
  'tt0052600',
  'tt0101279',
  'tt0025316',
  'tt0088846',
  'tt0015163',
  'tt0042593',
  'tt1392190',
  'tt0052561',
  'tt0033045',
  'tt4468740',
  'tt0056444',
  'tt0094336',
  'tt0018528',
  'tt5726616',
  'tt0044706',
  'tt0046911',
  'tt0026778',
  'tt0053168',
  'tt0056119',
  'tt0080196',
  'tt0050870',
  'tt0070460',
  'tt0382932',
  'tt0023158',
  'tt6725014',
  'tt1285016',
  'tt0063350',
  'tt0014341',
  'tt0040724',
  'tt0059646',
  'tt2576852',
  'tt0054144',
  'tt0167261',
  'tt0259331',
  'tt0077138',
  'tt0016332',
  'tt0076759',
  'tt2380307',
  'tt0080684',
  'tt0064921',
  'tt0102926',
  'tt0114709',
  'tt0056058',
  'tt4823434',
  'tt0042804',
  'tt0092603',
  'tt1655442',
  'tt0120255',
  'tt0049406',
  'tt0038762',
  'tt4154796',
  'tt0096283',
  'tt0108394',
  'tt0024069',
  'tt1865505',
  'tt0046521',
  'tt0040536',
  'tt5116410',
  'tt5311514',
  'tt0032156',
  'tt0073440',
  'tt0105888',
  'tt0065780',
  'tt0043809',
  'tt0046487',
  'tt0018773',
  'tt0068361',
  'tt1954470',
  'tt0075824',
  'tt0124437',
  'tt1454468',
  'tt2209418',
  'tt0078748',
  'tt0100234',
  'tt0119488',
  'tt2370248',
  'tt0058450',
  'tt0045361',
  'tt4975722',
  'tt0058003',
  'tt0075988',
  'tt0167260',
  'tt0018379',
  'tt0089960',
  'tt3170832',
  'tt0367555',
  'tt0059719',
  'tt0120815',
  'tt0065417',
  'tt0090605',
  'tt0111786',
  'tt0120737',
  'tt0065152',
  'tt0064703',
  'tt0071360',
  'tt0028445',
  'tt0051390',
  'tt7014006',
  'tt0338013',
  'tt0073341',
  'tt0048980',
  'tt0069293',
  'tt8108198',
  'tt0065889',
  'tt6887540',
  'tt0027652',
  'tt0103639',
  'tt0808417',
  'tt0048021',
  'tt0113247',
  'tt0058642',
  'tt0118147',
  'tt1201607',
  'tt0072417',
  'tt3455822',
  'tt0084390',
  'tt0105695',
  'tt0065531',
  'tt0086879',
  'tt1087578',
  'tt0028010',
  'tt0053579',
  'tt0033836',
  'tt0088763',
  'tt0093191',
  'tt0081398',
  'tt0082912',
  'tt0169858',
  'tt0347751',
  'tt0262240',
  'tt4015500',
  'tt0057345',
  'tt0028333',
  'tt0073152',
  'tt0095765',
  'tt0065234',
  'tt0040338',
  'tt0023649',
  'tt0055852',
  'tt0067919',
  'tt0076263',
  'tt0042619',
  'tt0053390',
  'tt0048641',
  'tt4034228',
  'tt0477348',
  'tt0038348',
  'tt0032811',
  'tt0046359',
  'tt1032846',
  'tt3062880',
  'tt0056218',
  'tt0043265',
  'tt0045555',
  'tt0091288',
  'tt0023042',
  'tt0266543',
  'tt1049413',
  'tt0105236',
  'tt3783958',
  'tt1504320',
  'tt4016934',
  'tt0074958',
  'tt0117589',
  'tt3674140',
  'tt0056217',
  'tt0101640',
  'tt0055913',
  'tt0317248',
  'tt0077711',
  'tt0039417',
  'tt0083702',
  'tt1602620',
  'tt1287878',
  'tt0067541',
  'tt0029947',
  'tt0061184',
  'tt0071733',
  'tt0381681',
  'tt1235166',
  'tt0072684',
  'tt0087843',
  'tt0018737',
  'tt0073707',
  'tt0102571',
  'tt4912910',
  'tt2582782',
  'tt1764657',
  'tt6677224',
  'tt6155172',
  'tt0088258',
  'tt0050634',
  'tt0054749',
  'tt0209144',
  'tt0085859',
  'tt0036244',
  'tt0037558',
  'tt6884380',
  'tt5027774',
  'tt1020072',
  'tt0097216',
  'tt5836866',
  'tt0061395',
  'tt0026029',
  'tt0072890',
  'tt0021739',
  'tt0031381',
  'tt0185125',
  'tt0978762',
  'tt0067116',
  'tt0039651',
  'tt0040866',
  'tt0059573',
  'tt0029843',
  'tt0064689',
  'tt8637440',
  'tt5013056',
  'tt4925292',
  'tt0056592',
  'tt0055018',
  'tt0071129',
  'tt0469494',
  'tt1185616',
  'tt0110357',
  'tt6628102',
  'tt0024216',
  'tt0046851',
  'tt0056945',
  'tt0087884',
  'tt1139797',
  'tt1798709',
  'tt0083658',
  'tt0116282',
  'tt0112471',
  'tt0029453',
  'tt0095467',
  'tt0057565',
  'tt0015532',
  'tt0058182',
  'tt0021884',
  'tt0253474',
  'tt0097757',
  'tt0093509',
  'tt0119250',
  'tt2278388',
  'tt5649144',
  'tt0054632',
  'tt0037824',
  'tt0028249',
  'tt0195256',
  'tt0407887',
  'tt2802154',
  'tt0102587',
  'tt0023427',
  'tt0026174',
  'tt0048281',
  'tt0070904',
  'tt0080310',
  'tt0026564',
  'tt5052448',
  'tt3808342',
  'tt0078841',
  'tt0035015',
  'tt1375666',
  'tt0351817',
  'tt0026955',
  'tt0038823',
  'tt0050585',
  'tt0022125',
  'tt0092963',
  'tt0046451',
  'tt0076085',
  'tt0028201',
  'tt0077416',
  'tt0103888',
  'tt5462602',
  'tt0181875',
  'tt0046250',
  'tt0042477',
  'tt0374546',
  'tt0049366',
  'tt0066206',
  'tt0044829',
  'tt0034591',
  'tt0020475',
  'tt0083866',
  'tt0037884',
  'tt0023634',
  'tt0055508',
  'tt0104706',
  'tt0097223',
  'tt2948356',
  'tt0051378',
  'tt0070735',
  'tt0022913',
  'tt0077405',
  'tt0037800',
  'tt0030341',
  'tt0029870',
  'tt0051994',
  'tt0081176',
  'tt1360860',
  'tt0035429',
  'tt0090677',
  'tt0031514',
  'tt0095468',
  'tt0029850',
  'tt2381111',
  'tt2870648',
  'tt4302938',
  'tt3011894',
  'tt0079522',
  'tt0029604',
  'tt0069281',
  'tt0023622',
  'tt0030643',
  'tt0052080',
  'tt0075276',
  'tt2321405',
  'tt0408664',
  'tt0053459',
  'tt0066491',
  'tt0097937',
  'tt0038574',
  'tt0053121',
  'tt1773764',
  'tt0074119',
  'tt0054389',
  'tt0015361',
  'tt3742378',
  'tt0154420',
  'tt0036891',
  'tt1255953',
  'tt0054248',
  'tt0053976',
  'tt0063032',
  'tt0022150',
  'tt0925248',
  'tt0096163',
  'tt0031725',
  'tt0039631',
  'tt0057578',
  'tt0460766',
  'tt0101414',
  'tt0025746',
  'tt1024648',
  'tt0048752',
  'tt1853728',
  'tt8267604',
  'tt4285496',
  'tt2125608',
  'tt0060675',
  'tt0058715',
  'tt0042040',
  'tt5791536',
  'tt3089326',
  'tt3892172',
  'tt0118694',
  'tt5635086',
  'tt0117951',
  'tt0057869',
  'tt0063374',
  'tt0070077',
  'tt0027489',
  'tt0401383',
  'tt0114814',
  'tt0054189',
  'tt0039677',
  'tt8991268',
  'tt0033373',
  'tt0039420',
  'tt0056049',
  'tt1517451',
  'tt7282468',
  'tt0070379',
  'tt0069467',
  'tt0051055',
  'tt4698684',
  'tt1512201',
  'tt0047136',
  'tt0063227',
  'tt0035169',
  'tt0058006',
  'tt0086087',
  'tt2147134',
  'tt0093779',
  'tt0169102',
  'tt0057115',
  'tt0037382',
  'tt0056291',
  'tt0037059',
  'tt0042208',
  'tt0050782',
  'tt0166896',
  'tt0416991',
  'tt1129435',
  'tt0019071',
  'tt0060305',
  'tt0110081',
  'tt0036154',
  'tt1345836',
  'tt6217608',
  'tt0110882',
  'tt0073076',
  'tt0043338',
  'tt0071381',
  'tt0056322',
  'tt0075404',
  'tt1125849',
  'tt0363163',
  'tt0376968',
  'tt0054167',
  'tt0046303',
  'tt0070334',
  'tt0022286',
  'tt0031762',
  'tt0087644',
  'tt0064793',
  'tt0031088',
  'tt0059274',
  'tt0103064',
  'tt6166196',
  'tt1535109',
  'tt0086022',
  'tt0907657',
  'tt2106476',
  'tt0246578',
  'tt0071604',
  'tt0071691',
  'tt0287467',
  'tt0091167',
  'tt0056923',
  'tt0038669',
  'tt0044837',
  'tt0048037',
  'tt0090756',
  'tt0094828',
  'tt3544112',
  'tt0379557',
  'tt0050706',
  'tt0024601',
  'tt0048757',
  'tt1825683',
  'tt1748122',
  'tt2366450',
  'tt3409392',
  'tt5990474',
  'tt0072431',
  'tt0056663',
  'tt0056736',
  'tt0064612',
  'tt0064106',
  'tt0286244',
  'tt0105151',
  'tt7472352',
  'tt0040458',
  'tt0063771',
  'tt0042906',
  'tt0059619',
  'tt0054476',
  'tt0032701',
  'tt0088247',
  'tt0190332',
  'tt0029442',
  'tt0059894',
  'tt0075860',
  'tt0116790',
  'tt0097372',
  'tt0089507',
  'tt0024184',
  'tt0039739',
  'tt0048356',
  'tt0073312',
  'tt0043386',
  'tt0059575',
  'tt0089276',
  'tt0054460',
  'tt0055353',
  'tt0055981',
  'tt0087544',
  'tt0756683',
  'tt2543164',
  'tt3966404',
  'tt0066921',
  'tt0057277',
  'tt0025318',
  'tt0069035',
  'tt0790636',
  'tt0245712',
  'tt1935156',
  'tt0032155',
  'tt1321865',
  'tt0053765',
  'tt0040765',
  'tt0067411',
  'tt0079095',
  'tt7664504',
  'tt0093664',
  'tt0887912',
  'tt1736633',
  'tt0181288',
  'tt0087553',
  'tt0023027',
  'tt0068575',
  'tt0090557',
  'tt0401085',
  'tt0033722',
  'tt0057643',
  'tt0117666',
  'tt0089606',
  'tt0043137',
  'tt0099902',
  'tt0018839',
  'tt0024028',
  'tt0039822',
  'tt0120363',
  'tt0070510',
  'tt1790885',
  'tt2278871',
  'tt1772925',
  'tt0057977',
  'tt2402927',
  'tt5186714',
  'tt0023948',
  'tt3315342',
  'tt1714210',
  'tt3612616',
  'tt1440266',
  'tt4359416',
  'tt0065772',
  'tt0048545',
  'tt0047892',
  'tt0055093',
  'tt0054269',
  'tt0079182',
  'tt0077234',
  'tt0052939',
  'tt2488496',
  'tt2015381',
  'tt0054073',
  'tt3659388',
  'tt3076658',
  'tt5104604',
  'tt1045658',
  'tt0091830',
  'tt1010048',
  'tt2872718',
  'tt6304162',
  'tt0020697',
  'tt0040497',
  'tt0023458',
  'tt0311519',
  'tt0107943',
  'tt0035160',
  'tt0042531',
  'tt0055320',
  'tt0128142',
  'tt1074638',
  'tt0071487',
  'tt6788942',
  'tt0062663',
  'tt2562232',
  'tt2103281',
  'tt6742252',
  'tt0140888',
  'tt1172203',
  'tt1611180',
  'tt0046004',
  'tt0077318',
  'tt0039074',
  'tt0248845',
  'tt0054821',
  'tt0100024',
  'tt0101428',
  'tt0054599',
  'tt0031455',
  'tt0090565',
  'tt0053856',
  'tt1856101',
  'tt0058564',
  'tt3890160',
  'tt0440963',
  'tt2396566',
  'tt0098258',
  'tt0103935',
  'tt0209463',
  'tt0059643',
  'tt0037367',
  'tt0050766',
  'tt0059616',
  'tt0053226',
  'tt0082671',
  'tt0077740',
  'tt1124052',
  'tt1489887',
  'tt6644200',
  'tt3521164',
  'tt0062480',
  'tt0069995',
  'tt0043117',
  'tt2718492',
  'tt0081070',
  'tt0061882',
  'tt0067482',
  'tt0113725',
  'tt0100112',
  'tt0049743',
  'tt2852470',
  'tt0040506',
  'tt0041090',
  'tt0097904',
  'tt0051365',
  'tt0045848',
  'tt0069687',
  'tt0006206',
  'tt0079020',
  'tt6543652',
  'tt2011971',
  'tt2258858',
  'tt0073582',
  'tt0036172',
  'tt0051899',
  'tt1814836',
  'tt2764784',
  'tt6135348',
  'tt0056210',
  'tt0080388',
  'tt0038559',
  'tt0045537',
  'tt0060635',
  'tt0084628',
  'tt0040662',
  'tt0021577',
  'tt3606756',
  'tt1542344',
  'tt0467406',
  'tt1365050',
  'tt0046511',
  'tt4595882',
  'tt0045009',
  'tt0095302',
  'tt2042568',
  'tt5221584',
  'tt0047849',
  'tt0040369',
  'tt0022599',
  'tt0086637',
  'tt0029808',
  'tt0064147',
  'tt0066413',
  'tt1210166',
  'tt1013753',
  'tt2737050',
  'tt6896536',
  'tt0086979',
  'tt0040366',
  'tt0033945',
  'tt0018770',
  'tt0060481',
  'tt0073363',
  'tt5375040',
  'tt0058150',
  'tt0060802',
  'tt0044314',
  'tt0028021',
  'tt1403865',
  'tt1821549',
  'tt0082269',
  'tt5247022',
  'tt0203230',
  'tt0048261',
  'tt0037635',
  'tt0021542',
  'tt0053967',
  'tt0117359',
  'tt0110877',
  'tt0032851',
  'tt3666024',
  'tt0064451',
  'tt0032234',
  'tt0340377',
  'tt0049223',
  'tt0064285',
  'tt0064390',
  'tt0759612',
  'tt0104782',
  'tt0098532',
  'tt7349662',
  'tt0970179',
  'tt0063850',
  'tt0083851',
  'tt0107920',
  'tt1068646',
  'tt0032910',
  'tt0101258',
  'tt3450958',
  'tt0076786',
  'tt0015841',
  'tt3397884',
  'tt5215952',
  'tt0085180',
  'tt0022718',
  'tt0048973',
  'tt0044860',
  'tt0041268',
  'tt0029583',
  'tt7125860',
  'tt4515928',
  'tt3638644',
  'tt0078346',
  'tt0041163',
  'tt1276104',
  'tt4613272',
  'tt0029394',
  'tt2872750',
  'tt2567712',
  'tt4266638',
  'tt0047821',
  'tt3700392',
  'tt4048272',
  'tt0313670',
  'tt2396589',
  'tt0073540',
  'tt0091867',
  'tt0005960',
  'tt0036910',
  'tt0043879',
  'tt0055399',
  'tt0030127',
  'tt0069704',
  'tt0100275',
  'tt3053694',
  'tt0062138',
  'tt0044487',
  'tt2361042',
  'tt1800241',
  'tt4936450',
  'tt0094681',
  'tt5859238',
  'tt0042332',
  'tt0096863',
  'tt0021156',
  'tt4686844',
  'tt1313092',
  'tt0093225',
  'tt0051047',
  'tt3544082',
  'tt2901736',
  'tt0096126',
  'tt0448115',
  'tt0020163',
  'tt4935446',
  'tt0045935',
  'tt2328813',
  'tt0109702',
  'tt7681824',
  'tt0062864',
  'tt0040607',
  'tt0040221',
];

export const getMovieId = () => {
  const date = new Date();
  return topThousandFilms[
    Number(
      [
        ...createHash('md5')
          .update(`${date.getFullYear()}${date.getMonth()}${date.getDate()}`)
          .digest()
          .toString(),
      ]
        .map((item) => item.charCodeAt(0))
        .reduce((item, curr) => curr + item, 0)
    ) % 1000
  ];
};

export const getRandomMovieId = () => {
  return topThousandFilms[Math.floor(Math.random() * topThousandFilms.length)];
};
