const allTickerWatchers = [
    "ticker-watchers-under1-shouldWatchout-minorJump-morning",
    "ticker-watchers-under1-shouldWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-minorJump-later",
    "ticker-watchers-under1-shouldWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-minorJump-muchlater",
    "ticker-watchers-under1-shouldWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-majorJump-morning",
    "ticker-watchers-under1-shouldWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-majorJump-later",
    "ticker-watchers-under1-shouldWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-majorJump-muchlater",
    "ticker-watchers-under1-shouldWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-morning",
    "ticker-watchers-under1-shouldWatchout-morning-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-later",
    "ticker-watchers-under1-shouldWatchout-later-failedHistorical",
    "ticker-watchers-under1-shouldWatchout-muchlater",
    "ticker-watchers-under1-shouldWatchout-muchlater-failedHistorical",
    "ticker-watchers-under1-notWatchout-minorJump-morning",
    "ticker-watchers-under1-notWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under1-notWatchout-minorJump-later",
    "ticker-watchers-under1-notWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under1-notWatchout-minorJump-muchlater",
    "ticker-watchers-under1-notWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under1-notWatchout-majorJump-morning",
    "ticker-watchers-under1-notWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under1-notWatchout-majorJump-later",
    "ticker-watchers-under1-notWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under1-notWatchout-majorJump-muchlater",
    "ticker-watchers-under1-notWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under1-notWatchout-morning",
    "ticker-watchers-under1-notWatchout-morning-failedHistorical",
    "ticker-watchers-under1-notWatchout-later",
    "ticker-watchers-under1-notWatchout-later-failedHistorical",
    "ticker-watchers-under1-notWatchout-muchlater",
    "ticker-watchers-under1-notWatchout-muchlater-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-minorJump-morning",
    "ticker-watchers-under5-shouldWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-minorJump-later",
    "ticker-watchers-under5-shouldWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-minorJump-muchlater",
    "ticker-watchers-under5-shouldWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-majorJump-morning",
    "ticker-watchers-under5-shouldWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-majorJump-later",
    "ticker-watchers-under5-shouldWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-majorJump-muchlater",
    "ticker-watchers-under5-shouldWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-morning",
    "ticker-watchers-under5-shouldWatchout-morning-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-later",
    "ticker-watchers-under5-shouldWatchout-later-failedHistorical",
    "ticker-watchers-under5-shouldWatchout-muchlater",
    "ticker-watchers-under5-shouldWatchout-muchlater-failedHistorical",
    "ticker-watchers-under5-notWatchout-minorJump-morning",
    "ticker-watchers-under5-notWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under5-notWatchout-minorJump-later",
    "ticker-watchers-under5-notWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under5-notWatchout-minorJump-muchlater",
    "ticker-watchers-under5-notWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under5-notWatchout-majorJump-morning",
    "ticker-watchers-under5-notWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under5-notWatchout-majorJump-later",
    "ticker-watchers-under5-notWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under5-notWatchout-majorJump-muchlater",
    "ticker-watchers-under5-notWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under5-notWatchout-morning",
    "ticker-watchers-under5-notWatchout-morning-failedHistorical",
    "ticker-watchers-under5-notWatchout-later",
    "ticker-watchers-under5-notWatchout-later-failedHistorical",
    "ticker-watchers-under5-notWatchout-muchlater",
    "ticker-watchers-under5-notWatchout-muchlater-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-minorJump-morning",
    "ticker-watchers-under10-shouldWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-minorJump-later",
    "ticker-watchers-under10-shouldWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-minorJump-muchlater",
    "ticker-watchers-under10-shouldWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-majorJump-morning",
    "ticker-watchers-under10-shouldWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-majorJump-later",
    "ticker-watchers-under10-shouldWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-majorJump-muchlater",
    "ticker-watchers-under10-shouldWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-morning",
    "ticker-watchers-under10-shouldWatchout-morning-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-later",
    "ticker-watchers-under10-shouldWatchout-later-failedHistorical",
    "ticker-watchers-under10-shouldWatchout-muchlater",
    "ticker-watchers-under10-shouldWatchout-muchlater-failedHistorical",
    "ticker-watchers-under10-notWatchout-minorJump-morning",
    "ticker-watchers-under10-notWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under10-notWatchout-minorJump-later",
    "ticker-watchers-under10-notWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under10-notWatchout-minorJump-muchlater",
    "ticker-watchers-under10-notWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under10-notWatchout-majorJump-morning",
    "ticker-watchers-under10-notWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under10-notWatchout-majorJump-later",
    "ticker-watchers-under10-notWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under10-notWatchout-majorJump-muchlater",
    "ticker-watchers-under10-notWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under10-notWatchout-morning",
    "ticker-watchers-under10-notWatchout-morning-failedHistorical",
    "ticker-watchers-under10-notWatchout-later",
    "ticker-watchers-under10-notWatchout-later-failedHistorical",
    "ticker-watchers-under10-notWatchout-muchlater",
    "ticker-watchers-under10-notWatchout-muchlater-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-minorJump-morning",
    "ticker-watchers-under15-shouldWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-minorJump-later",
    "ticker-watchers-under15-shouldWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-minorJump-muchlater",
    "ticker-watchers-under15-shouldWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-majorJump-morning",
    "ticker-watchers-under15-shouldWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-majorJump-later",
    "ticker-watchers-under15-shouldWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-majorJump-muchlater",
    "ticker-watchers-under15-shouldWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-morning",
    "ticker-watchers-under15-shouldWatchout-morning-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-later",
    "ticker-watchers-under15-shouldWatchout-later-failedHistorical",
    "ticker-watchers-under15-shouldWatchout-muchlater",
    "ticker-watchers-under15-shouldWatchout-muchlater-failedHistorical",
    "ticker-watchers-under15-notWatchout-minorJump-morning",
    "ticker-watchers-under15-notWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under15-notWatchout-minorJump-later",
    "ticker-watchers-under15-notWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under15-notWatchout-minorJump-muchlater",
    "ticker-watchers-under15-notWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under15-notWatchout-majorJump-morning",
    "ticker-watchers-under15-notWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under15-notWatchout-majorJump-later",
    "ticker-watchers-under15-notWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under15-notWatchout-majorJump-muchlater",
    "ticker-watchers-under15-notWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under15-notWatchout-morning",
    "ticker-watchers-under15-notWatchout-morning-failedHistorical",
    "ticker-watchers-under15-notWatchout-later",
    "ticker-watchers-under15-notWatchout-later-failedHistorical",
    "ticker-watchers-under15-notWatchout-muchlater",
    "ticker-watchers-under15-notWatchout-muchlater-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-minorJump-morning",
    "ticker-watchers-under20-shouldWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-minorJump-later",
    "ticker-watchers-under20-shouldWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-minorJump-muchlater",
    "ticker-watchers-under20-shouldWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-majorJump-morning",
    "ticker-watchers-under20-shouldWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-majorJump-later",
    "ticker-watchers-under20-shouldWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-majorJump-muchlater",
    "ticker-watchers-under20-shouldWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-morning",
    "ticker-watchers-under20-shouldWatchout-morning-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-later",
    "ticker-watchers-under20-shouldWatchout-later-failedHistorical",
    "ticker-watchers-under20-shouldWatchout-muchlater",
    "ticker-watchers-under20-shouldWatchout-muchlater-failedHistorical",
    "ticker-watchers-under20-notWatchout-minorJump-morning",
    "ticker-watchers-under20-notWatchout-minorJump-morning-failedHistorical",
    "ticker-watchers-under20-notWatchout-minorJump-later",
    "ticker-watchers-under20-notWatchout-minorJump-later-failedHistorical",
    "ticker-watchers-under20-notWatchout-minorJump-muchlater",
    "ticker-watchers-under20-notWatchout-minorJump-muchlater-failedHistorical",
    "ticker-watchers-under20-notWatchout-majorJump-morning",
    "ticker-watchers-under20-notWatchout-majorJump-morning-failedHistorical",
    "ticker-watchers-under20-notWatchout-majorJump-later",
    "ticker-watchers-under20-notWatchout-majorJump-later-failedHistorical",
    "ticker-watchers-under20-notWatchout-majorJump-muchlater",
    "ticker-watchers-under20-notWatchout-majorJump-muchlater-failedHistorical",
    "ticker-watchers-under20-notWatchout-morning",
    "ticker-watchers-under20-notWatchout-morning-failedHistorical",
    "ticker-watchers-under20-notWatchout-later",
    "ticker-watchers-under20-notWatchout-later-failedHistorical",
    "ticker-watchers-under20-notWatchout-muchlater",
    "ticker-watchers-under20-notWatchout-muchlater-failedHistorical"
];



const TWshouldWatchout = allTickerWatchers.filter(s => s.includes('shouldWatchout'));
const TWnotWatchout = allTickerWatchers.filter(s => s.includes('notWatchout'));

const TWminorJumps = allTickerWatchers.filter(s => s.includes('minorJump') && !s.includes('failedHistorical'));
const TWmajorJumps = allTickerWatchers.filter(s => s.includes('majorJump') && !s.includes('failedHistorical'));
const TWfailedHistorical = allTickerWatchers.filter(s => s.includes('failedHistorical'));
const TWnotWatchoutNoFailedHistOrMinorJumps = allTickerWatchers.filter(
    s => s.includes('notWatchout') 
    && !s.includes('failedHistorical')
    && !s.includes('minorJump')
);

const myTickerWatchers = TWnotWatchoutNoFailedHistOrMinorJumps;

const TWmorning = allTickerWatchers.filter(s => s.includes('morning'));
const TWlater = allTickerWatchers.filter(s => s.includes('later') && !s.includes('muchlater'));
const TWmuchLater = allTickerWatchers.filter(s => s.includes('muchlater'));

module.exports = {
    allTickerWatchers,
    myTickerWatchers,
    TWnotWatchoutNoFailedHistOrMinorJumps,
    TWnotWatchout,
    TWshouldWatchout,
    TWfailedHistorical,
    TWmajorJumps,
    TWminorJumps,
    TWmorning,
    TWlater,
    TWmuchLater,
};
