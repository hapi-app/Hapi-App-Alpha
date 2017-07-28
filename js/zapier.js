// Basic info
var userToken = (inputData.userToken);
var basicName = (inputData.basicName);
var basicEmail = (inputData.basicEmail);
var basicAge = (inputData.basicAge);
var basicSex = (inputData.basicSex);

// Get initial value from Typeform
var chronoTypeStudy = Number(inputData.chronoTypeStudy);
// Reverse score given value
function chronoTypeStudyFunc(){
  if (chronoTypeStudy == 0) {
    chronoTypeStudy = 4;
  } else if (chronoTypeStudy == 1) {
    chronoTypeStudy = 3;
  } else if (chronoTypeStudy == 2) {
    chronoTypeStudy = 2;
  } else if (chronoTypeStudy == 3) {
    chronoTypeStudy = 1;
  } else if (chronoTypeStudy == 4) {
    chronoTypeStudy = 0;
}} chronoTypeStudyFunc();

// Get initial value from Typeform
var chronoAmplitudeEfficacy = Number(inputData.chronoAmplitudeEfficacy);
// Reverse score given value
function chronoAmplitudeEfficacyFunc(){
  if (chronoAmplitudeEfficacy == 0) {
    chronoAmplitudeEfficacy = 4;
  } else if (chronoAmplitudeEfficacy == 1) {
    chronoAmplitudeEfficacy = 3;
  } else if (chronoAmplitudeEfficacy == 2) {
    chronoAmplitudeEfficacy = 2;
  } else if (chronoAmplitudeEfficacy == 3) {
    chronoAmplitudeEfficacy = 1;
  } else if (chronoAmplitudeEfficacy == 4) {
    chronoAmplitudeEfficacy = 0;
}} chronoAmplitudeEfficacyFunc();

// Get initial value from Typeform
var chronoTypeAfternoon = Number(inputData.chronoTypeAfternoon);
// Reverse score given value
function chronoTypeAfternoonFunc(){
  if (chronoTypeAfternoon == 0) {
    chronoTypeAfternoon = 4;
  } else if (chronoTypeAfternoon == 1) {
    chronoTypeAfternoon = 3;
  } else if (chronoTypeAfternoon == 2) {
    chronoTypeAfternoon = 2;
  } else if (chronoTypeAfternoon == 3) {
    chronoTypeAfternoon = 1;
  } else if (chronoTypeAfternoon == 4) {
    chronoTypeAfternoon = 0;
}} chronoTypeAfternoonFunc();

// Get initial value from Typeform
var chronoAmplitudeConcentrate = Number(inputData.chronoAmplitudeConcentrate);
// Reverse score given value
function chronoAmplitudeConcentrateFunc(){
  if (chronoAmplitudeConcentrate == 0) {
    chronoAmplitudeConcentrate = 4;
  } else if (chronoAmplitudeConcentrate == 1) {
    chronoAmplitudeConcentrate = 3;
  } else if (chronoAmplitudeConcentrate == 2) {
    chronoAmplitudeConcentrate = 2;
  } else if (chronoAmplitudeConcentrate == 3) {
    chronoAmplitudeConcentrate = 1;
  } else if (chronoAmplitudeConcentrate == 4) {
    chronoAmplitudeConcentrate = 0;
}} chronoAmplitudeConcentrateFunc();

// Get initial value from Typeform
var chronoTypeSluggish = Number(inputData.chronoTypeSluggish);
// Reverse score given value
function chronoTypeSluggishFunc(){
  if (chronoTypeSluggish == 0) {
    chronoTypeSluggish = 4;
  } else if (chronoTypeSluggish == 1) {
    chronoTypeSluggish = 3;
  } else if (chronoTypeSluggish == 2) {
    chronoTypeSluggish = 2;
  } else if (chronoTypeSluggish == 3) {
    chronoTypeSluggish = 1;
  } else if (chronoTypeSluggish == 4) {
    chronoTypeSluggish = 0;
}} chronoTypeSluggishFunc();

var chronoShift = "";
function chronoShiftFunc(){
  if (chronoShift == "No") {
    chronoShift = 4;
  } else if (chronoShift == "By 1 or 2 hours") {
    chronoShift = 3;
  } else if (chronoShift == "By 3 or 4 hours") {
    chronoShift = 2;
  } else if (chronoShift == "By 5 or 6 hours") {
    chronoShift = 1;
  } else if (chronoShift == "By 6+ hours") {
    chronoShift = 0;
}} chronoShiftFunc();

var chronoNaps = "";
function chronoNapsFunc(){
  if (chronoNaps == "Never") {
    chronoNaps = 4;
  } else if (chronoNaps == "Sometimes") {
    chronoNaps = 3;
  } else if (chronoNaps == "Once a day") {
    chronoNaps = 2;
  } else if (chronoNaps == "More than once a day") {
    chronoNaps = 1;
  } else if (chronoNaps == "More than twice a day") {
    chronoNaps = 0;
}} chronoNapsFunc();

var psqiOnset = "";
function psqiOnsetFunc(){
  if (psqiOnset == "<15 min") {
    psqiOnset = 4;
  } else if (psqiOnset == "15 > min") {
    psqiOnset = 3;
  } else if (psqiOnset == "30 > 60 min") {
    psqiOnset = 2;
  } else if (psqiOnset == "1 > 2 hours") {
    psqiOnset = 1;
  } else if (psqiOnset == "2+ hours") {
    psqiOnset = 0;
}} psqiOnsetFunc();

var psqiInsomnia = "";
function psqiInsomniaFunc(){
  if (psqiInsomnia == "Not during the past month") {
    psqiInsomnia = 4;
  } else if (psqiInsomnia == "Less than once a week") {
    psqiInsomnia = 3;
  } else if (psqiInsomnia == "Once or twice a week") {
    psqiInsomnia = 2;
  } else if (psqiInsomnia == "Three or more times a week") {
    psqiInsomnia = 1;
  } else if (psqiInsomnia == "Every single day") {
    psqiInsomnia = 0;
}} psqiInsomniaFunc();

var psqiSegmentedTime = "";
function psqiSegmentedTimeFunc(){
  if (psqiSegmentedTime == "Not during the past month") {
    psqiSegmentedTime = 4;
  } else if (psqiSegmentedTime == "Less than once a week") {
    psqiSegmentedTime = 3;
  } else if (psqiSegmentedTime == "Once or twice a week") {
    psqiSegmentedTime = 2;
  } else if (psqiSegmentedTime == "Three or more times a week") {
    psqiSegmentedTime = 1;
  } else if (psqiSegmentedTime == "Every single day") {
    psqiSegmentedTime = 0;
}} psqiSegmentedTimeFunc();

var psqiBathroom = "";
function psqiBathroomFunc(){
  if (psqiBathroom == "Not during the past month") {
    psqiBathroom = 4;
  } else if (psqiBathroom == "Less than once a week") {
    psqiBathroom = 3;
  } else if (psqiBathroom == "Once or twice a week") {
    psqiBathroom = 2;
  } else if (psqiBathroom == "Three or more times a week") {
    psqiBathroom = 1;
  } else if (psqiBathroom == "Every single day") {
    psqiBathroom = 0;
}} psqiBathroomFunc();

var psqiBreathe = "";
function psqiBreatheFunc(){
  if (psqiBreathe == "Not during the past month") {
    psqiBreathe = 4;
  } else if (psqiBreathe == "Less than once a week") {
    psqiBreathe = 3;
  } else if (psqiBreathe == "Once or twice a week") {
    psqiBreathe = 2;
  } else if (psqiBreathe == "Three or more times a week") {
    psqiBreathe = 1;
  } else if (psqiBreathe == "Every single day") {
    psqiBreathe = 0;
}} psqiBreatheFunc();

var psqiSnore = "";
function psqiSnoreFunc(){
  if (psqiSnore == "Not during the past month") {
    psqiSnore = 4;
  } else if (psqiSnore == "Less than once a week") {
    psqiSnore = 3;
  } else if (psqiSnore == "Once or twice a week") {
    psqiSnore = 2;
  } else if (psqiSnore == "Three or more times a week") {
    psqiSnore = 1;
  } else if (psqiSnore == "Every single day") {
    psqiSnore = 0;
}} psqiSnoreFunc();

var psqiCold = "";
function psqiColdFunc(){
  if (psqiCold == "Not during the past month") {
    psqiCold = 4;
  } else if (psqiCold == "Less than once a week") {
    psqiCold = 3;
  } else if (psqiCold == "Once or twice a week") {
    psqiCold = 2;
  } else if (psqiCold == "Three or more times a week") {
    psqiCold = 1;
  } else if (psqiCold == "Every single day") {
    psqiCold = 0;
}} psqiColdFunc();

var psqiHot = "";
function psqiHotFunc(){
  if (psqiHot == "Not during the past month") {
    psqiHot = 4;
  } else if (psqiHot == "Less than once a week") {
    psqiHot = 3;
  } else if (psqiHot == "Once or twice a week") {
    psqiHot = 2;
  } else if (psqiHot == "Three or more times a week") {
    psqiHot = 1;
  } else if (psqiHot == "Every single day") {
    psqiHot = 0;
}} psqiHotFunc();

var psqiDreams = "";
function psqiDreamsFunc(){
  if (psqiDreams == "Not during the past month") {
    psqiDreams = 4;
  } else if (psqiDreams == "Less than once a week") {
    psqiDreams = 3;
  } else if (psqiDreams == "Once or twice a week") {
    psqiDreams = 2;
  } else if (psqiDreams == "Three or more times a week") {
    psqiDreams = 1;
  } else if (psqiDreams == "Every single day") {
    psqiDreams = 0;
}} psqiDreamsFunc();

var psqiPain = "";
function psqiPainFunc(){
  if (psqiPain == "Not during the past month") {
    psqiPain = 4;
  } else if (psqiPain == "Less than once a week") {
    psqiPain = 3;
  } else if (psqiPain == "Once or twice a week") {
    psqiPain = 2;
  } else if (psqiPain == "Three or more times a week") {
    psqiPain = 1;
  } else if (psqiPain == "Every single day") {
    psqiPain = 0;
}} psqiPainFunc();

var psqiMedicating = "";
function psqiMedicatingFunc(){
  if (psqiMedicating == "Not during the past month") {
    psqiMedicating = 4;
  } else if (psqiMedicating == "Less than once a week") {
    psqiMedicating = 3;
  } else if (psqiMedicating == "Once or twice a week") {
    psqiMedicating = 2;
  } else if (psqiMedicating == "Three or more times a week") {
    psqiMedicating = 1;
  } else if (psqiMedicating == "Every single day") {
    psqiMedicating = 0;
}} psqiMedicatingFunc();

var psqiDaytimeSleepy = "";
function psqiDaytimeSleepyFunc(){
  if (psqiDaytimeSleepy == "Not during the past month") {
    psqiDaytimeSleepy = 4;
  } else if (psqiDaytimeSleepy == "Less than once a week") {
    psqiDaytimeSleepy = 3;
  } else if (psqiDaytimeSleepy == "Once or twice a week") {
    psqiDaytimeSleepy = 2;
  } else if (psqiDaytimeSleepy == "Three or more times a week") {
    psqiDaytimeSleepy = 1;
  } else if (psqiDaytimeSleepy == "Every single day") {
    psqiDaytimeSleepy = 0;
}} psqiDaytimeSleepyFunc();

var psqiEnthusiasm = "";
function psqiEnthusiasmFunc(){
  if (psqiEnthusiasm == "Not during the past month") {
    psqiEnthusiasm = 4;
  } else if (psqiEnthusiasm == "Less than once a week") {
    psqiEnthusiasm = 3;
  } else if (psqiEnthusiasm == "Once or twice a week") {
    psqiEnthusiasm = 2;
  } else if (psqiEnthusiasm == "Three or more times a week") {
    psqiEnthusiasm = 1;
  } else if (psqiEnthusiasm == "Every single day") {
    psqiEnthusiasm = 0;
}} psqiEnthusiasmFunc();

var psqiQualitySubjective = "";
function psqiQualitySubjectiveFunc(){
  if (psqiQualitySubjective == "Very good") {
    psqiQualitySubjective = 4;
  } else if (psqiQualitySubjective == "Fairly good") {
    psqiQualitySubjective = 3;
  } else if (psqiQualitySubjective == "Fairly bad") {
    psqiQualitySubjective = 2;
  } else if (psqiQualitySubjective == "Very bad") {
    psqiQualitySubjective = 1;
  } else if (psqiQualitySubjective == "Terrible") {
    psqiQualitySubjective = 0;
}} psqiQualitySubjectiveFunc();

var psqiQualitySubjective = "";
function psqiQualitySubjectiveFunc(){
  if (psqiQualitySubjective == "Very good") {
    psqiQualitySubjective = 4;
  } else if (psqiQualitySubjective == "Fairly good") {
    psqiQualitySubjective = 3;
  } else if (psqiQualitySubjective == "Fairly bad") {
    psqiQualitySubjective = 2;
  } else if (psqiQualitySubjective == "Very bad") {
    psqiQualitySubjective = 1;
  } else if (psqiQualitySubjective == "Terrible") {
    psqiQualitySubjective = 0;
}} psqiQualitySubjectiveFunc();

var psqiOther = "";
function psqiOtherFunc(){
  if (psqiOther == "Not applicable") {
    psqiOther = 4;
  } else if (psqiOther == "Less than once a week") {
    psqiOther = 3;
  } else if (psqiOther == "Once or twice a week") {
    psqiOther = 2;
  } else if (psqiOther == "Three or more times a week") {
    psqiOther = 1;
  } else if (psqiOther == "Every single day") {
    psqiOther = 0;
}} psqiOtherFunc();

// chronoType raw inputs
var chronoTypeMorning = Number(inputData.chronoTypeMorning);
var chronoTypeDrowsy = Number(inputData.chronoTypeDrowsy);
var chronoTypeEarly = Number(inputData.chronoTypeEarly);
var chronoTypeMood = Number(inputData.chronoTypeMood);
var chronoTypeEnergy = Number(inputData.chronoTypeEnergy);

// chronoType array
var chronoNumbers = [];
chronoNumbers[0] = chronoTypeMorning;
chronoNumbers[1] = chronoTypeDrowsy;
chronoNumbers[2] = chronoTypeStudy;
chronoNumbers[3] = chronoTypeEarly;
chronoNumbers[4] = chronoTypeAfternoon;
chronoNumbers[5] = chronoTypeMood;
chronoNumbers[6] = chronoTypeEnergy;
chronoNumbers[7] = chronoTypeSluggish;

// Create array value
var chronoSum = 0;

// Get sum of array
for (var i = 0; i < chronoNumbers.length; i++) {
  chronoSum += chronoNumbers[i]
}

// Generate chronoType overall score
var chronoScore = chronoSum;

// Output chronoType score
output = {Chrono: Number(chronoScore)};
