class Solution:
    def minStartValue(self, nums: List[int]) -> int:
      sum = 0
      minVal = 0

      for num in nums:
        sum += num
        minVal = min(sum, minVal)

      return abs(minVal) + 1

