class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
      if (len(nums) == 0):
        return 0

      current = 0

      for nextVal in range(1, len(nums)):
        if nums[nextVal] != nums[current]:
          current += 1
          nums[current] = nums[nextVal]

      return current + 1

