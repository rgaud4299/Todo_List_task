import { Injectable } from '@angular/core';
import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interface/course.interface';


@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor() { }
 
  getCourses():any {
    // const data = localStorage.getItem(Strings.STORAGE_KEY);
    // console.log(data);
    const data=categoryObject;
    console.log("hello");
    if (data) {
    // const courses = JSON.parse(data);
    const courses=categoryObject;
    return courses;
    }
    return {}
  }
}


const categoryObject = {
  work: [
    {
      title: "Accounting Tasks",
      img: "imgs/cardimg.jpg",
      description: "Create a system to keep your books, receipts, and invoices organized.",
      backgroundColor: "#f0f0f0",
    },
    {
      title: "Business Travel Packing",
      img: "imgs/study.jpg",
      description: "Never forget your laptop charger, lucky shoes, or passport again.",
      backgroundColor: "#e0e0e0",
    },
    {
      title: "Client Management",
      img: "imgs/phone.jpg",
      description: "Organize your work with clients from the smallest to largest details.",
      backgroundColor: "#d0d0d0",
    },
    {
      title: "Deep Work",
      img: "imgs/img.jpg",
      description: "Practice prioritizing focus and eliminating distraction with this template.",
      backgroundColor: "#c0c0c0",
    },
    {
      title: "Meeting Agenda",
      img: "imgs/study.jpg",
      description: "Waste less time in meetings, ensuring they're efficient and action-oriented.",
      backgroundColor: "#b0b0b0",
    }
  ],
  personal: [
    {
      title: "Daily Planner",
      img: "imgs/download.jpg",
      description: "Plan your day efficiently and achieve your personal goals.",
      backgroundColor: "#f5e0e0",
    },
    {
      title: "Fitness Goals",
      img: "imgs/downloadbook.jpg",
      description: "Track your workouts and stay motivated to maintain a healthy lifestyle.",
      backgroundColor: "#e0f5e0",
    },
    {
      title: "Grocery List",
      img: "imgs/phone.jpg",
      description: "Never forget an item when you go shopping.",
      backgroundColor: "#e0e0f5",
    },
    {
      title: "Budget Tracker",
      img: "imgs/cardimg.jpg",
      description: "Manage your personal finances and savings effectively.",
      backgroundColor: "#f0e5d0",
    },
    {
      title: "Vacation Planning",
      img: "imgs/study.jpg",
      description: "Organize your travel itinerary and make the most of your holidays.",
      backgroundColor: "#d0f0f0",
    }
  ],
  education: [
    {
      title: "Study Schedule",
      img: "imgs/cardimg.jpg",
      description: "Create a structured study plan to ace your exams.",
      backgroundColor: "#e0f0f5",
    },
    {
      title: "Course Tracker",
      img: "imgs/downloadbook.jpg",
      description: "Keep track of your courses, assignments, and deadlines.",
      backgroundColor: "#e5f0e0",
    },
    {
      title: "Research Notes",
      img: "imgs/cardimg.jpg",
      description: "Organize your research material efficiently.",
      backgroundColor: "#f0e0e5",
    }
  ],
  management: [
    {
      title: "Project Management",
      img: "imgs/img.jpg",
      description: "Manage projects and track progress effectively.",
      backgroundColor: "#e0d0f0",
    },
    {
      title: "Team Collaboration",
      img: "imgs/cardimg.jpg",
      description: "Enhance team productivity and communication.",
      backgroundColor: "#d0e0f0",
    }
  ],
  marketingSales: [
    {
      title: "Sales Pipeline",
      img: "imgs/downloadbook.jpg",
      description: "Track sales leads and convert opportunities.",
      backgroundColor: "#f0d0e0",
    },
    {
      title: "Campaign Planner",
      img: "imgs/img.jpg",
      description: "Organize marketing campaigns and measure success.",
      backgroundColor: "#f0e0d0",
    }
  ],
  customerSupport: [
    {
      title: "Support Tickets",
      img: "imgs/cardimg.jpg",
      description: "Manage customer queries and ensure timely responses.",
      backgroundColor: "#d0f0e0",
    },
    {
      title: "Feedback Tracker",
      img: "imgs/downloadbook.jpg",
      description: "Collect and analyze customer feedback.",
      backgroundColor: "#e0f0d0",
    }
  ]
};
