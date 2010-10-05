/*

Copyright 2010 Kelvin C.H. Gan

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

// Channel names on TV Guide and URLs for channels available on TV Catchup.
var channels = new Array();
channels['BBC1'] = "http://www.tvcatchup.com/watch.html?c=1";
channels['BBC2'] = "http://www.tvcatchup.com/watch.html?c=2";
channels['ITV1'] = "http://www.tvcatchup.com/watch.html?c=3";
channels['Channel 4'] = "http://www.tvcatchup.com/watch.html?c=4";
channels['five'] = "http://www.tvcatchup.com/watch.html?c=5";
channels['ITV2'] = "http://www.tvcatchup.com/watch.html?c=6";
channels['Five USA'] = "http://www.tvcatchup.com/watch.html?c=7";
channels['E4'] = "http://www.tvcatchup.com/watch.html?c=8";
channels['ITV3'] = "http://www.tvcatchup.com/watch.html?c=9";
channels['ITV4'] = "http://www.tvcatchup.com/watch.html?c=10";
channels['More4'] = "http://www.tvcatchup.com/watch.html?c=11";
channels['BBC3'] = "http://www.tvcatchup.com/watch.html?c=12";
channels['BBC4'] = "http://www.tvcatchup.com/watch.html?c=13";
channels['Dave'] = "http://www.tvcatchup.com/watch.html?c=14";
channels['fiver'] = "http://www.tvcatchup.com/watch.html?c=15";
channels['Film4'] = "http://www.tvcatchup.com/watch.html?c=16";
channels['BBC News'] = "http://www.tvcatchup.com/watch.html?c=17";
channels['cbbc'] = "http://www.tvcatchup.com/watch.html?c=18";
channels['CITV'] = "http://www.tvcatchup.com/watch.html?c=19";
channels['Channel 4 + 1'] = "http://www.tvcatchup.com/watch.html?c=20";
channels['E4 +1'] = "http://www.tvcatchup.com/watch.html?c=21";
channels['Dave ja vu'] = "http://www.tvcatchup.com/watch.html?c=22";
channels['ITV2 +1'] = "http://www.tvcatchup.com/watch.html?c=23";
channels['cbeebies'] = "http://www.tvcatchup.com/watch.html?c=24";
channels['4Music'] = "http://www.tvcatchup.com/watch.html?c=25";
channels['YeSTERDAY'] = "http://www.tvcatchup.com/watch.html?c=26";
channels['BBC Parliament'] = "http://www.tvcatchup.com/watch.html?c=31";
channels['Sky News'] = "http://www.tvcatchup.com/watch.html?c=34";
channels['Sky3'] = "http://www.tvcatchup.com/watch.html?c=36";
channels['Viva'] = "http://www.tvcatchup.com/watch.html?c=37";
channels['Channel One'] = "http://www.tvcatchup.com/watch.html?c=38";

// Iterate over all the channels on TV Catchup and find the equivalent label on TV Guide.
for (var channel in channels) {
	// If the label in a td.gridchannel > b > a > font matches channel name, add link in td.gridchannel > b
	$("td.gridchannel>b>a>font:contains(" + channel + ")").parent().parent().append('<br/><a href="' + channels[channel] + '">Watch on TV Catchup</a>');
}

