export interface Review {
  reviewerName: string;
  rating: number;
  reviewText: string;
  date: string;
}

export const reviews: Review[] = [
  {
    reviewerName: "Neil L.",
    rating: 5,
    reviewText: "Joined this gym recently after moving from the UK. What can I say..... WOW. This gym is head and shoulders better than the gyms in the UK. The equipment is much superior in this gym and Anthony is fantastic!",
    date: "September 2025"
  },
  {
    reviewerName: "Sarah M.",
    rating: 5,
    reviewText: "Best gym in Northern Kentucky! The 24/7 access is perfect for my schedule, and the equipment is always clean and well-maintained. The staff is friendly and helpful.",
    date: "August 2025"
  },
  {
    reviewerName: "Mike T.",
    rating: 5,
    reviewText: "I've been a member for over 5 years and wouldn't go anywhere else. Great atmosphere, excellent equipment, and the community here is amazing. Highly recommend!",
    date: "July 2025"
  },
  {
    reviewerName: "Jennifer K.",
    rating: 5,
    reviewText: "Clean facility with top-notch equipment. The 24/7 access is a game changer for my busy schedule. Love this gym!",
    date: "June 2025"
  },
  {
    reviewerName: "David R.",
    rating: 5,
    reviewText: "Outstanding gym! The equipment selection is incredible and the facility is always spotless. Been coming here for years and it just keeps getting better.",
    date: "May 2025"
  },
  {
    reviewerName: "Amanda P.",
    rating: 5,
    reviewText: "This is the best gym I've ever been to. The staff is welcoming, the equipment is modern, and I love that it's open 24/7. Perfect for my fitness goals!",
    date: "April 2025"
  }
];
