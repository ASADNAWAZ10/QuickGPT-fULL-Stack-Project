import { Features } from "tailwindcss"
import logo from './logo.jpg'
import logo_full from './logo_full.jpg' 
import logo_full_dark from './logo_full_dark.jpg' 
import searchicon from './searchicon.jpg' 
import usericon from './usericon.jpg'     
import themeicon from './themeicon.jpg'   
import sendicon from './sendicon.jpg'
import stop from './stop.jpg'
import mountain from './mountain.jpg'
import menuIcon from './menuIcon.jpg'
import closeimage from './closeimage.jpg'
import bin from './bin.jpg'
import logout from './logout.jpg'
import diamond from './diamond.jpg'
import gallery from './gallery.jpg'


export const assets = {
    logo, 
    logo_full,
    logo_full_dark,
    searchicon,
    usericon,
    themeicon,
    sendicon,
    stop,
    mountain,
    menuIcon,
    closeimage,
    bin,
    logout,
    diamond,
    gallery
}


export const dummyUserData = {
    "_id" : "123344", 
    "name" : "AsadNawaz",
    "email" : "AsadNawazOfficial156@gmail.com",
    "password" : "$dkfjsh348#jkfjd",
    "credits" : 200
}

export const dummyPlans = [
    {
    _id : "basic", 
    name : "Basic",
    price : 10,
    credits : 100,
    Features : ['100 text generators', '50 iamges generators',
        'standard support', 'Access to the basic models']
},

{
    _id : "pro", 
    name : "Pro",
    price : 20,
    credits : 100,
    Features : ['500 text generators', '50 iamges generators',
        'standard support', 'Access to the pro models']
},

{
  _id : "premium", 
  name : "Premium",
  price : 30,
  credits : 1000,
  Features : ['1000 text generators', '500 iamges generators',
      'standard support', '24/7 VIP support', 'Access to the pro models', 
    'Dedicated account manager' ]
},
]

export const dummyChats = [
    {
      _id: "chat1",
      userId: "user1",
      username: "asad_dev",
      name: "Asad Nawaz",
      messages: [
        {
          content: "Hey, how are you?"
        },
        {
          content: "I am working on my QuickGPT project."
        },
        {
          content: "Do you have any suggestions?"
        }
      ]
    },
    {
      _id: "chat2",
      userId: "user2",
      username: "john_doe",
      name: "John Doe",
      messages: [
        {
          content: "Hello!"
        },
        {
          content: "Can you help me with React?"
        },
        {
          content: "I am stuck in state management."
        }
      ]
    },
    {
      _id: "chat3",
      userId: "user3",
      username: "sara_khan",
      name: "Sara Khan",
      messages: [
        {
          content: "Good morning!"
        },
        {
          content: "I just deployed my app."
        },
        {
          content: "It’s live now 🚀"
        }
      ]
    },
    {
      _id: "chat4",
      userId: "user4",
      username: "ali_codes",
      name: "Ali Ahmed",
      messages: [
        {
          content: "Bro API not working 😭"
        },
        {
          content: "Getting 500 error"
        },
        {
          content: "Any idea?"
        }
      ]
    },
    {
      _id: "chat5",
      userId: "user5",
      username: "fatima_ui",
      name: "Fatima Noor",
      messages: [
        {
          content: "Check this UI design"
        },
        {
          content: "Is it good for chat app?"
        },
        {
          content: "I used Tailwind CSS"
        }
      ]
    }
  ];
  
export const dummyPublishedImages = {
  
}