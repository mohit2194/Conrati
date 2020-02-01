import LinkedinIcon from '../assets/SocialLinkIcons/social_linkedin.png';
import FacebookIcon from '../assets/SocialLinkIcons/social_facebook.png';
import TwitterIcon from '../assets/SocialLinkIcons/social_twitter.png';
import YoutubeIcon from '../assets/SocialLinkIcons/social_youtube_default.png';
const lists = {
    listOne : {
        Header: 'Company',
        lists: ['About Us',
        'Contact Us',
        'Disclaimers']
    },

    listTwo: {
        Header: 'Help',
        lists: [
            'How it Works',
            'Support',
            'Trust and Saftey'
        ]
    },

    listThree: {
        Header: "Legalities",
        lists: [
            'Privacy',
            'Terms and Conditions',
            'Code of Conduct'
        ]

    },

    listFour : {
        HeaderOne: 'Connect With Us',
        HeaderTwo: 'Copyright Conrati 2018',
        lists: [
            LinkedinIcon,
            FacebookIcon,
            TwitterIcon,
            YoutubeIcon
        ]
    }
}



export default lists;