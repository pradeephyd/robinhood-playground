const mySpecialSauce = [
    'based-on-jump-down3overnight-trending35257-5'
];

const hothot = [
    'based-on-jump-up3overnight-trending35257-fiveTo10-5',
    'sudden-drops-last1trend-fiveTo10-32',    //
    'sudden-drops-last1trend-221',
    'sudden-drops-last1trend-first2-fiveTo10-14',
    'based-on-jump-up3overnight-trending35257-shouldWatchout-tenTo15-16',
    'based-on-jump-up3overnight-shouldWatchout-first3-fiveTo10-30',
    'based-on-jump-up3overnight-trending607-shouldWatchout-first2-tenTo15-5'
];

const longtermhot = [
    'sudden-drops-last2trend-tenTo15-328',
    'dynamo-3000-bottom50tso-onlyWatchout-5lowestsharesToCap-4',
    'dynamo-3000-bottom50tso-notWatchout-100',
    'dynamo-3000-bottom50tso-notWatchout-5lowestTSO-100',
    'constant-downers-10minute-percDownLowClosePoints-filtered40-77',
    'dynamo-3000-top50tso-overall-5lowestYP-tenTo15-4',
    'based-on-jump-down3overnight-notWatchout-fiveTo10-5',
    'sudden-drops-last2trend-tenTo15-63',
    'based-on-jump-down3overnight-gtneg20percmax-fiveTo10-5',
    'constant-risers-10minute-percUpHighClosePoints-filtered60-300',
    'based-on-jump-up3overnight-ltneg50percmax-tenTo15-5'
];

const forPurchase = [
    'low-float-high-volume-floatTimesabsVolPoints-trenddown3to10-150',
    'low-float-high-volume-floatTimesvolTo2WeekPoints-trend5to10-95',
    'low-float-high-volume-floatTimesvolTo2WeekPoints-trenddown1to3-210',
    'low-float-high-volume-floatTimestwoWeekVolToAvgPoints-trenddown3to10-fiveTo10-95',
    'based-on-jump-oneToFourOvernight-trending607-shouldWatchout-first1-fiveTo10-0',
    'constant-risers-5minute-percUpHighClosePoints-filtered60-100',
    'based-on-jump-down3overnight-trending607-notWatchout-first1-tenTo15-16',
    'dynamo-3000-bottom50tso-twoweekvolumetoavg-fiveTo10-4',
    'sudden-drops-last5trend-first2-fiveTo10-328',
    'dynamo-3000-middle50tso-overall-lowestYP-fiveTo10-4',
    'constant-downers-10minute-percDownLowClosePoints-filtered40-77',
    'sudden-drops-last3trend-first2-fiveTo10-328',

    '[16Count5-topPerformers85-uniq-first1]',
    '[16Count5-topPerformers85-uniq-first1]',
    '[16Count5-topPerformers85-uniq-first1]',
    '[10IncTodayCount6-topPerformers85-first3]'
];

const cheapestPicksEmailObj = [
    ['And', 're', 'wzouza@', 'gm', 'ail.com'],
    ['ViperKi', 'ller847', '@a', 'ol.com']
]
    .map(val => val.join(''))
    .reduce((acc, val) => ({
        ...acc,
        [val]: 'cheapest-picks-chp50--4'
    }), {});

module.exports = {
    forPurchase,
    // purchase: hotStrats,
    email: {
        [['chief', 'sm', 'urph', '@', 'gm', 'ail', '.com'].join('')]: forPurchase,
        ...cheapestPicksEmailObj
    },
    extras: {
        'wild n crazy': [
            'week-swings-tenTo15-1',  // wild
            'constant-risers-10minute-percUpHighClosePoints-300'  // crazy
        ],
        mySpecialSauce,
        hothot,
        longtermhot
    }
};
