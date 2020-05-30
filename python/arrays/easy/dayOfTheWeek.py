import datetime
4
class Solution:
    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
      weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      result = datetime.datetime(year, month, day)
      return weekdays[result.weekday()]

