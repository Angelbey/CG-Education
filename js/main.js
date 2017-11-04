console.log("This file is linked!");
var teacher = "April May";
var department = "Botany";
var rating1 = 4.5;
var rating2 = 4.0;
var rating3 = 4.5;
var rating4 = 4.8;
var rating5 = 4.2;
var avgRating = (rating1 + rating2 + rating3 + rating4 + rating5)/5;
var teacherRatings = ["4.5", "4.0", "4.5", "4.8", "4.2"];
avgRating = Math.round ( avgRating * 10 ) / 10;
console.log("Teacher: " + teacher);
console.log("Department: " + department);
console.log("Ratings: " + teacherRatings.join(", "));
console.log("Avg Rating: " + avgRating);
var student = "Robin Reed";
var major = "Botany"
var email = "rreed@cg.edu"
console.log("Student: " + student);
console.log("Major: " + major);
console.log("Email Address: " + email);
var studentGpa1 = 3.5;
var studentGpa2 = 4.0;
var studentGpa3 = 3.2;
var avgGpa = (studentGpa1 + studentGpa2 + studentGpa3)/3;
var gpas = ["3.5", "4.0", "3.2"];
avgGpa = Math.round( avgGpa * 10 ) / 10;
console.log("Student GPAs: " + gpas.join(","));
console.log("Avg Student GPA: " + avgGpa);
var teacherRatings = [4.5, 4.0, 4.5, 4.8, 4.2];
var teacherAvgRating = getRatingAvg(teacherRatings);
function getRatingAvg(teacherRatings) {
  var total = 0;
  for (var i = 0; i < teacherRatings.length; i++) {
  total += teacherRatings[i] / teacherRatings.length;
}
  return total = Math.round( total * 10 ) / 10;
}
console.log("Avg Rating: " + teacherAvgRating);
