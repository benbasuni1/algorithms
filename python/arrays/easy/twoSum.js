class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      map = {}
      for index, num in enumerate(nums):
        diff = target - num
        if diff in map.keys():
          return [map[diff], index]
        else:
          map[num] = index

