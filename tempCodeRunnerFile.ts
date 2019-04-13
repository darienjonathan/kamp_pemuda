export enum TopicEnum {
  'Cooking',
  'Reading',
  'Sports',
  'History',
  'Music',
  'Art',
  'Philosophy',
  'Travel',
  'Society'
}

const TopicEn = Object.keys(TopicEnum).map(topic => topic)

console.log(TopicEnum)