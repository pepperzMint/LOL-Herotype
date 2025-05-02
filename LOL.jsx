import { useState, useEffect } from 'react';
import { Sword, Shield, Zap, Crosshair, Wand, HeartPulse } from 'lucide-react';

// LOL champion data in JSON format
const heroData = [
  { id: "266", Champion: "Aatrox", herotype: "Fighter" },
  { id: "103", Champion: "Ahri", herotype: "Mage" },
  { id: "84", Champion: "Akali", herotype: "Assassin" },
  { id: "166", Champion: "Akshan", herotype: "Marksman" },
  { id: "12", Champion: "Alistar", herotype: "Tank" },
  { id: "799", Champion: "Ambessa", herotype: "Fighter" },
  { id: "32", Champion: "Amumu", herotype: "Tank" },
  { id: "34", Champion: "Anivia", herotype: "Mage" },
  { id: "1", Champion: "Annie", herotype: "Mage" },
  { id: "523", Champion: "Aphelios", herotype: "Marksman" },
  { id: "22", Champion: "Ashe", herotype: "Marksman" },
  { id: "136", Champion: "Aurelion Sol", herotype: "Mage" },
  { id: "893", Champion: "Aurora", herotype: "Mage" },
  { id: "268", Champion: "Azir", herotype: "Mage" },
  { id: "432", Champion: "Bard", herotype: "Support" },
  { id: "200", Champion: "Bel'Veth", herotype: "Fighter" },
  { id: "53", Champion: "Blitzcrank", herotype: "Tank" },
  { id: "63", Champion: "Brand", herotype: "Mage" },
  { id: "201", Champion: "Braum", herotype: "Tank" },
  { id: "233", Champion: "Briar", herotype: "Fighter" },
  { id: "51", Champion: "Caitlyn", herotype: "Marksman" },
  { id: "164", Champion: "Camille", herotype: "Fighter" },
  { id: "69", Champion: "Cassiopeia", herotype: "Mage" },
  { id: "31", Champion: "Cho'Gath", herotype: "Tank" },
  { id: "42", Champion: "Corki", herotype: "Marksman" },
  { id: "122", Champion: "Darius", herotype: "Fighter" },
  { id: "131", Champion: "Diana", herotype: "Fighter" },
  { id: "36", Champion: "Dr. Mundo", herotype: "Tank" },
  { id: "119", Champion: "Draven", herotype: "Marksman" },
  { id: "245", Champion: "Ekko", herotype: "Assassin" },
  { id: "60", Champion: "Elise", herotype: "Assassin" },
  { id: "28", Champion: "Evelynn", herotype: "Assassin" },
  { id: "81", Champion: "Ezreal", herotype: "Marksman" },
  { id: "9", Champion: "Fiddlesticks", herotype: "Mage" },
  { id: "114", Champion: "Fiora", herotype: "Fighter" },
  { id: "105", Champion: "Fizz", herotype: "Assassin" },
  { id: "3", Champion: "Galio", herotype: "Tank" },
  { id: "41", Champion: "Gangplank", herotype: "Fighter" },
  { id: "86", Champion: "Garen", herotype: "Fighter" },
  { id: "150", Champion: "Gnar", herotype: "Fighter" },
  { id: "150.2", Champion: "Mega Gnar", herotype: "Fighter" },
  { id: "79", Champion: "Gragas", herotype: "Fighter" },
  { id: "104", Champion: "Graves", herotype: "Marksman" },
  { id: "887", Champion: "Gwen", herotype: "Fighter" },
  { id: "120", Champion: "Hecarim", herotype: "Fighter" },
  { id: "74", Champion: "Heimerdinger", herotype: "Mage" },
  { id: "910", Champion: "Hwei", herotype: "Mage" },
  { id: "420", Champion: "Illaoi", herotype: "Fighter" },
  { id: "39", Champion: "Irelia", herotype: "Fighter" },
  { id: "427", Champion: "Ivern", herotype: "Support" },
  { id: "40", Champion: "Janna", herotype: "Support" },
  { id: "59", Champion: "Jarvan IV", herotype: "Fighter" },
  { id: "24", Champion: "Jax", herotype: "Fighter" },
  { id: "126", Champion: "Jayce", herotype: "Marksman" },
  { id: "202", Champion: "Jhin", herotype: "Marksman" },
  { id: "222", Champion: "Jinx", herotype: "Marksman" },
  { id: "897", Champion: "K'Sante", herotype: "Tank" },
  { id: "145", Champion: "Kai'Sa", herotype: "Marksman" },
  { id: "429", Champion: "Kalista", herotype: "Marksman" },
  { id: "43", Champion: "Karma", herotype: "Mage" },
  { id: "30", Champion: "Karthus", herotype: "Mage" },
  { id: "38", Champion: "Kassadin", herotype: "Assassin" },
  { id: "55", Champion: "Katarina", herotype: "Assassin" },
  { id: "10", Champion: "Kayle", herotype: "Mage" },
  { id: "141", Champion: "Kayn", herotype: "Fighter" },
  { id: "85", Champion: "Kennen", herotype: "Mage" },
  { id: "121", Champion: "Kha'Zix", herotype: "Assassin" },
  { id: "203", Champion: "Kindred", herotype: "Marksman" },
  { id: "240", Champion: "Kled", herotype: "Fighter" },
  { id: "240.1", Champion: "Kled & Skaarl", herotype: "Fighter" },
  { id: "96", Champion: "Kog'Maw", herotype: "Marksman" },
  { id: "7", Champion: "LeBlanc", herotype: "Assassin" },
  { id: "64", Champion: "Lee Sin", herotype: "Fighter" },
  { id: "89", Champion: "Leona", herotype: "Tank" },
  { id: "876", Champion: "Lillia", herotype: "Fighter" },
  { id: "127", Champion: "Lissandra", herotype: "Mage" },
  { id: "236", Champion: "Lucian", herotype: "Marksman" },
  { id: "117", Champion: "Lulu", herotype: "Support" },
  { id: "99", Champion: "Lux", herotype: "Mage" },
  { id: "54", Champion: "Malphite", herotype: "Tank" },
  { id: "90", Champion: "Malzahar", herotype: "Mage" },
  { id: "57", Champion: "Maokai", herotype: "Tank" },
  { id: "11", Champion: "Master Yi", herotype: "Assassin" },
  { id: "800", Champion: "Mel", herotype: "Mage" },
  { id: "902", Champion: "Milio", herotype: "Support" },
  { id: "21", Champion: "Miss Fortune", herotype: "Marksman" },
  { id: "82", Champion: "Mordekaiser", herotype: "Fighter" },
  { id: "25", Champion: "Morgana", herotype: "Mage" },
  { id: "950", Champion: "Naafiri", herotype: "Assassin" },
  { id: "267", Champion: "Nami", herotype: "Support" },
  { id: "75", Champion: "Nasus", herotype: "Fighter" },
  { id: "111", Champion: "Nautilus", herotype: "Tank" },
  { id: "518", Champion: "Neeko", herotype: "Mage" },
  { id: "76", Champion: "Nidalee", herotype: "Assassin" },
  { id: "895", Champion: "Nilah", herotype: "Fighter" },
  { id: "56", Champion: "Nocturne", herotype: "Fighter" },
  { id: "20", Champion: "Nunu & Willump", herotype: "Tank" },
  { id: "2", Champion: "Olaf", herotype: "Fighter" },
  { id: "61", Champion: "Orianna", herotype: "Mage" },
  { id: "516", Champion: "Ornn", herotype: "Tank" },
  { id: "80", Champion: "Pantheon", herotype: "Fighter" },
  { id: "78", Champion: "Poppy", herotype: "Tank" },
  { id: "555", Champion: "Pyke", herotype: "Support" },
  { id: "246", Champion: "Qiyana", herotype: "Assassin" },
  { id: "133", Champion: "Quinn", herotype: "Marksman" },
  { id: "497", Champion: "Rakan", herotype: "Support" },
  { id: "33", Champion: "Rammus", herotype: "Tank" },
  { id: "421", Champion: "Rek'Sai", herotype: "Fighter" },
  { id: "526", Champion: "Rell", herotype: "Tank" },
  { id: "888", Champion: "Renata Glasc", herotype: "Support" },
  { id: "58", Champion: "Renekton", herotype: "Fighter" },
  { id: "107", Champion: "Rengar", herotype: "Assassin" },
  { id: "92", Champion: "Riven", herotype: "Fighter" },
  { id: "68", Champion: "Rumble", herotype: "Fighter" },
  { id: "13", Champion: "Ryze", herotype: "Mage" },
  { id: "360", Champion: "Samira", herotype: "Marksman" },
  { id: "113", Champion: "Sejuani", herotype: "Tank" },
  { id: "235", Champion: "Senna", herotype: "Support" },
  { id: "147", Champion: "Seraphine", herotype: "Support" },
  { id: "875", Champion: "Sett", herotype: "Fighter" },
  { id: "35", Champion: "Shaco", herotype: "Assassin" },
  { id: "98", Champion: "Shen", herotype: "Tank" },
  { id: "102", Champion: "Shyvana", herotype: "Fighter" },
  { id: "27", Champion: "Singed", herotype: "Tank" },
  { id: "14", Champion: "Sion", herotype: "Tank" },
  { id: "15", Champion: "Sivir", herotype: "Marksman" },
  { id: "72", Champion: "Skarner", herotype: "Tank" },
  { id: "901", Champion: "Smolder", herotype: "Marksman" },
  { id: "37", Champion: "Sona", herotype: "Support" },
  { id: "16", Champion: "Soraka", herotype: "Support" },
  { id: "50", Champion: "Swain", herotype: "Mage" },
  { id: "517", Champion: "Sylas", herotype: "Mage" },
  { id: "134", Champion: "Syndra", herotype: "Mage" },
  { id: "223", Champion: "Tahm Kench", herotype: "Tank" },
  { id: "163", Champion: "Taliyah", herotype: "Mage" },
  { id: "91", Champion: "Talon", herotype: "Assassin" },
  { id: "44", Champion: "Taric", herotype: "Support" },
  { id: "17", Champion: "Teemo", herotype: "Marksman" },
  { id: "412", Champion: "Thresh", herotype: "Support" },
  { id: "18", Champion: "Tristana", herotype: "Marksman" },
  { id: "48", Champion: "Trundle", herotype: "Fighter" },
  { id: "23", Champion: "Tryndamere", herotype: "Fighter" },
  { id: "4", Champion: "Twisted Fate", herotype: "Mage" },
  { id: "29", Champion: "Twitch", herotype: "Marksman" },
  { id: "77", Champion: "Udyr", herotype: "Fighter" },
  { id: "6", Champion: "Urgot", herotype: "Fighter" },
  { id: "110", Champion: "Varus", herotype: "Marksman" },
  { id: "67", Champion: "Vayne", herotype: "Marksman" },
  { id: "45", Champion: "Veigar", herotype: "Mage" },
  { id: "161", Champion: "Vel'Koz", herotype: "Mage" },
  { id: "711", Champion: "Vex", herotype: "Mage" },
  { id: "254", Champion: "Vi", herotype: "Fighter" },
  { id: "234", Champion: "Viego", herotype: "Fighter" },
  { id: "112", Champion: "Viktor", herotype: "Mage" },
  { id: "8", Champion: "Vladimir", herotype: "Mage" },
  { id: "106", Champion: "Volibear", herotype: "Fighter" },
  { id: "19", Champion: "Warwick", herotype: "Fighter" },
  { id: "62", Champion: "Wukong", herotype: "Fighter" },
  { id: "498", Champion: "Xayah", herotype: "Marksman" },
  { id: "101", Champion: "Xerath", herotype: "Mage" },
  { id: "5", Champion: "Xin Zhao", herotype: "Fighter" },
  { id: "157", Champion: "Yasuo", herotype: "Fighter" },
  { id: "777", Champion: "Yone", herotype: "Fighter" },
  { id: "83", Champion: "Yorick", herotype: "Fighter" },
  { id: "350", Champion: "Yuumi", herotype: "Support" },
  { id: "154", Champion: "Zac", herotype: "Tank" },
  { id: "238", Champion: "Zed", herotype: "Assassin" },
  { id: "221", Champion: "Zeri", herotype: "Marksman" },
  { id: "115", Champion: "Ziggs", herotype: "Mage" },
  { id: "26", Champion: "Zilean", herotype: "Support" },
  { id: "142", Champion: "Zoe", herotype: "Mage" },
  { id: "143", Champion: "Zyra", herotype: "Mage" }
];

export default function LOLHeroTypesChart() {
  const [heroTypeCounts, setHeroTypeCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [maxCount, setMaxCount] = useState(0);

  useEffect(() => {
    try {
      // Count the hero types from JSON data
      const counts = {};
      heroData.forEach(row => {
        const heroType = row.herotype;
        if (heroType) {
          counts[heroType] = (counts[heroType] || 0) + 1;
        }
      });
      
      // Find the maximum count for scaling
      const max = Math.max(...Object.values(counts));
      setMaxCount(max);
      setHeroTypeCounts(counts);
      setIsLoading(false);
    } catch (err) {
      setError("Error processing data: " + err.message);
      setIsLoading(false);
    }
  }, []);

  // Hero type to icon mapping
  const heroTypeIcons = {
    'Assassin': <Sword size={20} className="text-red-600" />,
    'Fighter': <Zap size={20} className="text-yellow-600" />,
    'Mage': <Wand size={20} className="text-purple-600" />,
    'Marksman': <Crosshair size={20} className="text-blue-600" />,
    'Support': <HeartPulse size={20} className="text-green-600" />,
    'Tank': <Shield size={20} className="text-gray-700" />
  };

  // Function to render bar chart row
  const renderBarChartRow = (heroType, count) => {
    const icon = heroTypeIcons[heroType] || <div className="w-5 h-5 bg-gray-300 rounded-full" />;
    const icons = [];
    const iconCount = Math.ceil(count / 5); // 1 icon represents 10 champions
    
    // Create array of icons based on count (1 icon per 10 champions)
    for (let i = 0; i < iconCount; i++) {
      icons.push(
        <span key={`${heroType}-${i}`} className="inline-block mx-1">
          {icon}
        </span>
      );
    }

    // Calculate bar width percentage
    const barWidth = (count / maxCount) * 100;

    return (
      <div key={heroType} className="mb-6 flex items-center">
        {/* Y-axis label */}
        <div className="w-24 font-bold mr-4">{heroType}</div>
        
        {/* Bar chart bar */}
        <div className="flex-grow relative h-8">
          <div 
            className="absolute top-0 left-0 h-full bg-gray-100 rounded-r-lg"
            style={{ width: `${barWidth}%` }}
          >
            {/* Icons container */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center">
              {icons}
              <span className="ml-2 text-sm text-gray-600">({count})</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <div className="p-4 text-center">Loading hero type data...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">{error}</div>;
  }

  // Sort hero types by count (descending)
  const sortedHeroTypes = Object.keys(heroTypeCounts).sort(
    (a, b) => heroTypeCounts[b] - heroTypeCounts[a]
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Number of champion in each hero type in League of Legends
      </h2>

      {/* Legend */}
      <div className="mt-6 text-sm text-gray-600">
        <p className="text-center">
          <span className="font-medium">Legend (1 icon = 5 champions):</span>
          {Object.entries(heroTypeIcons).map(([type, icon]) => (
            <span key={type} className="ml-4 inline-flex items-center">
              {icon} <span className="ml-1">{type}</span>
            </span>
          ))}
        </p>
      </div>
      <br></br>
      <div className="bg-white rounded-lg shadow-lg p-6">   
        {/* Chart container */}
        <div className="relative">
          {/* Y-axis */}
          <div className="absolute top-0 bottom-0 left-0 w-24"></div>
          
          {/* Chart content */}
          <div className="ml-24">
            {sortedHeroTypes.map(heroType => 
              renderBarChartRow(heroType, heroTypeCounts[heroType])
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}