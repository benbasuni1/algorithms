import collections
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
      for val, count in Counter(nums).items():
        if count == 1:
          return val

