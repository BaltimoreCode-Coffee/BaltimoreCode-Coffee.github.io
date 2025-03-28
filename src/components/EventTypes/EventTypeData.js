import lightningTalk from '../../assets/carouselImages/lightning_talk.jpg'
import symposium from '../../assets/carouselImages/symposium.jpg'
import regularMeeting from '../../assets/carouselImages/regular_meeting.png'
import workshop from '../../assets/carouselImages/workshop.png'
import demoDay from '../../assets/carouselImages/demo_day.jpg'

const EventTypeData = [
    {
        name: "Lightning Talks",
        description: "In our lightning talks, speakers present for 10 minutes on topics ranging from innovation, software, design, and more.\n\nAt the end of each talk, the floor is open for you to ask questions and have a dialogue with the speakers. The talks form a fast-paced and energetic scene, where you can laugh, learn, and leave inspired.",        
        img: lightningTalk,
        btnTxt: 'Sign Up',
        link: 'https://forms.gle/Lb3NfQLqhfxbv2oX7 ',
        id: "lightning-talk-card",
        tag: "lightning-talks"
    },
    {
        name: "Symposiums",
        description: "Our symposium panel is a conversation among four experts from various backgrounds around a central topic. The panel is split into two groups, one in favor of a premise, the other against it. The panel debates for two 30-40 minute rounds, with a 15 minute intermission and time for questions in the second round.",
        img: symposium,
        btnTxt: 'Sign Up',
        link: 'https://forms.gle/hTqzESszwoJZuodq5',
        id: "symposium-card",
        tag: "symposiums"
    },
    {
        name: "Regular Meetings",
        description: "Welcome to the stomping ground of coders across the city! Beginners, professionals, students, hobbyists— all are welcome. Bring your work, project, questions, or just bring you. Enjoy the donuts, fresh coffee, and flowing conversation.",
        img: regularMeeting,
        btnTxt: 'View Events',
        link: '/event-calendar',
        id: "regular-meeting-card",
        tag: "meetings"
    },
    {
        name: "Workshops",
        description: "Our workshops are a fun, hands on, introduction to various topics in CS and adjacent fields. Typically participants just need two prerequisites: A laptop and enthusiasm! We’ve had workshops ranging from using GIT in open source to communication skills for developers.",
        img: workshop,
        btnTxt: 'Sign Up',
        link: 'https://forms.gle/PRV7fgARQ3wXxzHDA ',
        id: "workshop-card",
        tag: "workshops"
    },
    {
        name: "Demo Day",
        description: "Demo day is a chance for talented folks in the community to show off their hard work. Cool projects of various kinds, software, hardware (or both) are welcome. At the end, we vote for the best project!",
        img: demoDay,
        btnTxt: 'Sign Up',
        link: 'https://forms.gle/dt4V7jL5VzhRSBCD9',
        id: "demo-day-card",
        tag: "demo-days"
    },
]

export default EventTypeData