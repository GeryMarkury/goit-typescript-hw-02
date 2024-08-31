/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
	First = "Monday",
	Second = "Tuesday",
	Third = "Wednesday",
	Fourth = "Thirsday",
	Fifth = "Friday",
	Sixth = "Saturday",
	Seventh = "Sunday",
}

function isWeekend(day: DayOfWeek): boolean {
	return day === DayOfWeek.Sixth || day === DayOfWeek.Seventh;
}
