class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      map = {}

      for index, num in enumerate(nums):
        diff = target - num
        if num in map.keys():
          return [map[num], index]
        else:
          map[diff] = index

      return []

