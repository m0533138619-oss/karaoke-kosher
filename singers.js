/* אולפן הקריוקי הכשר – רשימות מאושרות.
   כדי להוסיף זמר או שיר: עורכים את הקובץ הזה ב-GitHub (סמל העיפרון) ושומרים. */
'use strict';

// זמרים מאושרים: קישור מיוטיוב יתקבל רק אם הערוץ שהעלה אותו הוא של אחד מהם.
// בכל זמר כותבים כמה צורות של השם (עברית, אנגלית, שם הערוץ). רווחים וסימנים לא משנים.
window.KOSHER_SINGERS = [
  { name: 'עקיבא', aliases: ['עקיבא', 'akivaofficial', 'akivamusic'] },
  { name: 'ישי ריבו', aliases: ['ישי ריבו', 'ishay ribo', 'ishai ribo'] },
  { name: 'מוטי שטיינמץ', aliases: ['מוטי שטיינמץ', 'motty steinmetz', 'moti steinmetz'] },
  { name: 'מרדכי בן דוד', aliases: ['מרדכי בן דוד', 'mordechai ben david', 'mbd official'] },
  { name: 'אברהם פריד', aliases: ['אברהם פריד', 'avraham fried'] },
  { name: 'יעקב שוואקי', aliases: ['שוואקי', 'shwekey', 'yacovofficial'] },
  { name: 'בני פרידמן', aliases: ['בני פרידמן', 'benny friedman'] },
  { name: 'ליפא שמלצר', aliases: ['ליפא שמלצר', 'lipa schmeltzer'] },
  { name: 'חיים ישראל', aliases: ['חיים ישראל', 'chaim israel'] },
  { name: 'איציק דדיה', aliases: ['איציק דדיה', 'itzik dadya'] },
  { name: 'מרדכי שפירא', aliases: ['מרדכי שפירא', 'mordechai shapiro'] },
  { name: 'יונתן רזאל', aliases: ['יונתן רזאל', 'yonatan razel'] },
  { name: 'שולם למר', aliases: ['שולם למר', 'shulem lemmer'] },
  { name: 'שמחה ליינר', aliases: ['שמחה ליינר', 'simcha leiner'] },
  { name: 'ברי וובר', aliases: ['ברי וובר', 'beri weber'] },
  { name: 'ברוך לוין', aliases: ['ברוך לוין', 'baruch levine'] }
];

// שירים מוכנים לבחירה, בנוסף לקטלוג הגדול ב-songs.js. הם עובדים גם עם סינון אינטרנט שחוסם את יוטיוב.
// מוסיפים שיר: { singer: 'שם', style: 'סגנון', title: 'שם השיר', url: 'קישור יוטיוב' }
// סגנונות: חסידי, מזרחי, מוזיקה יהודית, מקהלות, תזמורות וחתונות, ילדים (או סגנון חדש – יופיע לבד)
window.KOSHER_SONGS = [
  { singer: 'ישי ריבו', style: 'מוזיקה יהודית', title: 'לא לחינם', url: 'https://www.youtube.com/watch?v=8Be-_tkVljQ' },
  { singer: 'ישי ריבו', style: 'מוזיקה יהודית', title: 'הלב שלי', url: 'https://www.youtube.com/watch?v=6U_5KhaH6IM' },
  { singer: 'ישי ריבו', style: 'מוזיקה יהודית', title: 'מלוך', url: 'https://www.youtube.com/watch?v=qLDXIHDDvbI' },
  { singer: 'ישי ריבו', style: 'מוזיקה יהודית', title: 'ארץ ישראל', url: 'https://www.youtube.com/watch?v=OkZ30zLdHTY' },
  { singer: 'עקיבא', style: 'מוזיקה יהודית', title: 'רוצה להיות טוב', url: 'https://www.youtube.com/watch?v=9c5jc_p_9NA' },
  { singer: 'עקיבא', style: 'מוזיקה יהודית', title: 'ללמוד לעוף', url: 'https://www.youtube.com/watch?v=vkzfmRRqf8o' },
  { singer: 'עקיבא', style: 'מוזיקה יהודית', title: 'תפילות וצעקות', url: 'https://www.youtube.com/watch?v=euWFyNhq0-k' },
  { singer: 'עקיבא', style: 'מוזיקה יהודית', title: 'פשוטים', url: 'https://www.youtube.com/watch?v=e8LX8SxYWdI' },
  { singer: 'מוטי שטיינמץ', style: 'חסידי', title: 'הנשמה בקרבי', url: 'https://www.youtube.com/watch?v=lsBFwjHvCjg' },
  { singer: 'מוטי שטיינמץ', style: 'חסידי', title: 'ומתקדש', url: 'https://www.youtube.com/watch?v=q-JK6ghfHdE' },
  { singer: 'יעקב שוואקי', style: 'מוזיקה יהודית', title: 'ירושלים', url: 'https://www.youtube.com/watch?v=C7ruAmWfb4A' },
  { singer: 'יעקב שוואקי', style: 'מוזיקה יהודית', title: 'קדיש', url: 'https://www.youtube.com/watch?v=4H8Newq1BMc' },
  { singer: 'יעקב שוואקי', style: 'מוזיקה יהודית', title: 'גוף ונשמה', url: 'https://www.youtube.com/watch?v=jZDd18DVaKg' },
  { singer: 'אברהם פריד', style: 'חסידי', title: 'Father Don\'t Cry', url: 'https://www.youtube.com/watch?v=i9R72YpPq10' },
  { singer: 'אברהם פריד', style: 'חסידי', title: 'מוריה', url: 'https://www.youtube.com/watch?v=oX0jXPThHkY' },
  { singer: 'בני פרידמן', style: 'מוזיקה יהודית', title: 'תודה', url: 'https://www.youtube.com/watch?v=MScVEbVjAVc' },
  { singer: 'בני פרידמן', style: 'מוזיקה יהודית', title: 'יש תקווה', url: 'https://www.youtube.com/watch?v=PIPCHjFC9yk' },
  { singer: 'בני פרידמן', style: 'מוזיקה יהודית', title: 'לא לפחד', url: 'https://www.youtube.com/watch?v=zCw-h4ikn_c' },
  { singer: 'בני פרידמן', style: 'מוזיקה יהודית', title: 'עברי אנכי', url: 'https://www.youtube.com/watch?v=aii3fDdZnrM' }
];
