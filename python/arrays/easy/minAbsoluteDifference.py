class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
      result = []

      # sort array
      arr.sort()

      # find minimum abs difference
      minDiff = sys.maxsize

      for index, num in enumerate(arr):
        if index < (len(arr) - 1):
          nextVal = arr[index + 1]
          if abs(nextVal - num) < minDiff:
            minDiff = abs(nextVal - num)

      # check next and current === minDiff
      for index, num in enumerate(arr):
        if index < (len(arr) -1):
          nextVal = arr[index + 1]
          if nextVal - num == minDiff:
            result.append([num, nextVal])

      return result

