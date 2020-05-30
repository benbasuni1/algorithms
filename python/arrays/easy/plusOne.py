class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
      sum = 0
      for idx, val in enumerate(reversed(digits)):
        if idx == 0:
          sum += val
        else:
          sum += val * (10 ** idx)

      return [i for i in str(sum + 1)]


