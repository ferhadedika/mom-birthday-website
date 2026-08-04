// ============================================================================
// Every word and every photo placeholder on this site lives in this file.
// Edit anything here freely, none of it will touch the design or the code.
//
// Photos: each item below has a `src` like "/images/hero.jpg". Add a real
// photo to the /public/images folder using that exact filename and it will
// appear automatically. Until then, an elegant placeholder is shown instead.
// See /public/images/README.md for the full shot list in one place.
// ============================================================================

export const site = {
  motherName: 'Mama', // change to her name, or Ibu, Umi, Mama, whatever you call her
  signature: 'Adey', // how you sign off at the end of the letter and footer
}

export const hero = {
  eyebrow: 'Happy Birthday',
  headline: site.motherName,
  message:
    "Every year this day comes around and I try to find the right words. There's never quite enough of them. Here's my best attempt anyway.",
  scrollHint: 'Scroll to read on',
  photo: {
    src: '/images/hero.jpg',
    alt: `${site.motherName} and her son together`,
    label: 'Your favorite photo of her',
    hint: 'images/hero.jpg',
  },
}

export const letter = {
  eyebrow: 'From Me To You',
  title: 'A Letter To You',
  salutation: `Dear ${site.motherName},`,
  paragraphs: [
    'Happy Birthday.',
    'Thank you for everything you have done for me. Thank you for your endless love, care, patience, and sacrifices. I would not be who I am today without you.',
    'I am truly grateful to have you as my mama, and I love you more than words can express.',
    'May Allah bless you always with good health, happiness, peace, and countless beautiful moments. May He grant you a long life filled with love and barakah.',
    `Happy Birthday, ${site.motherName}. I love you always.`,
  ],
  signoff: 'With all my love,',
}

export const admire = {
  eyebrow: 'In My Eyes',
  title: 'Things I Admire About You',
  description: 'A few of the many',
  items: [
    {
      title: 'Your Love',
      body: 'Thank you for loving me unconditionally and always believing in me. No matter what happened, I always knew I could count on you.',
    },
    {
      title: 'Your Kindness',
      body: 'Your kindness has taught me how to care for others and always choose compassion. You have the biggest heart, and I am so grateful to learn from you every day.',
    },
    {
      title: 'Your Patience',
      body: 'Thank you for your endless patience as I grew up. You always guided me with understanding and never stopped supporting me, even when I made mistakes.',
    },
  ],
}

export const thankYou = {
  eyebrow: 'With Gratitude',
  title: 'Thank You For Everything',
  paragraphs: [
    "Thank you for everything you've done for me, even the things I never noticed growing up. I know you made many sacrifices so I could have a better life, and I will always be grateful for that.",
    'Thank you for always being there for me, through the good times and the difficult ones. Your love and support have meant more to me than words can say.',
  ],
  closingLine: 'None of this was owed to you. You gave it anyway.',
}

export const memories = {
  eyebrow: 'Looking Back',
  title: 'Favorite Memories',
  description: 'A few moments I hold onto',
  items: [
    {
      label: 'Family',
      caption: 'Dressed up together for a celebration',
      src: '/images/memory-couple.jpg',
      alt: 'Mama and Dad dressed up together',
      hint: 'images/memory-couple.jpg',
    },
    {
      label: 'Sweet Treats',
      caption: 'Celebrating over cake and coffee',
      src: '/images/memory-cafe.jpg',
      alt: 'Mama at a cafe with cake and coffee',
      hint: 'images/memory-cafe.jpg',
    },
    {
      label: 'Flowers For You',
      caption: 'A bouquet as bright as your smile',
      src: '/images/memory-flowers.jpg',
      alt: 'Mama holding a bouquet of flowers',
      hint: 'images/memory-flowers.jpg',
    },
    {
      label: 'By The Sea',
      caption: 'A getaway to remember, just the two of us',
      src: '/images/memory-beach.jpg',
      alt: 'Mama and son at the beach',
      hint: 'images/memory-beach.jpg',
    },
    {
      label: 'Just Us',
      caption: 'Even the ordinary errands felt good with you around',
      src: '/images/memory-mask.jpg',
      alt: 'Mama and son running errands together',
      hint: 'images/memory-mask.jpg',
    },
  ],
}

// The connecting line in this section is illustrated as a vine that grows
// as you scroll, with a small bloom opening at each moment. Replace the
// placeholder markers below with real years whenever you're ready.
export const timeline = {
  eyebrow: 'Our Story',
  title: 'Through The Years',
  items: [
    { year: 'The Start', text: 'This is where your story with our family began.' }, // TODO: real year
    { year: 'A New Arrival', text: 'Everything changed for you, in the best way.' },
    { year: 'The Everyday Years', text: 'School runs and packed lunches. They felt small then and mean everything now.' },
    { year: 'Every Milestone', text: 'Every recital, every graduation, every big day. You were there for all of them.' },
    { year: 'Today', text: 'Still going strong. Still the heart of this family.' },
  ],
}

// Sizes control the visual weight of each line (lg, md, or sm). Adjust
// them if you want to change which lines stand out most.
export const reasons = {
  eyebrow: 'The List Goes On',
  title: 'Reasons Why I Love You',
  description: 'I could fill a hundred pages. Here are a few.',
  items: [
    { text: 'Because you loved me before I did anything to deserve it', size: 'lg' },
    { text: 'Because you remember small details about my life that I forget myself', size: 'sm' },
    { text: 'Because your hugs still fix things a bad day could not', size: 'md' },
    { text: 'Because you taught me what it means to actually show up for people', size: 'md' },
    { text: 'Because you say what you mean and mean what you say', size: 'sm' },
    { text: 'Because you celebrate my wins louder than I do', size: 'md' },
    { text: 'Because you never once made your love feel conditional', size: 'lg' },
    { text: 'Because you are still, after everything, my favorite person to talk to', size: 'lg' },
  ] as { text: string; size: 'lg' | 'md' | 'sm' }[],
}

export const finalMessage = {
  eyebrow: 'Before I Go',
  paragraphs: [
    'So here is what I actually want to say, underneath all of this.',
    `Happy birthday, ${site.motherName}. I hope this year brings you the same peace and joy you've spent your whole life giving everyone else. I hope your health stays strong and your days stay full of small good things. I hope you get to rest more, worry less, and feel, even for one day, exactly how loved you are.`,
    "Here's to many more birthdays. Many more years of your laugh filling this house. Many more chances for me to tell you all of this again, because I plan to.",
  ],
  closingLine: 'I love you today, and every ordinary day after this one.',
}

export const footer = {
  line1: 'With all my love,',
  line2: site.signature,
  note: `Made for ${site.motherName}`,
}
